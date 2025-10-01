"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/input/Input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectLabel,
} from "@/components/select/Select";
import ConsultationBanner from "@/components/consultationBanner/ConsultationBanner";
import { Product } from "@/data/products";
import cn from "classnames/bind";
import styles from "./OrderSection.module.scss";
import Caution from "@/assets/icons/Caution";
import Link from "next/link";

const cx = cn.bind(styles);

interface OrderSectionProps {
  product: Product;
}

interface OrderFormData {
  title: string;
  quantity: number | null;
  file: File | null;
}

export default function OrderSection({ product }: OrderSectionProps) {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = useForm<OrderFormData>({
    defaultValues: {
      title: "",
      quantity: null,
      file: null,
    },
    mode: "onChange",
  });

  const quantity = watch("quantity");
  const uploadedFile = watch("file");

  // 선택값 state 관리
  const [optionSelections, setOptionSelections] = useState<
    Record<string, number>
  >({});
  const [selectedOptionValues, setSelectedOptionValues] = useState<
    Record<string, string>
  >({});

  // 가격 포맷팅 함수
  const formatPrice = (price: number) => {
    return price.toLocaleString("ko-KR");
  };

  // 총 가격 계산
  const productPrice =
    quantity && product.basePrice ? product.basePrice * quantity : 0;
  const optionsPrice = Object.values(optionSelections).reduce(
    (sum, price) => sum + price,
    0
  );
  const totalPrice = productPrice + optionsPrice;

  // 수량 변경 핸들러
  const handleQuantityChange = (value: string) => {
    const selected = product.quantities?.find((q) => q.label === value);
    if (selected) {
      setValue("quantity", selected.value, { shouldValidate: true });
    }
  };

  // 옵션 변경 핸들러
  const handleOptionChange = (
    optionLabel: string,
    itemName: string,
    itemPrice: number
  ) => {
    setOptionSelections((prev) => ({
      ...prev,
      [optionLabel]: itemPrice,
    }));
    setSelectedOptionValues((prev) => ({
      ...prev,
      [optionLabel]: itemName,
    }));
  };

  // 파일 업로드 핸들러
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("file", file, { shouldValidate: true });
    }
  };

  // 파일 업로드 버튼 클릭 핸들러
  const handleUploadButtonClick = () => {
    document.getElementById("file-input")?.click();
  };

  const handleFileRemove = () => {
    setValue("file", null, { shouldValidate: true });
    // input 요소도 초기화
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  // 주문 제출 핸들러
  const onSubmit = (data: OrderFormData) => {
    console.log("주문 데이터:", data);
  };

  // 장바구니 추가 핸들러
  const handleAddToCart = async () => {
    const isValid = await trigger(["quantity", "file"]);
    if (isValid) {
      console.log("장바구니 추가");
    }
  };

  return (
    <div className={cx("order-section")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cx("order-form")}>
          <Controller
            name="title"
            control={control}
            rules={{ required: "제작물 제목을 입력해주세요" }}
            render={({ field }) => (
              <Input
                {...field}
                label="제작물 제목"
                placeholder="제작물 제목을 입력해주세요."
                error={errors.title}
              />
            )}
          />
          {product.quantities && (
            <Controller
              name="quantity"
              control={control}
              rules={{ required: "수량을 선택해주세요" }}
              render={({ field }) => (
                <Select
                  value={
                    field.value
                      ? product.quantities?.find((q) => q.value === field.value)
                          ?.label
                      : ""
                  }
                  onValueChange={handleQuantityChange}
                  error={errors.quantity}
                >
                  <SelectLabel htmlFor="quantity">수량</SelectLabel>
                  <SelectTrigger>
                    <SelectValue placeholder="수량을 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.quantities?.map((q) => (
                      <SelectItem key={q.value} value={q.label}>
                        {q.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          )}
          {product.options?.map((option) => (
            <div key={option.label}>
              <Select
                value={selectedOptionValues[option.label] || ""}
                onValueChange={(value) => {
                  const item = option.items.find(
                    (i: { name: string; price: number }) => i.name === value
                  );
                  if (item) {
                    handleOptionChange(option.label, item.name, item.price);
                  }
                }}
              >
                <SelectLabel htmlFor={option.label}>{option.label}</SelectLabel>
                <SelectTrigger>
                  <SelectValue placeholder={`${option.label}을 선택하세요`} />
                </SelectTrigger>
                <SelectContent>
                  {option.items.map((item: { name: string; price: number }) => (
                    <SelectItem key={item.name} value={item.name}>
                      {item.name}
                      {item.price > 0 && ` (${formatPrice(item.price)}원)`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
        <Controller
          name="file"
          control={control}
          rules={{ required: "디자인 파일을 업로드해주세요" }}
          render={() => (
            <div className={cx("upload-button")}>
              <input
                id="file-input"
                type="file"
                onChange={handleFileUpload}
                accept=".pdf,.ai,.psd,.jpg,.jpeg,.png"
              />
              <button type="button" onClick={handleUploadButtonClick}>
                디자인 파일 업로드
              </button>
              {uploadedFile && (
                <div className={cx("file")}>
                  <p className={cx("file-name")}>{uploadedFile.name}</p>
                  <span onClick={handleFileRemove}>x</span>
                </div>
              )}
              {errors.file && (
                <p className={cx("error-message")}>{errors.file.message}</p>
              )}
            </div>
          )}
        />
        <div>
          <ConsultationBanner />
        </div>
        <div className={cx("price")}>
          <div className={cx("item")}>
            <p>상품 금액</p>
            <p>{formatPrice(productPrice)}원</p>
          </div>
          {product.options?.map((option) => {
            const price = optionSelections[option.label] || 0;
            return (
              <div key={option.label} className={cx("item")}>
                <p>{option.label} 금액</p>
                <p>{formatPrice(price)}원</p>
              </div>
            );
          })}
          <div className={cx("item")}>
            <p>총 금액</p>
            <div className={cx("total-price")}>
              <p>{formatPrice(totalPrice)}원</p>
              <p>배송비 별도</p>
            </div>
          </div>
        </div>
        <div className={cx("button")}>
          <button type="button" onClick={handleAddToCart}>
            장바구니
          </button>
          <button type="submit">주문하기</button>
        </div>
        <div className={cx("caution-box")}>
          <div className={cx("caution-title")}>
            <Caution />
            <h3>참고사항</h3>
          </div>
          <div className={cx("caution-content")}>
            <p>
              • 500장 이상은 <Link href="">대량문의</Link>를 통해 주문해 주세요.
            </p>
            <p>
              • 맞춤 디자인이 필요한 경우 카카오톡 디자인 상담을 통해 문의해
              주세요.
            </p>
            <p>• 디자인 파일 없는 경우 주문이 진행되지 않습니다.</p>
          </div>
        </div>
      </form>
    </div>
  );
}

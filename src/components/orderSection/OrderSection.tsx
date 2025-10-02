"use client";

import { Controller } from "react-hook-form";
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
import { formatPrice } from "@/utils/price";
import { useOrderForm } from "@/hooks/useOrderForm";
import { useOrderPrice } from "@/hooks/useOrderPrice";
import cn from "classnames/bind";
import styles from "./OrderSection.module.scss";
import Caution from "@/assets/icons/Caution";
import Link from "next/link";

const cx = cn.bind(styles);

interface OrderSectionProps {
  product: Product;
}

export default function OrderSection({ product }: OrderSectionProps) {
  const {
    control,
    errors,
    handleSubmit,
    quantity,
    uploadedFile,
    optionSelections,
    handleQuantityChange,
    handleOptionChange,
    handleFileUpload,
    handleFileRemove,
    handleUploadButtonClick,
    handleAddToCart,
    onSubmit,
  } = useOrderForm(product);

  const { productPrice, totalPrice } = useOrderPrice(
    product,
    quantity,
    optionSelections
  );

  return (
    <div className={cx("OrderSection")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cx("OrderForm")}>
          {/* 제작물 제목 폼*/}
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

          {/* 수량 입력 폼 */}
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

          {/* 제품 별 상세 옵션 Select */}
          {product.options?.map((option) => (
            <Controller
              key={option.label}
              name={`options.${option.label}` as const}
              control={control}
              rules={{ required: `${option.label}을 선택해주세요` }}
              render={({ field }) => (
                <Select
                  value={field.value || ""}
                  onValueChange={(value) => {
                    const item = option.items.find(
                      (i: { name: string; price: number }) => i.name === value
                    );
                    if (item) {
                      field.onChange(value);
                      handleOptionChange(option.label, item.price);
                    }
                  }}
                  error={errors.options?.[option.label]}
                >
                  <SelectLabel htmlFor={option.label}>
                    {option.label}
                  </SelectLabel>
                  <SelectTrigger>
                    <SelectValue placeholder={`${option.label}을 선택하세요`} />
                  </SelectTrigger>
                  <SelectContent>
                    {option.items.map(
                      (item: { name: string; price: number }) => (
                        <SelectItem key={item.name} value={item.name}>
                          {item.name}
                          {item.price > 0 && ` (${formatPrice(item.price)}원)`}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              )}
            />
          ))}
        </div>

        {/* 디자인 파일 업로드 */}
        <Controller
          name="file"
          control={control}
          rules={{ required: "디자인 파일을 업로드해주세요" }}
          render={() => (
            <div className={cx("UploadButton")}>
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
                <div className={cx("File")}>
                  <p className={cx("FileName")}>{uploadedFile.name}</p>
                  <span onClick={handleFileRemove}>x</span>
                </div>
              )}
              {errors.file && (
                <p className={cx("ErrorMessage")}>{errors.file.message}</p>
              )}
            </div>
          )}
        />

        {/* 상담 배너 */}
        <div>
          <ConsultationBanner />
        </div>

        {/* 가격 */}
        <div className={cx("Price")}>
          <div className={cx("Item")}>
            <p>상품 금액</p>
            <p>{formatPrice(productPrice)}원</p>
          </div>
          {product.options?.map((option) => {
            const price = optionSelections[option.label] || 0;
            return (
              <div key={option.label} className={cx("Item")}>
                <p>{option.label} 금액</p>
                <p>{formatPrice(price)}원</p>
              </div>
            );
          })}
          <div className={cx("Item")}>
            <p>총 금액</p>
            <div className={cx("TotalPrice")}>
              <p>{formatPrice(totalPrice)}원</p>
              <p>배송비 별도</p>
            </div>
          </div>
        </div>

        {/* 버튼 */}
        <div className={cx("Button")}>
          <button type="button" onClick={handleAddToCart}>
            장바구니
          </button>
          <button type="submit">주문하기</button>
        </div>

        {/* 주의사항 */}
        <div className={cx("CautionBox")}>
          <div className={cx("CautionTitle")}>
            <Caution />
            <h3>참고사항</h3>
          </div>
          <div className={cx("CautionContent")}>
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

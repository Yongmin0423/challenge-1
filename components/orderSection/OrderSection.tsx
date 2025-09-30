"use client";

import { useState } from "react";
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

export default function OrderSection({ product }: OrderSectionProps) {
  // 선택값 state 관리
  const [quantity, setQuantity] = useState("1");
  const [selectedPostProcessing, setSelectedPostProcessing] = useState("");
  const [selectedAdditionalItems, setSelectedAdditionalItems] = useState("");

  // 가격 state 관리
  const [productPrice, setProductPrice] = useState(10000);
  const [postProcessingPrice, setPostProcessingPrice] = useState(0);
  const [additionalItemsPrice, setAdditionalItemsPrice] = useState(0);

  // 총 금액 계산
  const totalPrice = productPrice + postProcessingPrice + additionalItemsPrice;

  // 가격 포맷팅 함수
  const formatPrice = (price: number) => {
    return price.toLocaleString("ko-KR");
  };

  // 라벨 매핑 객체
  const quantityLabels: Record<string, string> = {
    "1": "1개",
    "10": "10개",
    "50": "50개",
    "100": "100개",
  };

  const postProcessingLabels: Record<string, string> = {
    "0": "선택 안함",
    "5000": "둥근목+끈마감 (5,000원)",
    "8000": "코팅 (8,000원)",
    "12000": "라미네이팅 (12,000원)",
  };

  const additionalItemsLabels: Record<string, string> = {
    "0": "선택 안함",
    "3000": "로프 6cm 추가 (3,000원)",
    "5000": "스탠드 (5,000원)",
    "7000": "액자 (7,000원)",
  };

  // 수량 변경 핸들러
  const handleQuantityChange = (value: string) => {
    setQuantity(value);
    // 기본 단가 10,000원 * 수량
    setProductPrice(10000 * parseInt(value));
  };

  // 후가공 변경 핸들러
  const handlePostProcessingChange = (value: string) => {
    setSelectedPostProcessing(value);
    setPostProcessingPrice(parseInt(value));
  };

  // 추가 물품 변경 핸들러
  const handleAdditionalItemsChange = (value: string) => {
    setSelectedAdditionalItems(value);
    setAdditionalItemsPrice(parseInt(value));
  };

  return (
    <div className={cx("order-section")}>
      <div className={cx("order-form")}>
        <form>
          <Input
            label="제작물 제목"
            placeholder="제작물 제목을 입력해주세요."
          />
          <div>
            <Select value={quantity} onValueChange={handleQuantityChange}>
              <SelectLabel htmlFor="quantity">수량</SelectLabel>
              <SelectTrigger>
                <SelectValue placeholder="수량을 선택하세요">
                  {quantityLabels[quantity]}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1개</SelectItem>
                <SelectItem value="10">10개</SelectItem>
                <SelectItem value="50">50개</SelectItem>
                <SelectItem value="100">100개</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select
              value={selectedPostProcessing}
              onValueChange={handlePostProcessingChange}
            >
              <SelectLabel htmlFor="postProcessing">후가공</SelectLabel>
              <SelectTrigger>
                <SelectValue placeholder="후가공을 선택하세요">
                  {postProcessingLabels[selectedPostProcessing]}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">선택 안함</SelectItem>
                <SelectItem value="5000">둥근목+끈마감 (5,000원)</SelectItem>
                <SelectItem value="8000">코팅 (8,000원)</SelectItem>
                <SelectItem value="12000">라미네이팅 (12,000원)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select
              value={selectedAdditionalItems}
              onValueChange={handleAdditionalItemsChange}
            >
              <SelectLabel htmlFor="additionalItems">추가 물품</SelectLabel>
              <SelectTrigger>
                <SelectValue placeholder="추가 물품을 선택하세요">
                  {additionalItemsLabels[selectedAdditionalItems]}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">선택 안함</SelectItem>
                <SelectItem value="3000">로프 6cm 추가 (3,000원)</SelectItem>
                <SelectItem value="5000">스탠드 (5,000원)</SelectItem>
                <SelectItem value="7000">액자 (7,000원)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>
      <div className={cx("button")}>
        <button>디자인 파일 업로드</button>
      </div>
      <div>
        <ConsultationBanner />
      </div>
      <div className={cx("price")}>
        <div className={cx("item")}>
          <p>상품 금액</p>
          <p>{formatPrice(productPrice)}원</p>
        </div>
        <div className={cx("item")}>
          <p>후가공 금액</p>
          <p>{formatPrice(postProcessingPrice)}원</p>
        </div>
        <div className={cx("item")}>
          <p>추가 물품</p>
          <p>{formatPrice(additionalItemsPrice)}원</p>
        </div>
        <div className={cx("item")}>
          <p>총 금액</p>
          <div className={cx("total-price")}>
            <p>{formatPrice(totalPrice)}원</p>
            <p>배송비 별도</p>
          </div>
        </div>
      </div>
      <div className={cx("button")}>
        <button>장바구니</button>
        <button>주문하기</button>
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
    </div>
  );
}

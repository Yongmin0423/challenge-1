// 가격 포맷팅 함수
export const formatPrice = (price: number): string => {
  return price.toLocaleString("ko-KR");
};

// 상품 가격 계산
export const calculateProductPrice = (
  quantity: number | null,
  basePrice?: number
): number => {
  return quantity && basePrice ? basePrice * quantity : 0;
};

// 옵션 가격 합계 계산
export const calculateOptionsPrice = (
  selections: Record<string, number>
): number => {
  return Object.values(selections).reduce((sum, price) => sum + price, 0);
};

// 총 가격 계산
export const calculateTotalPrice = (
  productPrice: number,
  optionsPrice: number
): number => {
  return productPrice + optionsPrice;
};

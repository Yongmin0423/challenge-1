// 카테고리별 추천 섹션 제목 매핑
const categoryTitles: Record<string, string> = {
  banner: "같은 공간을 빛낼 현수막",
  print: "고화질로 표현하는 실사출력",
  card: "첫인상을 완성하는 명함",
  display: "눈길을 사로잡는 배너",
  sticker: "어디든 붙이는 스티커",
  promo: "효과적인 홍보 아이템",
  sign: "매장을 돋보이게 하는 간판",
  eco: "환경을 생각하는 친환경 상품",
  misc: "이런 상품은 어때요?",
};

// 상품 ID에서 카테고리 prefix 추출
function getCategoryPrefix(productId: string): string {
  return productId.split("-")[0];
}

// 상품 ID로 추천 섹션 제목 가져오기
export function getRecommendedTitle(productId: string): string {
  const prefix = getCategoryPrefix(productId);
  return categoryTitles[prefix] || "이런 상품은 어때요?";
}

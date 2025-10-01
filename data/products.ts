export interface ProductOption {
  label: string;
  items: {
    name: string;
    price: number;
  }[];
}

export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  basePrice?: number;
  quantities?: {
    value: number;
    label: string;
  }[];
  options?: ProductOption[];
}

// 상품명을 ID로 변환하는 매핑
export const productNameToId: Record<string, string> = {
  수성현수막: "banner-01",
  솔벤현수막: "banner-02",
  게릴라현수막: "banner-03",
  족자현수막: "banner-04",
  가로등현수막: "banner-05",
  "Re-pet현수막": "banner-06",
  PVC켈지: "print-01",
  그레이PVC켈지: "print-02",
  페트지: "print-03",
  X배너: "display-01",
  철제배너: "display-02",
  윈드배너: "display-03",
  "Re-pet배너": "display-04",
  일반지명함: "card-01",
  고급지명함: "card-02",
  특수지명함: "card-03",
  PET명함: "card-04",
  쿠폰명함: "card-05",
  도무송스티커: "sticker-01",
  사각형스티커: "sticker-02",
  원형스티커: "sticker-03",
  전단: "promo-01",
  카달로그: "promo-02",
  각티슈: "promo-03",
  물티슈: "promo-04",
  독일행주: "promo-05",
  리유저블컵: "promo-06",
  채널간판: "sign-01",
  플렉스간판: "sign-02",
  갈바간판: "sign-03",
  성형간판: "sign-04",
  돌출간판: "sign-05",
  "Re-pet 현수막": "eco-01",
  "Re-pet X배너": "eco-02",
  재생용지전단: "eco-03",
  준비중: "misc-01",
};

export const adCardData: Record<string, Product> = {
  // 현수막 카테고리
  수성현수막: {
    id: "banner-01",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_fyyb9_ruJMu4ZpDJfiHDzOi70aKEcpb1A&s",
    title: "수성현수막",
    description: "친환경 수성잉크로 제작하는 고품질 현수막입니다.",
    price: "15,000원~",
    basePrice: 10000,
    quantities: [
      { value: 1, label: "1개" },
      { value: 10, label: "10개" },
      { value: 50, label: "50개" },
      { value: 100, label: "100개" },
    ],
    options: [
      {
        label: "후가공",
        items: [
          { name: "선택 안함", price: 0 },
          { name: "둥근목+끈마감", price: 5000 },
          { name: "코팅", price: 8000 },
          { name: "라미네이팅", price: 12000 },
        ],
      },
      {
        label: "추가 물품",
        items: [
          { name: "선택 안함", price: 0 },
          { name: "로프 6cm 추가", price: 3000 },
          { name: "스탠드", price: 5000 },
          { name: "액자", price: 7000 },
        ],
      },
    ],
  },
  솔벤현수막: {
    id: "banner-02",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    title: "솔벤현수막",
    description: "내구성이 뛰어난 솔벤트 잉크 현수막입니다.",
    price: "18,000원~",
  },
  게릴라현수막: {
    id: "banner-03",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500",
    title: "게릴라현수막",
    description: "빠른 제작과 설치가 가능한 게릴라 현수막입니다.",
    price: "12,000원~",
  },
  족자현수막: {
    id: "banner-04",
    image: "https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?w=500",
    title: "족자현수막",
    description: "전통적인 족자 형태의 고급 현수막입니다.",
    price: "25,000원~",
  },
  가로등현수막: {
    id: "banner-05",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500",
    title: "가로등현수막",
    description: "가로등에 설치하는 특수 제작 현수막입니다.",
    price: "30,000원~",
  },
  "Re-pet현수막": {
    id: "banner-06",
    image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=500",
    title: "Re-pet현수막",
    description: "재활용 소재로 제작하는 친환경 현수막입니다.",
    price: "20,000원~",
  },

  // 실사출력 카테고리
  PVC켈지: {
    id: "print-01",
    image: "https://images.unsplash.com/photo-1586380919002-b1e8ecf4a8c5?w=500",
    title: "PVC켈지",
    description: "고화질 PVC 소재 실사출력물입니다.",
    price: "8,000원~",
  },
  그레이PVC켈지: {
    id: "print-02",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
    title: "그레이PVC켈지",
    description: "그레이백 처리된 고급 PVC 켈지입니다.",
    price: "10,000원~",
  },
  페트지: {
    id: "print-03",
    image: "https://images.unsplash.com/photo-1586716402203-79219bede43c?w=500",
    title: "페트지",
    description: "투명하고 내구성 좋은 페트지 소재입니다.",
    price: "12,000원~",
  },

  // 배너 카테고리
  X배너: {
    id: "display-01",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500",
    title: "X배너",
    description: "설치가 간편한 휴대용 X배너입니다.",
    price: "35,000원~",
  },
  철제배너: {
    id: "display-02",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    title: "철제배너",
    description: "견고한 철제 프레임의 내구성 높은 배너입니다.",
    price: "80,000원~",
  },
  윈드배너: {
    id: "display-03",
    image: "https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?w=500",
    title: "윈드배너",
    description: "바람에 강한 특수 제작 윈드배너입니다.",
    price: "45,000원~",
  },
  "Re-pet배너": {
    id: "display-04",
    image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=500",
    title: "Re-pet배너",
    description: "친환경 재활용 소재로 제작한 배너입니다.",
    price: "40,000원~",
  },

  // 명함 카테고리
  일반지명함: {
    id: "card-01",
    image: "https://images.unsplash.com/photo-1586716402203-79219bede43c?w=500",
    title: "일반지명함",
    description: "기본적인 용지로 제작하는 일반 명함입니다.",
    price: "8,000원~",
  },
  고급지명함: {
    id: "card-02",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500",
    title: "고급지명함",
    description: "프리미엄 용지로 제작하는 고급 명함입니다.",
    price: "15,000원~",
  },
  특수지명함: {
    id: "card-03",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
    title: "특수지명함",
    description: "특수 재질과 효과를 적용한 명함입니다.",
    price: "25,000원~",
  },
  PET명함: {
    id: "card-04",
    image: "https://images.unsplash.com/photo-1586380919002-b1e8ecf4a8c5?w=500",
    title: "PET명함",
    description: "투명하고 독특한 PET 소재 명함입니다.",
    price: "30,000원~",
  },
  쿠폰명함: {
    id: "card-05",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_fyyb9_ruJMu4ZpDJfiHDzOi70aKEcpb1A&s",
    title: "쿠폰명함",
    description: "할인 쿠폰 기능이 있는 특별 명함입니다.",
    price: "12,000원~",
  },

  // 스티커 카테고리
  도무송스티커: {
    id: "sticker-01",
    image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=500",
    title: "도무송스티커",
    description: "내구성이 뛰어난 도무송 재질 스티커입니다.",
    price: "5,000원~",
  },
  사각형스티커: {
    id: "sticker-02",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500",
    title: "사각형스티커",
    description: "깔끔한 사각형 모양의 스티커입니다.",
    price: "3,000원~",
  },
  원형스티커: {
    id: "sticker-03",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500",
    title: "원형스티커",
    description: "부드러운 곡선의 원형 스티커입니다.",
    price: "3,500원~",
  },

  // 인쇄/판촉 카테고리
  전단: {
    id: "promo-01",
    image: "https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?w=500",
    title: "전단지",
    description: "효과적인 홍보를 위한 고품질 전단지입니다.",
    price: "4,000원~",
  },
  카달로그: {
    id: "promo-02",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    title: "카탈로그",
    description: "제품 소개용 프리미엄 카탈로그입니다.",
    price: "15,000원~",
  },
  각티슈: {
    id: "promo-03",
    image: "https://images.unsplash.com/photo-1586716402203-79219bede43c?w=500",
    title: "각티슈",
    description: "실용적인 판촉용 각티슈입니다.",
    price: "2,000원~",
  },
  물티슈: {
    id: "promo-04",
    image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=500",
    title: "물티슈",
    description: "편리한 판촉용 물티슈입니다.",
    price: "3,000원~",
  },
  독일행주: {
    id: "promo-05",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
    title: "독일행주",
    description: "고품질 독일산 행주입니다.",
    price: "5,000원~",
  },
  리유저블컵: {
    id: "promo-06",
    image: "https://images.unsplash.com/photo-1586380919002-b1e8ecf4a8c5?w=500",
    title: "리유저블컵",
    description: "친환경 재사용 가능한 컵입니다.",
    price: "8,000원~",
  },

  // 간판 카테고리
  채널간판: {
    id: "sign-01",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
    title: "채널간판",
    description: "입체감 있는 채널 레터 간판입니다.",
    price: "200,000원~",
  },
  플렉스간판: {
    id: "sign-02",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    title: "플렉스간판",
    description: "경제적이고 실용적인 플렉스 간판입니다.",
    price: "80,000원~",
  },
  갈바간판: {
    id: "sign-03",
    image: "https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?w=500",
    title: "갈바간판",
    description: "견고한 갈바늄 소재의 간판입니다.",
    price: "120,000원~",
  },
  성형간판: {
    id: "sign-04",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500",
    title: "성형간판",
    description: "독특한 형태로 제작하는 성형 간판입니다.",
    price: "300,000원~",
  },
  돌출간판: {
    id: "sign-05",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500",
    title: "돌출간판",
    description: "눈에 잘 띄는 돌출형 간판입니다.",
    price: "250,000원~",
  },

  // 친환경 카테고리
  "Re-pet 현수막": {
    id: "eco-01",
    image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=500",
    title: "Re-pet 현수막",
    description: "재활용 소재로 제작하는 친환경 현수막입니다.",
    price: "20,000원~",
  },
  "Re-pet X배너": {
    id: "eco-02",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500",
    title: "Re-pet X배너",
    description: "친환경 재활용 소재로 제작한 X배너입니다.",
    price: "40,000원~",
  },
  재생용지전단: {
    id: "eco-03",
    image: "https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?w=500",
    title: "재생용지전단",
    description: "재생용지로 제작하는 친환경 전단지입니다.",
    price: "4,500원~",
  },

  // 기타 카테고리들
  준비중: {
    id: "misc-01",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_fyyb9_ruJMu4ZpDJfiHDzOi70aKEcpb1A&s",
    title: "준비중",
    description: "곧 출시될 예정인 상품입니다.",
    price: "문의",
  },
};

export function getProductById(id: string): Product | undefined {
  // ID로 직접 조회
  const product = Object.values(adCardData).find(
    (product) => product.id === id
  );
  return product;
}

export function getProductByName(name: string): Product | undefined {
  return adCardData[name];
}

export function getAllProducts(): Record<string, Product> {
  return adCardData;
}

export function getProductsByIds(ids: string[]): Product[] {
  return ids
    .map((id) => Object.values(adCardData).find((product) => product.id === id))
    .filter((product): product is Product => product !== undefined);
}

// ID에서 카테고리 prefix 추출 (예: "banner-01" -> "banner")
function getCategoryPrefix(productId: string): string {
  return productId.split('-')[0];
}

// 같은 카테고리의 다른 상품들을 랜덤으로 가져오기
export function getRandomProductsFromSameCategory(
  currentProductId: string,
  count: number = 4
): Product[] {
  const categoryPrefix = getCategoryPrefix(currentProductId);

  // 같은 카테고리의 모든 상품 찾기 (현재 상품 제외)
  const sameCategory = Object.values(adCardData).filter(
    product => getCategoryPrefix(product.id) === categoryPrefix && product.id !== currentProductId
  );

  // 랜덤 셔플
  const shuffled = sameCategory.sort(() => Math.random() - 0.5);

  // count 개수만큼 반환
  return shuffled.slice(0, count);
}

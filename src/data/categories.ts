// 카테고리 데이터 타입
export type Category = {
  title: string;
  image: string;
  items: string[];
};

// 전체 카테고리 데이터
export const categories: Category[] = [
  {
    title: "현수막",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_fyyb9_ruJMu4ZpDJfiHDzOi70aKEcpb1A&s",
    items: [
      "수성현수막",
      "솔벤현수막",
      "게릴라현수막",
      "족자현수막",
      "가로등현수막",
      "Re-pet현수막",
    ],
  },
  {
    title: "실사출력",
    image: "https://images.unsplash.com/photo-1586380919002-b1e8ecf4a8c5?w=500",
    items: ["PVC켈지", "그레이PVC켈지", "페트지"],
  },
  {
    title: "배너",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500",
    items: ["X배너", "철제배너", "윈드배너", "Re-pet배너"],
  },
  {
    title: "명함",
    image: "https://images.unsplash.com/photo-1586716402203-79219bede43c?w=500",
    items: ["일반지명함", "고급지명함", "특수지명함", "PET명함", "쿠폰명함"],
  },
  {
    title: "스티커",
    image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=500",
    items: ["도무송스티커", "사각형스티커", "원형스티커"],
  },
  {
    title: "인쇄/판촉",
    image: "https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?w=500",
    items: ["전단", "카달로그", "각티슈", "물티슈", "독일행주", "리유저블컵"],
  },
  {
    title: "간판",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
    items: ["채널간판", "플렉스간판", "갈바간판", "성형간판", "돌출간판"],
  },
  {
    title: "친환경",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500",
    items: ["Re-pet 현수막", "Re-pet X배너", "재생용지전단", "리유저블컵"],
  },
  {
    title: "셀프디자인",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    items: ["준비중"],
  },
  {
    title: "제트몰",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
    items: ["준비중"],
  },
];

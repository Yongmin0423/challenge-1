// 슬라이더 배너 데이터 타입
export type Slide = {
  id: number;
  image: string;
  link: string;
};

// 차별점 티켓 데이터 타입
export type Example = {
  id: number;
  image: string;
  title: string;
  descriptions: string[];
};

// 인기 상품 데이터 타입
export type BestSellingProduct = {
  id: string;
  image: string;
  title: string;
};

// 상단 슬라이더 배너 데이터
export const topSlides: Slide[] = [
  {
    id: 1,
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-cute-persian-cat-wallpaper-hd-1920-x-1080-image_2679659.jpg",
    link: "/top-slide1",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1491466424936-e304919aada7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTkyMHgxMDgwJTIwJUVCJUIwJUIwJUVBJUIyJUJEJUVEJTk5JTk0JUVCJUE5JUI0fGVufDB8fDB8fHww",
    link: "/top-slide2",
  },
];

// 하단 슬라이더 배너 데이터
export const bottomSlides: Slide[] = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/bottom-slide1",
  },
  {
    id: 2,
    image:
      "https://previews.123rf.com/images/breakingdots/breakingdots2304/breakingdots230400781/202938341-cat-kawaii-character-cartoon-vector-illustration.jpg",
    link: "/bottom-slide2",
  },
];

// 차별점 티켓 데이터
export const examples: Example[] = [
  {
    id: 1,
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230525/pngtree-hamster-in-a-christmas-hat-wallpaper-1080-image_2695714.jpg",
    title: "24시간 연중무휴",
    descriptions: ["차별점 내용", "차별점 내용"],
  },
  {
    id: 2,
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230525/pngtree-hamster-in-a-christmas-hat-wallpaper-1080-image_2695714.jpg",
    title: "24시간 연중무휴",
    descriptions: ["차별점 내용", "차별점 내용"],
  },
  {
    id: 3,
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230525/pngtree-hamster-in-a-christmas-hat-wallpaper-1080-image_2695714.jpg",
    title: "24시간 연중무휴",
    descriptions: ["차별점 내용", "차별점 내용"],
  },
];

// 인기 상품 데이터
export const bestSellingProducts: BestSellingProduct[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    title: "Nike Air Max 270",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
    title: "Apple iPhone 15 Pro",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    title: "삼성 갤럭시 워치",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    title: "소니 무선 헤드폰",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&q=80",
    title: "맥북 프로 16인치",
  },
];

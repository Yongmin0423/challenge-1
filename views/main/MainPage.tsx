"use client";

import SwiperComponent from "@/components/swiper/Swiper";
import Ticket from "@/components/ticket/Ticket";
import DoubleTabs from "@/components/doubleTabs/DoubleTabs";
import ProductList from "@/components/productList/ProductList";
import cn from "classnames/bind";
import styles from "./MainPage.module.scss";

const cx = cn.bind(styles);
import AdBanner from "@/assets/images/AD.png";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-cute-persian-cat-wallpaper-hd-1920-x-1080-image_2679659.jpg",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1491466424936-e304919aada7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTkyMHgxMDgwJTIwJUVCJUIwJUIwJUVBJUIyJUJEJUVEJTk5JTk0JUVCJUE5JUI0fGVufDB8fDB8fHww",
  },
];

const examples = [
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

const bestSellingProducts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    title: "Nike Air Max 270",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
    title: "Apple iPhone 15 Pro",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    title: "삼성 갤럭시 워치",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    title: "소니 무선 헤드폰",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&q=80",
    title: "맥북 프로 16인치",
  },
];

export default function MainPage() {
  return (
    <div className={cx("pageWrapper")}>
      <div className={cx("fullWidth")}>
        <SwiperComponent slides={slides} />
      </div>

      <div className={cx("contentContainer")}>
        <div className={cx("content")}>
          <div className={cx("tickets")}>
            {examples.map((example) => (
              <Ticket key={example.id} data={example} />
            ))}
          </div>
          <div className={cx("tabs")}>
            <DoubleTabs />
          </div>
        </div>
      </div>

      <div className={cx("fullWidth")}>
        <div className={cx("middle-image")}>
          <Image fill src={AdBanner} alt="광고 이미지" />
        </div>
      </div>

      <div className={cx("contentContainer")}>
        <div className={cx("content")}>
          <div className={cx("famous")}>
            <ProductList
              title="가장 많이 구매하시는 상품이에요!"
              products={bestSellingProducts}
              maxItems={5}
              mobileMaxItems={4}
            />
          </div>
        </div>
      </div>

      {/* Full width bottom swiper */}
      <div className={cx("fullWidth")}>
        <SwiperComponent slides={slides} />
      </div>
    </div>
  );
}

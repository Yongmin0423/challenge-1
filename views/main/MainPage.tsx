"use client";

import FooterM from "@/components/footer/FooterM";
import FooterW from "@/components/footer/FooterW";
import Header from "@/components/header/HeaderW";
import SwiperComponent from "@/components/swiper/Swiper";
import Ticket from "@/components/ticket/Ticket";
import DoubleTabs from "@/components/tabs/DoubleTabs";
import cn from "classnames/bind";
import styles from "./MainPage.module.scss";

const cx = cn.bind(styles);
import AdBanner from "@/assets/images/AD.png";
import Image from "next/image";
import ProductCard from "@/components/productCard/ProductCard";
import HeaderM from "@/components/header/HeaderM";

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
    <div>
      <nav>
        <Header />
        <HeaderM />
      </nav>

      <main>
        <SwiperComponent slides={slides} />

        <div className={cx("tickets")}>
          {examples.map((example) => (
            <Ticket key={example.id} data={example} />
          ))}
        </div>
        <div className={cx("tabs")}>
          <DoubleTabs />
        </div>

        <div className={cx("middle-image")}>
          <Image fill src={AdBanner} alt="광고 이미지" />
        </div>

        <div className={cx("famous")}>
          <h3>가장 많이 구매하시는 상품이에요!</h3>
          <div className={cx("item-images")}>
            <div className={cx("web-items")}>
              {bestSellingProducts.slice(0, 5).map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                />
              ))}
            </div>
            <div className={cx("mobile-items")}>
              {bestSellingProducts.slice(0, 4).map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <SwiperComponent slides={slides} />
        </div>
      </main>

      <footer>
        <FooterW />
        <FooterM />
      </footer>
    </div>
  );
}

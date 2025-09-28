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

export default function MainPage() {
  return (
    <div>
      <nav>
        <Header />
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

        <div>
          <h3>가장 많이 구매하시는 상품이에요!</h3>
          <ProductCard />
        </div>
        <div>
          <SwiperComponent slides={slides} />
        </div>
      </main>

      <div>
        <FooterW />
      </div>
    </div>
  );
}

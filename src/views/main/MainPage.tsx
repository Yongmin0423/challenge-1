"use client";

import SwiperComponent from "@/components/swiper/Swiper";
import Ticket from "@/components/ticket/Ticket";
import DoubleTabs from "@/components/doubleTabs/DoubleTabs";
import ProductList from "@/components/productList/ProductList";
import cn from "classnames/bind";
import styles from "./MainPage.module.scss";
import AdBanner from "@/assets/images/AD.png";
import Image from "next/image";
import {
  topSlides,
  bottomSlides,
  examples,
  bestSellingProducts,
} from "@/data/mainPageData";
import Link from "next/link";

const cx = cn.bind(styles);

export default function MainPage() {
  return (
    <div className={cx("PageWrapper")}>
      <div className={cx("FullWidth")}>
        <SwiperComponent slides={topSlides} />
      </div>

      <div className={cx("ContentContainer")}>
        <div className={cx("Content")}>
          <div className={cx("Tickets")}>
            {examples.map((example) => (
              <Ticket key={example.id} data={example} />
            ))}
          </div>
          <div className={cx("Tabs")}>
            <DoubleTabs />
          </div>
        </div>
      </div>

      <div className={cx("FullWidth")}>
        <Link href="/AdBanner" className={cx("MiddleImage")}>
          <Image fill src={AdBanner} alt="광고 이미지" />
        </Link>
      </div>

      <div className={cx("ContentContainer")}>
        <div className={cx("Content")}>
          <div className={cx("Famous")}>
            <ProductList
              title="가장 많이 구매하시는 상품이에요!"
              products={bestSellingProducts}
              maxItems={5}
              mobileMaxItems={4}
            />
          </div>
        </div>
      </div>

      <div className={cx("FullWidth")}>
        <SwiperComponent slides={bottomSlides} />
      </div>
    </div>
  );
}

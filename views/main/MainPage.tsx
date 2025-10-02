"use client";

import SwiperComponent from "@/components/swiper/Swiper";
import Ticket from "@/components/ticket/Ticket";
import DoubleTabs from "@/components/doubleTabs/DoubleTabs";
import ProductList from "@/components/productList/ProductList";
import cn from "classnames/bind";
import styles from "./MainPage.module.scss";
import AdBanner from "@/assets/images/AD.png";
import Image from "next/image";
import ConsultationBanner from "@/components/consultationBanner/ConsultationBanner";
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
    <div className={cx("pageWrapper")}>
      <div className={cx("fullWidth")}>
        <SwiperComponent slides={topSlides} />
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

      <div className={cx("consultation")}>
        <ConsultationBanner />
      </div>

      <div className={cx("fullWidth")}>
        <Link href="/AdBanner" className={cx("middle-image")}>
          <Image fill src={AdBanner} alt="광고 이미지" />
        </Link>
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

      <div className={cx("fullWidth")}>
        <SwiperComponent slides={bottomSlides} />
      </div>
    </div>
  );
}

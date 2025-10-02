"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import cn from "classnames/bind";
import styles from "./Swiper.module.scss";
import Image from "next/image";
import Link from "next/link";

const cx = cn.bind(styles);

interface SwiperComponentProps {
  slides: {
    id: number;
    image: string;
    link: string;
  }[];
  autoplay?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
}

const SwiperComponent = ({
  slides,
  autoplay = true,
  navigation = true,
  pagination = true,
  slidesPerView = 1,
  spaceBetween = 30,
  loop = true,
}: SwiperComponentProps) => {
  return (
    <div className={cx("swiperContainer")}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={navigation}
        pagination={pagination ? { clickable: true } : false}
        autoplay={
          autoplay ? { delay: 3000, disableOnInteraction: false } : false
        }
        loop={loop}
        className={cx("swiper")}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={cx("slide")}>
            <Link href={slide.link} className={cx("slideContent")}>
              <Image
                fill
                src={slide.image}
                alt={`Slide ${slide.id}`}
                style={{ objectFit: "cover" }}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;

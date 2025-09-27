"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Swiper.module.scss";
import Image from "next/image";

interface SwiperComponentProps {
  slides: {
    id: number;
    image: string;
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
    <div className={styles.swiperContainer}>
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
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div className={styles.slideContent}>
              <Image
                fill
                src={slide.image}
                alt={`Slide ${slide.id}`}
                style={{ objectFit: 'cover' }}
              />
              <h3 className={styles.title}>자세히 보기</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;

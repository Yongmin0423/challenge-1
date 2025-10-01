"use client";

import { useState } from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ProductImagePreview.module.scss";

const cx = cn.bind(styles);

interface ProductImagePreviewProps {
  images: string[];
}

export default function ProductImagePreview({
  images,
}: ProductImagePreviewProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={cx("gallery")}>
      <div className={cx("main-image")}>
        <Image
          src={images[selectedIndex]}
          alt={`제품 이미지 ${selectedIndex + 1}`}
          fill
          className={cx("image")}
        />
      </div>
      <div className={cx("thumbnails")}>
        {images.map((image, index) => (
          <div
            key={index}
            className={cx("thumbnail", { active: selectedIndex === index })}
            onClick={() => setSelectedIndex(index)}
          >
            <Image src={image} alt={`${image} thumbnail ${index + 1}`} fill />
          </div>
        ))}
      </div>
    </div>
  );
}

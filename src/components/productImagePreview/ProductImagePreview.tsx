"use client";

import React from "react";
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
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <div className={cx("Gallery")}>
      <div className={cx("MainImage")}>
        <Image
          src={images[selectedIndex]}
          alt={`제품 이미지 ${selectedIndex + 1}`}
          fill
          className={cx("Image")}
        />
      </div>
      <div className={cx("Thumbnails")}>
        {images.map((image, index) => (
          <div
            key={index}
            className={cx("Thumbnail", { Active: selectedIndex === index })}
            onClick={() => setSelectedIndex(index)}
          >
            <Image src={image} alt={`${image} thumbnail ${index + 1}`} fill />
          </div>
        ))}
      </div>
    </div>
  );
}

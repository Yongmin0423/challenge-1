"use client";

import Image from "next/image";
import cn from "classnames/bind";
import styles from "./HeaderM.module.scss";
import Hamberger from "@/assets/icons/Hamberger";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getProductById } from "@/data/products";
import ArrowLeft from "@/assets/icons/ArrowLeft";

const cx = cn.bind(styles);

export default function HeaderM() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const router = useRouter();

  const productId = pathname?.slice(1);
  const product = productId ? getProductById(productId) : null;
  const isDetailPage = !!product;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <div className={cx("header-mobile", { detail: isDetailPage })}>
        {isDetailPage ? (
          <div>
            <button className={cx("back-btn")} onClick={handleBack}>
              <ArrowLeft />
            </button>
          </div>
        ) : (
          <div className={cx("logo")}>ZDESIGN</div>
        )}
        <div className={cx("title")}>{product?.title}</div>

        <button className={cx("hamburger-btn")} onClick={toggleMenu}>
          <Hamberger />
        </button>
      </div>

      {/* Overlay Background */}
      {isMenuOpen && <div className={cx("overlay")} onClick={toggleMenu}></div>}

      {/* Side Menu */}
      <div className={cx("side-menu", { open: isMenuOpen })}>
        <div className={cx("menu-content")}>
          <div className={cx("menu-top")}>
            <p>Login</p>
            <p>Join</p>
            <p>Orders</p>
            <p>Customer Service</p>
          </div>
          <div className={cx("menu-categories")}>
            <div className={cx("category-item")}>All Categories</div>
            <div className={cx("category-item")}>Banners</div>
            <div className={cx("category-item")}>Printing</div>
            <div className={cx("category-item")}>Digital Print</div>
            <div className={cx("category-item")}>Print/Promotion</div>
            <div className={cx("category-item")}>Signs</div>
            <div className={cx("category-item")}>Eco-friendly</div>
          </div>
        </div>
      </div>
    </>
  );
}

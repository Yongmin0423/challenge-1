"use client";

import cn from "classnames/bind";
import styles from "./HeaderM.module.scss";
import Hamberger from "@/assets/icons/Hamberger";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getProductById } from "@/data/products";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import Link from "next/link";

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
            <Link href="/login" onClick={toggleMenu}>로그인</Link>
            <Link href="/join" onClick={toggleMenu}>회원가입</Link>
            <Link href="/orders" onClick={toggleMenu}>주문/배송</Link>
            <Link href="/FAQ" onClick={toggleMenu}>고객센터</Link>
          </div>
          <div className={cx("menu-categories")}>
            <div className={cx("category-title")}>전체 카테고리</div>
            <div className={cx("category-item")}>제트상품</div>
            <Link href="/banner-01" className={cx("category-item")} onClick={toggleMenu}>현수막</Link>
            <Link href="/print-01" className={cx("category-item")} onClick={toggleMenu}>실사출력</Link>
            <Link href="/display-01" className={cx("category-item")} onClick={toggleMenu}>배너</Link>
            <Link href="/card-01" className={cx("category-item")} onClick={toggleMenu}>명함</Link>
            <Link href="/sticker-01" className={cx("category-item")} onClick={toggleMenu}>스티커</Link>
            <Link href="/promo-01" className={cx("category-item")} onClick={toggleMenu}>인쇄/판촉</Link>
            <Link href="/sign-01" className={cx("category-item")} onClick={toggleMenu}>간판</Link>
            <Link href="/eco-01" className={cx("category-item", "eco")} onClick={toggleMenu}>친환경</Link>
            <Link href="/misc-01" className={cx("category-item")} onClick={toggleMenu}>셀프디자인</Link>
            <Link href="/misc-01" className={cx("category-item", "jetmall")} onClick={toggleMenu}>제트몰</Link>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import cn from "classnames/bind";
import styles from "./HeaderM.module.scss";
import Hamberger from "@/assets/icons/Hamberger";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { getProductById } from "@/data/products";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import Link from "next/link";

const cx = cn.bind(styles);

export default function HeaderM() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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
      <div className={cx("HeaderMobile", { Detail: isDetailPage })}>
        {isDetailPage ? (
          <div>
            <button className={cx("BackBtn")} onClick={handleBack}>
              <ArrowLeft />
            </button>
          </div>
        ) : (
          <Link href="/" className={cx("Logo")}>
            ZDESIGN
          </Link>
        )}
        <div className={cx("Title")}>{product?.title}</div>

        <button className={cx("HamburgerBtn")} onClick={toggleMenu}>
          <Hamberger />
        </button>
      </div>

      {/* Overlay Background */}
      {isMenuOpen && <div className={cx("Overlay")} onClick={toggleMenu}></div>}

      {/* Side Menu */}
      <div className={cx("SideMenu", { Open: isMenuOpen })}>
        <button className={cx("CloseBtn")} onClick={toggleMenu}>
          ×
        </button>
        <div className={cx("MenuContent")}>
          <div className={cx("MenuTop")}>
            <Link href="/login" onClick={toggleMenu}>
              로그인
            </Link>
            <Link href="/join" onClick={toggleMenu}>
              회원가입
            </Link>
            <Link href="/orders" onClick={toggleMenu}>
              주문/배송
            </Link>
            <Link href="/FAQ" onClick={toggleMenu}>
              고객센터
            </Link>
          </div>
          <div className={cx("MenuCategories")}>
            <div className={cx("CategoryTitle")}>전체 카테고리</div>
            <div className={cx("CategoryItem")}>제트상품</div>
            <Link
              href="/banner-01"
              className={cx("CategoryItem")}
              onClick={toggleMenu}
            >
              현수막
            </Link>
            <Link
              href="/print-01"
              className={cx("CategoryItem")}
              onClick={toggleMenu}
            >
              실사출력
            </Link>
            <Link
              href="/display-01"
              className={cx("CategoryItem")}
              onClick={toggleMenu}
            >
              배너
            </Link>
            <Link
              href="/card-01"
              className={cx("CategoryItem")}
              onClick={toggleMenu}
            >
              명함
            </Link>
            <Link
              href="/sticker-01"
              className={cx("CategoryItem")}
              onClick={toggleMenu}
            >
              스티커
            </Link>
            <Link
              href="/promo-01"
              className={cx("CategoryItem")}
              onClick={toggleMenu}
            >
              인쇄/판촉
            </Link>
            <Link
              href="/sign-01"
              className={cx("CategoryItem")}
              onClick={toggleMenu}
            >
              간판
            </Link>
            <Link
              href="/eco-01"
              className={cx("CategoryItem", "Eco")}
              onClick={toggleMenu}
            >
              친환경
            </Link>
            <Link
              href="/misc-01"
              className={cx("CategoryItem")}
              onClick={toggleMenu}
            >
              셀프디자인
            </Link>
            <Link
              href="/misc-01"
              className={cx("CategoryItem", "Jetmall")}
              onClick={toggleMenu}
            >
              제트몰
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

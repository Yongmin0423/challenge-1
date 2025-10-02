"use client";

import cn from "classnames/bind";
import styles from "./HeaderM.module.scss";
import Hamberger from "@/assets/icons/Hamberger";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { getProductById, productNameToId } from "@/data/products";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import Link from "next/link";
import { categories } from "@/data/categories";

const cx = cn.bind(styles);

export default function HeaderM() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openCategories, setOpenCategories] = React.useState<Set<string>>(
    new Set()
  );
  const pathname = usePathname();
  const router = useRouter();
  const productId = pathname?.slice(1);
  const product = productId ? getProductById(productId) : null;
  const isDetailPage = !!product;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //중복 확인 후 카테고리 열림/닫힘을 확인하기 위한 set활용
  const toggleCategory = (categoryTitle: string) => {
    setOpenCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryTitle)) {
        newSet.delete(categoryTitle);
      } else {
        newSet.add(categoryTitle);
      }
      return newSet;
    });
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

      {/* 백그라운드 */}
      {isMenuOpen && <div className={cx("Overlay")} onClick={toggleMenu}></div>}

      {/* 사이드 메뉴 */}
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
            {categories.map((category) => (
              <div key={category.title} className={cx("CategoryGroup")}>
                <div
                  className={cx("CategoryItem", {
                    Eco: category.title === "친환경",
                    Jetmall: category.title === "제트몰",
                    Open: openCategories.has(category.title),
                  })}
                  onClick={() => toggleCategory(category.title)}
                >
                  {category.title}
                </div>
                <div
                  className={cx("SubItems", {
                    Open: openCategories.has(category.title),
                  })}
                >
                  {category.items.map((item) => {
                    return (
                      <Link
                        key={item}
                        href={`/${productNameToId[item] || ""}`}
                        className={cx("SubItem")}
                        onClick={(e) => {
                          if (item === "준비중") {
                            e.preventDefault();
                            alert("준비중인 상품입니다.");
                            return;
                          }
                          toggleMenu();
                        }}
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

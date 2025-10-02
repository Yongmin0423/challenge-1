"use client";

import Link from "next/link";
import cn from "classnames/bind";
import styles from "./HeaderW.module.scss";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";
import CartIcon from "@/assets/icons/CartIcon";
import ChevronDown from "@/assets/icons/ChevronDown";
import React from "react";
import AllCategory from "../allCategory/AllCategory";

const cx = cn.bind(styles);

export default function Header() {
  const [showAllCategory, setShowAllCategory] = React.useState(false);

  const handleCloseCategory = () => {
    setShowAllCategory(false);
  };

  return (
    <div className={cx("Header")}>
      <div className={cx("HeaderTop")}>
        <Link href="/login">로그인</Link>
        <Link href="/join">회원가입</Link>
        <Link href="/orders">주문/배송</Link>
        <Link href="/FAQ">고객센터</Link>
      </div>
      <div className={cx("HeaderMiddle")}>
        <Link href="/">
          <Image src={Logo} alt="로고이미지" />
        </Link>
        <div>
          <Link href="/cart">
            <CartIcon />
            장바구니
          </Link>
        </div>
      </div>
      <div className={cx("HeaderBottom")}>
        <div className={cx("AllCategory")}>
          <p onClick={() => setShowAllCategory(!showAllCategory)}>
            전체 카테고리 <ChevronDown />
          </p>
          {showAllCategory && (
            <div className={cx("CategoryDropdown")}>
              <AllCategory onLinkClick={handleCloseCategory} />
            </div>
          )}
        </div>
        <div className={cx("Categories")}>
          <Link href="/banner-01">현수막</Link>
          <Link href="/display-01">배너</Link>
          <Link href="/print-01">실사출력</Link>
          <Link href="/promo-01">인쇄/판촉</Link>
          <Link href="/sign-01">간판</Link>
          <Link href="/eco-01">친환경</Link>
        </div>
      </div>
    </div>
  );
}

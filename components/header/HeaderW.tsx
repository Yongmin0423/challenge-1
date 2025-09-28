"use client";

import Link from "next/link";
import cn from "classnames/bind";
import styles from "./HeaderW.module.scss";
import Image from "next/image";

const cx = cn.bind(styles);
import Logo from "@/assets/images/Logo.png";
import CartIcon from "@/assets/icons/CartIcon";
import ChevronDown from "@/assets/icons/ChevronDown";
import { useState } from "react";
import AllCategory from "../allCategory/AllCategory";

export default function Header() {
  const [showAllCategory, setShowAllCategory] = useState(false);

  return (
    <div className={cx("header")}>
      <div className={cx("header-top")}>
        <Link href="/login">로그인</Link>
        <Link href="/join">회원가입</Link>
        <Link href="/orders">주문/배송</Link>
        <Link href="/FAQ">고객센터</Link>
      </div>
      <div className={cx("header-middle")}>
        <Image src={Logo} alt="로고이미지" />
        <div>
          <p>
            <CartIcon />
            장바구니
          </p>
        </div>
      </div>
      <div className={cx("header-bottom")}>
        <div className={cx("all-category")}>
          <p onClick={() => setShowAllCategory(!showAllCategory)}>
            전체 카테고리 <ChevronDown />
          </p>
          {showAllCategory && (
            <div className={cx("category-dropdown")}>
              <AllCategory />
            </div>
          )}
        </div>
        <div className={cx("categories")}>
          <Link href="">현수막</Link>
          <Link href="">배너</Link>
          <Link href="">실사출력</Link>
          <Link href="">인쇄/판촉</Link>
          <Link href="">간판</Link>
          <Link href="">친환경</Link>
        </div>
      </div>
    </div>
  );
}

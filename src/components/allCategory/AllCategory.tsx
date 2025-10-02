import Category from "../category/Category";
import cn from "classnames/bind";
import styles from "./AllCategory.module.scss";
import ChevronRight from "@/assets/icons/ChevronRight";
import { categories } from "@/data/categories";
import Link from "next/link";

const cx = cn.bind(styles);

export default function AllCategory({
  onLinkClick,
}: {
  onLinkClick?: () => void;
}) {
  return (
    <div className={cx("Container")}>
      <div className={cx("ZetProduction")}>
        <Link
          href="/z-product"
          onClick={() => {
            alert("준비중인 서비스입니다.");
          }}
        >
          <p>제트상품</p>
          <p>~11시 이전</p>
        </Link>
        <div className={cx("Icon")}>
          <ChevronRight />
        </div>
      </div>
      {categories.map((category, index) => (
        <Category
          key={index}
          title={category.title}
          items={category.items}
          titleColor={
            category.title === "친환경"
              ? "#00B54A"
              : category.title === "제트몰"
              ? "#FD914B"
              : undefined
          }
          onLinkClick={onLinkClick}
        />
      ))}
    </div>
  );
}

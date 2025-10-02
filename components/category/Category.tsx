import ChevronRight from "@/assets/icons/ChevronRight";
import cn from "classnames/bind";
import styles from "./Category.module.scss";
import Leaf from "@/assets/icons/Leaf";
import Link from "next/link";
import { productNameToId } from "@/data/products";

const cx = cn.bind(styles);

export default function Category({
  title,
  items,
  titleColor,
  onLinkClick,
}: {
  title: string;
  items: string[];
  titleColor?: string;
  onLinkClick?: () => void;
}) {
  return (
    <div className={cx('container')}>
      <div className={cx('title')}>
        <p style={{ color: titleColor || "#154686" }}>
          {title === "친환경" ? (
            <>
              {title} <Leaf />
            </>
          ) : (
            title
          )}
        </p>
        <ChevronRight fill={title === "제트몰" ? undefined : "#154686"} />
      </div>
      <div className={cx('items')}>
        {items.length > 0 &&
          items.map((item, index) => {
            const productId = productNameToId[item];
            return (
              <Link
                key={index}
                href={`/${productId || ''}`}
                className={cx('item-link')}
                onClick={onLinkClick}
              >
                {item}
              </Link>
            );
          })}
      </div>
    </div>
  );
}

import ChevronRight from "@/assets/icons/ChevronRight";
import cn from "classnames/bind";
import styles from "./Category.module.scss";
import Leaf from "@/assets/icons/Leaf";

const cx = cn.bind(styles);

export default function Category({
  title,
  items,
  titleColor,
}: {
  title: string;
  items: string[];
  titleColor?: string;
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
          items.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </div>
  );
}

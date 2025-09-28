import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ProductCard.module.scss";

const cx = cn.bind(styles);

export default function ProductCard() {
  return (
    <div className={cx('card')}>
      <div className={cx('image')}>
        <Image fill src="https://i.redd.it/5q9i3u1lafz91.jpg" alt="" />
      </div>
      <div className={cx('title')}>
        <h3>Title</h3>
      </div>
    </div>
  );
}

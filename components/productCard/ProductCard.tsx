import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ProductCard.module.scss";

const cx = cn.bind(styles);

interface ProductCardProps {
  image: string;
  title: string;
}

export default function ProductCard({ image, title }: ProductCardProps) {
  return (
    <div className={cx("card")}>
      <div className={cx("image")}>
        <Image fill src={image} alt={title} />
      </div>
      <div className={cx("title")}>
        <h4>{title}</h4>
      </div>
    </div>
  );
}

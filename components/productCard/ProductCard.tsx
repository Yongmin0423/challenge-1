import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ProductCard.module.scss";

const cx = cn.bind(styles);

interface ProductCardProps {
  image: string;
  title: string;
  description?: string;
  price?: string;
  align?: "center" | "left";
}

export default function ProductCard({
  image,
  title,
  description,
  price,
  align = "center",
}: ProductCardProps) {
  return (
    <div className={cx("card", align)}>
      <div className={cx("image")}>
        <Image fill src={image} alt={title} />
      </div>
      <div className={cx("content")}>
        <div className={cx("title")}>
          <h4>{title}</h4>
        </div>
        {description && <p className={cx("description")}>{description}</p>}
        {price && <p className={cx("price")}>{price}</p>}
      </div>
    </div>
  );
}

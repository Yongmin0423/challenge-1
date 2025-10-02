import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ProductCard.module.scss";
import Link from "next/link";

const cx = cn.bind(styles);

interface ProductCardProps {
  id?: string;
  image: string;
  title: string;
  description?: string;
  price?: string;
  align?: "center" | "left";
}

export default function ProductCard({
  id,
  image,
  title,
  description,
  price,
  align = "center",
}: ProductCardProps) {
  const alignClass = align === "left" ? "Left" : "";

  return (
    <Link href={`/${id}`} className={cx("Card", alignClass)}>
      <div className={cx("Image")}>
        <Image fill src={image} alt={title} />
      </div>
      <div className={cx("Content")}>
        <div className={cx("Title")}>
          <h4>{title}</h4>
        </div>
        {description && <p className={cx("Description")}>{description}</p>}
        {price && <p className={cx("Price")}>{price}</p>}
      </div>
    </Link>
  );
}

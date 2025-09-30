import Image from "next/image";
import Link from "next/link";
import cn from "classnames/bind";
import styles from "./AdCard.module.scss";
import ConsultationBanner from "@/components/consultationBanner/ConsultationBanner";

const cx = cn.bind(styles);

interface AdCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  productId?: string;
  available?: boolean; // 주문 가능 여부
}

export default function AdCard({
  image,
  title,
  description,
  price,
  productId,
  available = true, // 기본값은 true (주문 가능)
}: AdCardProps) {
  return (
    <div className={cx("container")}>
      <div className={cx("image")}>
        <Image fill src={image} alt={title} />
      </div>
      <div className={cx("content")}>
        <div className={cx("top")}>
          <div className={cx("title")}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <h4>{price}</h4>
          {productId && available ? (
            <Link href={`/${productId}`}>
              <button>주문하러 가기</button>
            </Link>
          ) : available ? (
            <button>주문하러 가기</button>
          ) : (
            <button disabled>준비중</button>
          )}
        </div>
        <ConsultationBanner />
      </div>
    </div>
  );
}

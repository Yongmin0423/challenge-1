import Chat from "@/assets/icons/Chat";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./AdCard.module.scss";
import Telephone from "@/assets/icons/Telephone";

const cx = cn.bind(styles);

interface AdCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

export default function AdCard({ image, title, description, price }: AdCardProps) {
  return (
    <div className={cx("container")}>
      <div className={cx("image")}>
        <Image
          fill
          src={image}
          alt={title}
        />
      </div>
      <div className={cx("content")}>
        <div className={cx("top")}>
          <div className={cx("title")}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <h4>{price}</h4>
          <button>주문하러 가기</button>
        </div>
        <div className={cx("bottom")}>
          <div className={cx("bottom-content")}>
            <h3>
              <Telephone /> 디자인 작업이 필요하신가요?
            </h3>
            <p>제트디자인 디자이너가 맞춤형 디자인을 제작해 드려요.</p>
            <p>상담 후 상품명을 제작해 보세요.</p>
          </div>
          <button className={cx("bottom-button")}>
            <Chat />
            <p>디자인 상담</p>
          </button>
        </div>
      </div>
    </div>
  );
}

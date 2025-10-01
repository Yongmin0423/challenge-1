import Chat from "@/assets/icons/Chat";
import Telephone from "@/assets/icons/Telephone";
import cn from "classnames/bind";
import styles from "./ConsultationBanner.module.scss";

const cx = cn.bind(styles);

export default function ConsultationBanner() {
  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <h3>
          <Telephone /> 디자인 작업이 필요하신가요?
        </h3>
        <div>
          <p>제트디자인 디자이너가 맞춤형 디자인을 제작해 드려요.</p>
          <p>상담 후 상품명을 제작해 보세요.</p>
        </div>
      </div>
      <button type="button" className={cx("button")}>
        <Chat />
        <p>디자인 상담</p>
      </button>
    </div>
  );
}

import Chat from "@/assets/icons/Chat";
import Image from "next/image";
import styles from "./AdCard.module.scss";
import Telephone from "@/assets/icons/Telephone";

export default function AdCard() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          fill
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_fyyb9_ruJMu4ZpDJfiHDzOi70aKEcpb1A&s"
          alt="광고 이미지"
        />
      </div>
      <div className={styles.content}>
        <div>
          <h3>친환경 현수막</h3>
          <p>사인물에서만 만날 수 있는 높은 퀄리티의 친환경 현수막입니다.</p>
          <h4>00,000원~ </h4>
          <button>주문하러 가기</button>
        </div>
        <div className={styles.bottom}>
          <div>
            <h3>
              <Telephone /> 디자인 작업이 필요하신가요?
            </h3>
            <p>제트디자인 디자이너가 맞춤형 디자인을 제작해 드려요.</p>
            <p>상담 후 상품명을 제작해 보세요.</p>
          </div>
          <button className={styles["bottom-button"]}>
            <Chat />
            <p>디자인 상담</p>
          </button>
        </div>
      </div>
    </div>
  );
}

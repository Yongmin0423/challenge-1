import Link from "next/link";
import styles from "./Footer.module.scss";
import Chat from "@/assets/icons/Chat";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.text}>
          <Link href="">회사소개</Link>
          <Link href="">고객센터</Link>
          <Link href="">이용약관</Link>
          <Link href="">개인정보처리방침</Link>
          <Link href="">공지사항</Link>
          <Link href="">대량문의</Link>
          <Link href="">제휴문의</Link>
          <Link href="">고객센터 032-710-1271</Link>
        </div>
        <div>
          <Chat />
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.bottom}>
        <p>
          주소 : 인천광역시 서구 탁옥로51번길 11, 505호 | 대표자 : 김상헌 |
          대표번호 : 032-710-1271 | 이메일 : brandesign123@naver.com |
          사업자등록번호 : 000-00-00000{" "}
        </p>
        <p>
          통신판매신고 : 제2022-인천서구-2491 | 사업자등록번호 : 000-00-00000 |
          통신판매신고 : 제2022-인천서구-2491
        </p>
        <p>copyright@BRANDESIGN. All rignts reserved.</p>
      </div>
    </div>
  );
}

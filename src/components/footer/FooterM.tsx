import Chat from "@/assets/icons/Chat";
import cn from "classnames/bind";
import styles from "./FooterM.module.scss";
import Link from "next/link";

const cx = cn.bind(styles);

export default function FooterM() {
  return (
    <div className={cx("container")}>
      <div className={cx("top")}>
        <div>
          <Chat />
        </div>
        <div>
          <Link href="/about">회사소개</Link>
          <Link href="/terms">이용약관</Link>
          <Link href="/privacy">개인정보처리방침</Link>
        </div>
        <div>
          <Link href="/bulk-inquiry">대량문의</Link>
          <Link href="/partnership">제휴문의</Link>
          <Link href="tel:032-710-1271">
            고객센터 <span>032-710-1271</span>
          </Link>
        </div>
      </div>
      <div className={cx("separator")}></div>
      <div className={cx("bottom")}>
        <p>
          주소 : 인천광역시 서구 탁옥로51번길 11, 505호 | 대표자 : 김상헌 |
          대표번호 : 032-710-1271 | 이메일 : brandesign123@ naver.com
          사업자등록번호 : 000-00-00000 | 통신판매신고 : 제2022-인천서구-2491
          copyright@BRANDESIGN. All rignts reserved.
        </p>
      </div>
    </div>
  );
}

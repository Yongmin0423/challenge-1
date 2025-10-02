import Link from "next/link";
import cn from "classnames/bind";
import styles from "./Footer.module.scss";
import Chat from "@/assets/icons/Chat";

const cx = cn.bind(styles);

export default function FooterW() {
  return (
    <div className={cx("Container")}>
      <div className={cx("Top")}>
        <div className={cx("Text")}>
          <div className={cx("TextRow")}>
            <Link href="/about">회사소개</Link>
            <Link href="/terms">이용약관</Link>
            <Link href="/customer-service" className={cx("WebOnly")}>
              고객센터
            </Link>
            <Link href="/privacy">개인정보처리방침</Link>
          </div>
          <div className={cx("TextRow")}>
            <Link href="/notice" className={cx("WebOnly")}>
              공지사항
            </Link>
            <Link href="/bulk-inquiry">대량문의</Link>
            <Link href="/partnership">제휴문의</Link>
            <Link href="tel:032-710-1271">
              고객센터 <span>032-710-1271</span>
            </Link>
          </div>
        </div>
        <div>
          <Chat />
        </div>
      </div>
      <div className={cx("Separator")}></div>
      <div className={cx("Bottom", "WebOnly")}>
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
      <div className={cx("Bottom", "MobileOnly")}>
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

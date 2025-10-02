import Link from "next/link";
import cn from "classnames/bind";
import styles from "./NotFoundPage.module.scss";

const cx = cn.bind(styles);

export default function NotFoundPage() {
  return (
    <div className={cx("Container")}>
      <div className={cx("Content")}>
        <h1 className={cx("ErrorCode")}>404</h1>
        <h2 className={cx("Title")}>페이지를 찾을 수 없습니다</h2>
        <p className={cx("Description")}>
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link href="/" className={cx("HomeButton")}>
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

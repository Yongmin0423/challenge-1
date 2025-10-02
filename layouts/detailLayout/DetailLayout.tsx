import cn from "classnames/bind";
import styles from "./DetailLayout.module.scss";

const cx = cn.bind(styles);

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cx("pageWrapper")}>
      <div className={cx("contentContainer")}>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

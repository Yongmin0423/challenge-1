import cn from "classnames/bind";
import styles from "./DetailLayout.module.scss";

const cx = cn.bind(styles);

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cx("PageWrapper")}>
      <div className={cx("ContentContainer")}>
        <div className={cx("Content")}>{children}</div>
      </div>
    </div>
  );
}

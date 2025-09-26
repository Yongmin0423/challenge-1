import ChevronRight from "@/assets/icons/ChevronRight";
import styles from "./Category.module.scss";
import Leaf from "@/assets/icons/Leaf";

export default function Category({
  title,
  items,
  titleColor,
}: {
  title: string;
  items: string[];
  titleColor?: string;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p style={{ color: titleColor || "#154686" }}>
          {title === "친환경" ? (
            <>
              {title} <Leaf />
            </>
          ) : (
            title
          )}
        </p>
        <ChevronRight fill={title === "제트몰" ? undefined : "#154686"} />
      </div>
      <div className={styles.items}>
        {items.length > 0 &&
          items.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </div>
  );
}

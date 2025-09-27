import Image from "next/image";
import styles from "./Ticket.module.scss";

export default function Ticket({
  data,
}: {
  data: {
    image: string;
    title: string;
    descriptions: string[];
  };
}) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image fill src={data.image} alt={data.descriptions[0]} />
      </div>
      <div className={styles.content}>
        <h3>{data.title}</h3>
        {data.descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
    </div>
  );
}

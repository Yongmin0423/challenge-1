import Image from "next/image";
import cn from "classnames/bind";
import styles from "./Ticket.module.scss";

const cx = cn.bind(styles);

type TicketProps = {
  data: {
    image: string;
    title: string;
    descriptions: string[];
  };
};

export default function Ticket({ data }: TicketProps) {
  return (
    <div className={cx('container')}>
      <div className={cx('image')}>
        <Image fill src={data.image} alt={data.descriptions[0]} />
      </div>
      <div className={cx('content')}>
        <h3>{data.title}</h3>
        {data.descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
    </div>
  );
}

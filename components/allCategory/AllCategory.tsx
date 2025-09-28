import Category from "./Category";
import cn from "classnames/bind";
import styles from "./AllCategory.module.scss";
import ChevronRight from "@/assets/icons/ChevronRight";

const cx = cn.bind(styles);

export const categories = [
  {
    title: "현수막",
    items: [
      "수성현수막",
      "솔벤현수막",
      "게릴라현수막",
      "족자현수막",
      "가로등현수막",
      "Re-pet현수막",
    ],
  },
  {
    title: "실사출력",
    items: ["PVC켈지", "그레이PVC켈지", "페트지"],
  },
  {
    title: "배너",
    items: ["X배너", "철제배너", "윈드배너", "Re-pet배너"],
  },
  {
    title: "명함",
    items: ["일반지명함", "고급지명함", "특수지명함", "PET명함", "쿠폰명함"],
  },
  {
    title: "스티커",
    items: ["도무송스티커", "사각형스티커", "원형스티커"],
  },
  {
    title: "인쇄/판촉",
    items: ["전단", "카달로그", "각티슈", "물티슈", "독일행주", "리유저블컵"],
  },
  {
    title: "간판",
    items: ["채널간판", "플렉스간판", "갈바간판", "성형간판", "돌출간판"],
  },
  {
    title: "친환경",
    items: ["Re-pet 현수막", "Re-pet X배너", "재생용지전단", "리유저블컵"],
  },
  {
    title: "셀프디자인",
    items: ["준비중"],
  },
  {
    title: "제트몰",
    items: ["준비중"],
  },
];

export default function AllCategory() {
  return (
    <div className={cx('container')}>
      <div className={cx('zet-production')}>
        <div>
          <p>제트상품</p>
          <p>~11시 이전</p>
        </div>
        <div className={cx('icon')}>
          <ChevronRight />
        </div>
      </div>
      {categories.map((category, index) => (
        <Category
          key={index}
          title={category.title}
          items={category.items}
          titleColor={
            category.title === "친환경"
              ? "#00B54A"
              : category.title === "제트몰"
              ? "#FD914B"
              : undefined
          }
        />
      ))}
    </div>
  );
}

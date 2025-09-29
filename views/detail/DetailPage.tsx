import Input from "@/components/input/Input";
import Select from "@/components/select/Select";
import Image from "next/image";
import { Product } from "@/data/products";
import cn from "classnames/bind";
import styles from "./DetailPage.module.scss";

const cx = cn.bind(styles);

interface DetailPageProps {
  product: Product;
  productId: string;
}

export default function DetailPage({ product, productId }: DetailPageProps) {
  return (
    <div className={cx("container")}>
      <div className={cx("product-info")}>
        <div className={cx("image-section")}>
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={300}
            className={cx("product-image")}
          />
        </div>
        <div className={cx("info-section")}>
          <h1 className={cx("title")}>{product.title}</h1>
          <p className={cx("description")}>{product.description}</p>
          <p className={cx("price")}>{product.price}</p>
        </div>
      </div>

      <div className={cx("order-form")}>
        <h2>주문 정보</h2>
        <form>
          <Input label="제작물 제목" />
          <Select
            label="수량"
            options={[
              { value: "1", label: "1개" },
              { value: "10", label: "10개" },
              { value: "50", label: "50개" },
              { value: "100", label: "100개" },
            ]}
          />
          <Input label="특별 요청사항" />
        </form>
      </div>
    </div>
  );
}

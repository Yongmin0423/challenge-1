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
      <div className={cx("title")}>
        <h2>{product.title}</h2>
      </div>
      <div className={cx("product-info")}>
        <div className={cx("image-section")}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            className={cx("product-image")}
          />
        </div>
        <div className={cx("info-section")}>
          <div className={cx("content")}>
            <h1 className={cx("name")}>{product.title}</h1>
            <p className={cx("description")}>{product.description}</p>
          </div>
          <div className={cx("order-form")}>
            <form>
              <Input
                label="제작물 제목"
                placeholder="제작물 제목을 입력해주세요."
              />
              <Select
                label="수량"
                options={[
                  { value: "1", label: "1개" },
                  { value: "10", label: "10개" },
                  { value: "50", label: "50개" },
                  { value: "100", label: "100개" },
                ]}
              />
              <Select
                label="후가공"
                options={[
                  { value: "둥근목+끈마감", label: "1개" },
                  { value: "10", label: "10개" },
                  { value: "50", label: "50개" },
                  { value: "100", label: "100개" },
                ]}
              />
              <Select
                label="추가 물품"
                options={[
                  { value: "둥근목+끈마감", label: "로프 6cm 추가" },
                  { value: "10", label: "10개" },
                  { value: "50", label: "50개" },
                  { value: "100", label: "100개" },
                ]}
              />
            </form>
          </div>
          <button>디자인 파일 업로드</button>
        </div>
      </div>
    </div>
  );
}

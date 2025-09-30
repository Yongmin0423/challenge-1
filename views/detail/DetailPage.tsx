import { Product } from "@/data/products";
import cn from "classnames/bind";
import styles from "./DetailPage.module.scss";
import ProductImagePreview from "@/components/productImagePreview/ProductImagePreview";
import OrderSection from "@/components/orderSection/OrderSection";
import ProductList from "@/components/productList/ProductList";

const cx = cn.bind(styles);

interface DetailPageProps {
  product: Product;
  productId: string;
}

export default function DetailPage({ product, productId }: DetailPageProps) {
  // 임시로 같은 이미지 4개를 배열로 생성 (나중에 Product 타입에 images[] 추가 예정)
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  return (
    <div className={cx("container")}>
      <div className={cx("title")}>
        <h2>{product.title}</h2>
      </div>
      <div className={cx("product-info")}>
        <div className={cx("image-section")}>
          <ProductImagePreview images={productImages} />
        </div>
        <div className={cx("info-section")}>
          <div className={cx("content")}>
            <h1 className={cx("name")}>{product.title}</h1>
            <p className={cx("description")}>{product.description}</p>
          </div>
          <OrderSection product={product} />
        </div>
      </div>
      <div>
        <ProductList title="환경을 보호하는 친환경 상품" products={[]} />
      </div>
    </div>
  );
}

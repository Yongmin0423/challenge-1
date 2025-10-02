import { Product, getProductsFromSameCategory } from "@/data/products";
import { getRecommendedTitle } from "@/data/productDetails";
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

export default function DetailPage({ product }: DetailPageProps) {
  //같은 카테고리 내 상품 가져오기
  const recommendedProducts = getProductsFromSameCategory(product.id, 5).map(
    (p) => ({
      id: p.id,
      image: p.images[0],
      title: p.title,
      description: p.description,
      price: p.price,
    })
  );

  return (
    <div className={cx("Container")}>
      <div className={cx("Title")}>
        <h2>{product.title}</h2>
      </div>
      <div className={cx("ProductInfo")}>
        <div className={cx("ImageSection")}>
          <ProductImagePreview images={product.images} />
        </div>
        <div className={cx("InfoSection")}>
          <div className={cx("Content")}>
            <h1 className={cx("Name")}>{product.title}</h1>
            <p className={cx("Description")}>{product.description}</p>
          </div>
          <OrderSection product={product} />
        </div>
      </div>
      {recommendedProducts.length > 0 && (
        <div>
          <ProductList
            title={getRecommendedTitle(product.id)}
            products={recommendedProducts}
            mobileMaxItems={4}
            align="left"
          />
        </div>
      )}
    </div>
  );
}

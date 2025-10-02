import { memo } from "react";
import ProductCard from "../productCard/ProductCard";
import cn from "classnames/bind";
import styles from "./ProductList.module.scss";

const cx = cn.bind(styles);

type ProductListItem = {
  id: string;
  image: string;
  title: string;
  description?: string;
  price?: string;
};

interface ProductListProps {
  title: string;
  products: ProductListItem[];
  align?: "center" | "left";
  maxItems?: number;
  mobileMaxItems?: number;
}

function ProductList({
  title,
  products,
  align = "center",
  maxItems,
  mobileMaxItems,
}: ProductListProps) {
  const displayProducts = maxItems ? products.slice(0, maxItems) : products;
  const mobileProducts = mobileMaxItems
    ? products.slice(0, mobileMaxItems)
    : displayProducts;

  return (
    <div className={cx("Container")}>
      <h3 className={cx("Title")}>{title}</h3>
      <div className={cx("ProductGrid")}>
        <div className={cx("WebItems")}>
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              align={align}
            />
          ))}
        </div>
        {mobileMaxItems && (
          <div className={cx("MobileItems")}>
            {mobileProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                align={align}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(ProductList);

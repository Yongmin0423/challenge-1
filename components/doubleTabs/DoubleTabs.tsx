"use client";

import { useState } from "react";
import { categories } from "../allCategory/AllCategory";
import cn from "classnames/bind";
import styles from "./DoubleTabs.module.scss";
import AdCard from "../adCard/AdCard";
import { adCardData, productNameToId } from "@/data/products";

const cx = cn.bind(styles);

export default function DoubleTabs() {
  const [mainCategory, setMainCategory] = useState(categories[0].title);
  const [subCategory, setSubCategory] = useState(categories[0].items[0]);

  const handleMainCategoryChange = (categoryTitle: string) => {
    const category = categories.find((cat) => cat.title === categoryTitle);
    if (category) {
      setMainCategory(categoryTitle);
      setSubCategory(category.items[0]); // 첫 번째 서브탭으로 리셋
    }
  };

  const handleSubCategoryChange = (subCategoryTitle: string) => {
    setSubCategory(subCategoryTitle);
  };

  const currentCategory = categories.find((cat) => cat.title === mainCategory);

  return (
    <div className={cx("container")}>
      {/* 1차 탭 */}
      <div className={cx("mainTabSection")}>
        <div className={cx("tabContainer")}>
          {categories.map((category) => (
            <div className={cx("tabItem")} key={category.title}>
              <button
                onClick={() => handleMainCategoryChange(category.title)}
                className={cx("mainTabButton", {
                  active: mainCategory === category.title,
                })}
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></button>
              <p>{category.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2차 탭 */}
      <div className={cx("subTabSection")}>
        <div className={cx("tabContainer")}>
          {currentCategory?.items.map((item) => (
            <div
              key={item}
              onClick={() => handleSubCategoryChange(item)}
              className={cx("subTabButton", { active: subCategory === item })}
            >
              {item}
            </div>
          ))}
        </div>
        <div className={cx("separator")}></div>
      </div>

      {/* 현재 선택된 상태 표시 */}
      <div className={cx("selectedStatus")}>
        <strong>
          <AdCard
            image={
              adCardData[subCategory]?.image || adCardData["수성현수막"].image
            }
            title={
              adCardData[subCategory]?.title || adCardData["수성현수막"].title
            }
            description={
              adCardData[subCategory]?.description ||
              adCardData["수성현수막"].description
            }
            price={
              adCardData[subCategory]?.price || adCardData["수성현수막"].price
            }
            productId={productNameToId[subCategory] || "misc-01"}
            available={subCategory !== "준비중"} // "준비중"인 경우 주문 불가
          />
        </strong>
      </div>
    </div>
  );
}

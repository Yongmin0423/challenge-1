"use client";

import React from "react";
import { categories } from "@/data/categories";
import cn from "classnames/bind";
import styles from "./DoubleTabs.module.scss";
import AdCard from "../adCard/AdCard";
import { adCardData, productNameToId } from "@/data/products";

const cx = cn.bind(styles);

function DoubleTabs() {
  const [mainCategory, setMainCategory] = React.useState(categories[0].title);
  const [subCategory, setSubCategory] = React.useState(categories[0].items[0]);

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
    <div className={cx("Container")}>
      {/* 1차 탭 */}
      <div className={cx("MainTabSection")}>
        <div className={cx("TabContainer")}>
          {categories.map((category) => (
            <div className={cx("TabItem")} key={category.title}>
              <button
                onClick={() => handleMainCategoryChange(category.title)}
                className={cx("MainTabButton", {
                  Active: mainCategory === category.title,
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
      <div className={cx("SubTabSection")}>
        <div className={cx("TabContainer")}>
          {currentCategory?.items.map((item) => (
            <div
              key={item}
              onClick={() => handleSubCategoryChange(item)}
              className={cx("SubTabButton", { Active: subCategory === item })}
            >
              {item}
            </div>
          ))}
        </div>
        <div className={cx("Separator")}></div>
      </div>

      {/* 현재 선택된 상태 표시 */}
      <div className={cx("SelectedStatus")}>
        {adCardData[subCategory] &&
        adCardData[subCategory].images?.length > 0 &&
        adCardData[subCategory].title ? (
          <AdCard
            image={adCardData[subCategory].images[0]}
            title={adCardData[subCategory].title}
            description={adCardData[subCategory].description}
            price={adCardData[subCategory].price}
            productId={productNameToId[subCategory]}
            available={true}
          />
        ) : (
          <AdCard
            image="https://thumbnail.10x10.co.kr/webimage/image/basic600/237/B002376387.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false"
            title="준비중입니다"
            description="해당 상품은 현재 준비중입니다. 빠른 시일 내에 찾아뵙겠습니다."
            price="문의"
            available={false}
          />
        )}
      </div>
    </div>
  );
}

export default React.memo(DoubleTabs);

"use client";

import { useState } from "react";
import { categories } from "../allCategory/AllCategory";
import styles from "./DoubleTabs.module.scss";
import AdCard from "../adCard/AdCard";

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
    <div className={styles.container}>
      {/* 1차 탭 */}
      <div className={styles.mainTabSection}>
        <div className={styles.tabContainer}>
          {categories.map((category) => (
            <div className={styles.tabItem} key={category.title}>
              <button
                onClick={() => handleMainCategoryChange(category.title)}
                className={`${styles.mainTabButton} ${
                  mainCategory === category.title ? styles.active : ""
                }`}
              ></button>
              <p>{category.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2차 탭 */}
      <div>
        <div className={styles.tabContainer}>
          {currentCategory?.items.map((item) => (
            <div
              key={item}
              onClick={() => handleSubCategoryChange(item)}
              className={`${styles.subTabButton} ${
                subCategory === item ? styles.active : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* 현재 선택된 상태 표시 */}
      <div className={styles.selectedStatus}>
        <strong>
          <AdCard />
        </strong>
      </div>
    </div>
  );
}

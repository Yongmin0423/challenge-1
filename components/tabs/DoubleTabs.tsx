"use client";

import { useState } from "react";
import { categories } from "../allCategory/AllCategory";
import cn from "classnames/bind";
import styles from "./DoubleTabs.module.scss";
import AdCard from "../adCard/AdCard";

const cx = cn.bind(styles);

// 각 서브탭별 AdCard 데이터
const adCardData: Record<string, { image: string; title: string; description: string; price: string }> = {
  // 현수막 카테고리
  "수성현수막": {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_fyyb9_ruJMu4ZpDJfiHDzOi70aKEcpb1A&s",
    title: "수성현수막",
    description: "친환경 수성잉크로 제작하는 고품질 현수막입니다.",
    price: "15,000원~"
  },
  "솔벤현수막": {
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    title: "솔벤현수막",
    description: "내구성이 뛰어난 솔벤트 잉크 현수막입니다.",
    price: "18,000원~"
  },
  "게릴라현수막": {
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500",
    title: "게릴라현수막",
    description: "빠른 제작과 설치가 가능한 게릴라 현수막입니다.",
    price: "12,000원~"
  },
  "족자현수막": {
    image: "https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?w=500",
    title: "족자현수막",
    description: "전통적인 족자 형태의 고급 현수막입니다.",
    price: "25,000원~"
  },
  "가로등현수막": {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500",
    title: "가로등현수막",
    description: "가로등에 설치하는 특수 제작 현수막입니다.",
    price: "30,000원~"
  },
  "Re-pet현수막": {
    image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=500",
    title: "Re-pet현수막",
    description: "재활용 소재로 제작하는 친환경 현수막입니다.",
    price: "20,000원~"
  },

  // 실사출력 카테고리
  "PVC켈지": {
    image: "https://images.unsplash.com/photo-1586380919002-b1e8ecf4a8c5?w=500",
    title: "PVC켈지",
    description: "고화질 PVC 소재 실사출력물입니다.",
    price: "8,000원~"
  },
  "그레이PVC켈지": {
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
    title: "그레이PVC켈지",
    description: "그레이백 처리된 고급 PVC 켈지입니다.",
    price: "10,000원~"
  },
  "페트지": {
    image: "https://images.unsplash.com/photo-1586716402203-79219bede43c?w=500",
    title: "페트지",
    description: "투명하고 내구성 좋은 페트지 소재입니다.",
    price: "12,000원~"
  },

  // 배너 카테고리
  "X배너": {
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500",
    title: "X배너",
    description: "설치가 간편한 휴대용 X배너입니다.",
    price: "35,000원~"
  },
  "철제배너": {
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    title: "철제배너",
    description: "견고한 철제 프레임의 내구성 높은 배너입니다.",
    price: "80,000원~"
  },
  "윈드배너": {
    image: "https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?w=500",
    title: "윈드배너",
    description: "바람에 강한 특수 제작 윈드배너입니다.",
    price: "45,000원~"
  },
  "Re-pet배너": {
    image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=500",
    title: "Re-pet배너",
    description: "친환경 재활용 소재로 제작한 배너입니다.",
    price: "40,000원~"
  },

  // 명함 카테고리
  "일반지명함": {
    image: "https://images.unsplash.com/photo-1586716402203-79219bede43c?w=500",
    title: "일반지명함",
    description: "기본적인 용지로 제작하는 일반 명함입니다.",
    price: "8,000원~"
  },
  "고급지명함": {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500",
    title: "고급지명함",
    description: "프리미엄 용지로 제작하는 고급 명함입니다.",
    price: "15,000원~"
  },
  "특수지명함": {
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
    title: "특수지명함",
    description: "특수 재질과 효과를 적용한 명함입니다.",
    price: "25,000원~"
  },
  "PET명함": {
    image: "https://images.unsplash.com/photo-1586380919002-b1e8ecf4a8c5?w=500",
    title: "PET명함",
    description: "투명하고 독특한 PET 소재 명함입니다.",
    price: "30,000원~"
  },
  "쿠폰명함": {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_fyyb9_ruJMu4ZpDJfiHDzOi70aKEcpb1A&s",
    title: "쿠폰명함",
    description: "할인 쿠폰 기능이 있는 특별 명함입니다.",
    price: "12,000원~"
  },

  // 스티커 카테고리
  "도무송스티커": {
    image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=500",
    title: "도무송스티커",
    description: "내구성이 뛰어난 도무송 재질 스티커입니다.",
    price: "5,000원~"
  },
  "사각형스티커": {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500",
    title: "사각형스티커",
    description: "깔끔한 사각형 모양의 스티커입니다.",
    price: "3,000원~"
  },
  "원형스티커": {
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500",
    title: "원형스티커",
    description: "부드러운 곡선의 원형 스티커입니다.",
    price: "3,500원~"
  },

  // 인쇄/판촉 카테고리
  "전단": {
    image: "https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?w=500",
    title: "전단지",
    description: "효과적인 홍보를 위한 고품질 전단지입니다.",
    price: "4,000원~"
  },
  "카달로그": {
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    title: "카탈로그",
    description: "제품 소개용 프리미엄 카탈로그입니다.",
    price: "15,000원~"
  },
  "각티슈": {
    image: "https://images.unsplash.com/photo-1586716402203-79219bede43c?w=500",
    title: "각티슈",
    description: "실용적인 판촉용 각티슈입니다.",
    price: "2,000원~"
  },
  "물티슈": {
    image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=500",
    title: "물티슈",
    description: "편리한 판촉용 물티슈입니다.",
    price: "3,000원~"
  },
  "독일행주": {
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
    title: "독일행주",
    description: "고품질 독일산 행주입니다.",
    price: "5,000원~"
  },
  "리유저블컵": {
    image: "https://images.unsplash.com/photo-1586380919002-b1e8ecf4a8c5?w=500",
    title: "리유저블컵",
    description: "친환경 재사용 가능한 컵입니다.",
    price: "8,000원~"
  },

  // 간판 카테고리
  "채널간판": {
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
    title: "채널간판",
    description: "입체감 있는 채널 레터 간판입니다.",
    price: "200,000원~"
  },
  "플렉스간판": {
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    title: "플렉스간판",
    description: "경제적이고 실용적인 플렉스 간판입니다.",
    price: "80,000원~"
  },
  "갈바간판": {
    image: "https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?w=500",
    title: "갈바간판",
    description: "견고한 갈바늄 소재의 간판입니다.",
    price: "120,000원~"
  },
  "성형간판": {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500",
    title: "성형간판",
    description: "독특한 형태로 제작하는 성형 간판입니다.",
    price: "300,000원~"
  },
  "돌출간판": {
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500",
    title: "돌출간판",
    description: "눈에 잘 띄는 돌출형 간판입니다.",
    price: "250,000원~"
  },

  // 기타 카테고리들
  "준비중": {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_fyyb9_ruJMu4ZpDJfiHDzOi70aKEcpb1A&s",
    title: "준비중",
    description: "곧 출시될 예정인 상품입니다.",
    price: "문의"
  }
};

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
    <div className={cx('container')}>
      {/* 1차 탭 */}
      <div className={cx('mainTabSection')}>
        <div className={cx('tabContainer')}>
          {categories.map((category) => (
            <div className={cx('tabItem')} key={category.title}>
              <button
                onClick={() => handleMainCategoryChange(category.title)}
                className={cx('mainTabButton', { active: mainCategory === category.title })}
              ></button>
              <p>{category.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2차 탭 */}
      <div className={cx('subTabSection')}>
        <div className={cx('tabContainer')}>
          {currentCategory?.items.map((item) => (
            <div
              key={item}
              onClick={() => handleSubCategoryChange(item)}
              className={cx('subTabButton', { active: subCategory === item })}
            >
              {item}
            </div>
          ))}
        </div>
        <div className={cx('separator')}></div>
      </div>

      {/* 현재 선택된 상태 표시 */}
      <div className={cx('selectedStatus')}>
        <strong>
          <AdCard
            image={adCardData[subCategory]?.image || adCardData["수성현수막"].image}
            title={adCardData[subCategory]?.title || adCardData["수성현수막"].title}
            description={adCardData[subCategory]?.description || adCardData["수성현수막"].description}
            price={adCardData[subCategory]?.price || adCardData["수성현수막"].price}
          />
        </strong>
      </div>
    </div>
  );
}

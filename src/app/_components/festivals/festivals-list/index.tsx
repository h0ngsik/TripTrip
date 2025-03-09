"use client";

import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import useFestivalsList from "./hook";
import styles from "./styles.module.css";

// const locationList: string[] = ["서울", "부산", "제주", "경기", "인천", "강원"];

export default function FestivalsList() {
  const { festivals, hasMore, onScroll } = useFestivalsList();

  return (
    <div className={styles.openApisListContainer}>
      <header className={styles.headerContainer}>국내 축제 모음</header>
      <div className={styles.searchBardContainer}>
        <Image
          className={styles.searchIcon}
          src="/assets/search.png"
          alt="검색 아이콘"
          width={24}
          height={24}
        />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="행사명 또는 지역명을 입력해주세요."
        />
      </div>
      {/* <nav>
        <ul className={styles.locationContainer}>
          {locationList.map((el, index) => (
            <li
              key={index}
              className={index === 0 ? styles.navItem_selected : styles.navItem}
            >
              {el}
            </li>
          ))}
        </ul>
      </nav> */}
      <InfiniteScroll
        next={onScroll}
        hasMore={hasMore}
        loader={<h4>로딩중.....</h4>}
        dataLength={festivals.length}
      >
        <div className={styles.cardListContainer}>
          {festivals.map((el, index) => (
            <Card
              key={index}
              hoverable
              cover={
                <Image
                  className={styles.cardImage}
                  src={el.firstimage ? el.firstimage : "/assets/no_image.png"}
                  alt={`${el.title} 이미지`}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              }
            >
              <Meta title={el.title} description={el.addr1} />
            </Card>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

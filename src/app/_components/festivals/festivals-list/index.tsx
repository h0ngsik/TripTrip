"use client";

import { useEffect, useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import styles from "./styles.module.css";

// const locationList: string[] = ["서울", "부산", "제주", "경기", "인천", "강원"];

export default function FestivalsList() {
  const [numberOfFestivals, setNumberOfFestivals] = useState(1);
  const [pageNum, setPageNum] = useState(1);
  const [festivals, setFestivals] = useState<IFestival[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false); // ✅ 중복 호출 방지

  const fetchFestivals = async (page: number) => {
    try {
      const res = await fetch(`/api/festivals?page=${page}`);
      const data = await res.json();

      if (!numberOfFestivals) {
        setNumberOfFestivals(data.response.body.totalCount);
      }

      return data.response.body.items.item;
    } catch (error) {
      console.log("오류가 발생했습니다.!!!!!");
      console.log(error);
      return [];
    }
  };

  // ✅ 스크롤할 때만 API 호출하도록 변경
  const onScroll = useCallback(async () => {
    if (!hasMore || isFetching) return; // 중복 호출 방지
    setIsFetching(true); // ✅ 호출 중 상태 변경

    const nextPage = pageNum + 1;
    const more = await fetchFestivals(nextPage);

    if (!more.length) {
      setHasMore(false);
    } else {
      setFestivals((prevFestivals) => [...prevFestivals, ...more]);
      setPageNum(nextPage); // 성공적으로 데이터가 로드되면 페이지 증가
    }

    setIsFetching(false); // 호출 완료 후 상태 변경
  }, [hasMore, isFetching, pageNum]);

  // 초기 데이터 로드 (첫 페이지)
  useEffect(() => {
    fetchFestivals(1).then((initialFestivals) => {
      setFestivals(initialFestivals);
    });
  }, []);

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

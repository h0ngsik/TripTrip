import { useCallback, useEffect, useState } from "react";

const useFestivalsList = () => {
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
      setHasMore(false);
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

  return {
    festivals,
    hasMore,
    onScroll,
  };
};

export default useFestivalsList;

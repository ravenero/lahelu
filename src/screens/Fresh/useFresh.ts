import { useCallback, useEffect, useMemo, useState } from "react";
import { httpClient } from "@/utils/network";

const useFresh = () => {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [viewableItems, setViewableItems] = useState<any>([]);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const fetchData = useCallback(
    async (page: number) => {
      if (loading || !hasMoreData) return;

      setLoading(true);

      try {
        const response = await httpClient({
          method: "GET",
          url: `/fresh/${page}`,
        });
        const newData = response.data;

        if (newData && newData.length > 0) {
          if (page > 1) {
            setData((prevData) => [...prevData, ...newData]);
          } else {
            setData(newData);
          }
        } else {
          setHasMoreData(false);
        }
      } catch (error) {
        setLoading(false);
        setLoadMore(false);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
        setLoadMore(false);
      }
    },
    [loading, hasMoreData]
  );

  const handleLoadMore = useCallback(() => {
    if (hasMoreData && !loadMore) {
      setLoadMore(true);
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMoreData, loadMore]);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: any[] }) => {
      setViewableItems(viewableItems);
    },
    []
  );

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return useMemo(
    () => ({
      data,
      loading,
      loadMore,
      viewabilityConfig,
      viewableItems,
      handleLoadMore,
      onViewableItemsChanged,
    }),
    [
      data,
      loading,
      loadMore,
      viewabilityConfig,
      viewableItems,
      handleLoadMore,
      onViewableItemsChanged,
    ]
  );
};

export default useFresh;

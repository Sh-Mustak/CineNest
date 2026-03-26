import { useCallback, useEffect, useRef, useState } from "react";
import { fetchAllMovies } from "../services/movieFetcher";
import { fetchAllTvShows } from "../services/tvSeriesFetcher";

/**
 * useDiscover Hook
 * @param {string} type - "movie" or "tv"
 */
export function useDiscover(type = "movie") {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef(null);
  const loadingRef = useRef(false); // prevents duplicate API calls

  // Choose the correct fetcher based on type
  const fetcher = type === "movie" ? fetchAllMovies : fetchAllTvShows;

  const loadItems = useCallback(
    async (pageNum) => {
      if (loadingRef.current) return; // prevent duplicate calls
      loadingRef.current = true;
      setLoading(true);

      const { data, error } = await fetcher(pageNum); // call the appropriate fetcher

      if (error) {
        setError(error);
      } else {
        setItems((prev) => {
          const map = new Map();
          [...prev, ...data.results].forEach((item) => map.set(item.id, item));
          return Array.from(map.values());
        });

        if (pageNum >= data.total_pages) {
          setHasMore(false);
        }
      }

      setLoading(false);
      loadingRef.current = false;
    },
    [fetcher],
  );

  // fetch on page change
  useEffect(() => {
    if (!hasMore) return;

    const fetchData = async () => {
      await loadItems(page);
    };

    fetchData();
  }, [page, loadItems, hasMore]);

  // Intersection Observer for infinite scroll
  const lastElementRef = useCallback(
    (node) => {
      if (loading || !hasMore) return;

      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((prev) => prev + 1);
          }
        },
        {
          rootMargin: "200px", // preload before reaching bottom
        },
      );

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore],
  );

  // cleanup
  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  return { items, loading, error, lastElementRef };
}

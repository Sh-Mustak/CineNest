import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { fetchAllMovies } from "../services/movieFetcher";
import { fetchAllTvShows } from "../services/tvSeriesFetcher";

/**
 * useDiscover Hook
 * @param {string} type - "movie" or "tv"
 * @param {string} category - the category of media to fetch
 */
export function useDiscover(type, category = null) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef(null);
  const loadingRef = useRef(false);

  // ✅ Fetcher with category passed
  const fetcher = useMemo(() => {
    return type === "movie"
      ? (pageNum) => fetchAllMovies(pageNum, category)
      : (pageNum) => fetchAllTvShows(pageNum, category);
  }, [type, category]);

  const loadItems = useCallback(
    async (pageNum) => {
      if (loadingRef.current) return;

      loadingRef.current = true;
      setLoading(true);

      const { data, error } = await fetcher(pageNum);

      if (error) {
        setError(error);
      } else {
        setItems((prev) => {
          const map = new Map();
          [...prev, ...data.results].forEach((item) =>
            map.set(item.id, item)
          );
          return Array.from(map.values());
        });

        if (pageNum >= data.total_pages) {
          setHasMore(false);
        }
      }

      setLoading(false);
      loadingRef.current = false;
    },
    [fetcher]
  );

  // Fetch on page change
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
          rootMargin: "200px",
        }
      );

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore]
  );

  // Cleanup
  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  return { items, loading, error, lastElementRef };
}
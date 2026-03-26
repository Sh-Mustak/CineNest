import { useCallback, useEffect, useRef, useState } from "react";
import { fetchAllMovies } from "../services/movieFetcher";

export default function useMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef(null);
  const loadingRef = useRef(false); // prevents duplicate API calls

  const loadMovies = useCallback(async (pageNum) => {
    if (loadingRef.current) return;
    loadingRef.current = true;

    setLoading(true);

    const { data, error } = await fetchAllMovies(pageNum);

    if (error) {
      setError(error);
    } else {
      setMovies((prev) => {
        const map = new Map();

        [...prev, ...data.results].forEach((movie) => {
          map.set(movie.id, movie);
        });

        return Array.from(map.values());
      });

      if (pageNum >= data.total_pages) {
        setHasMore(false);
      }
    }

    setLoading(false);
    loadingRef.current = false;
  }, []);

  useEffect(() => {
    if (!hasMore) return;

    const fetchData = async () => {
      await loadMovies(page);
    };

    fetchData();
  }, [page, loadMovies, hasMore]);

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

  //  cleanup
  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  return { movies, loading, error, lastElementRef };
}

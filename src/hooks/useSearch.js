import { useEffect, useState } from "react";
import { fetchSearchItems } from "../services/searchFetcher";

export function useSearch(query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const loadSearch = async () => {
      setLoading(true);

      const { data, error } = await fetchSearchItems(query);

      if (error) {
        setError(error);
        setData([]);
      } else {
        setData(data);
      }

      setLoading(false);
    };

    const timer = setTimeout(loadSearch, 400);
    return () => clearTimeout(timer);
  }, [query]);

  
  if (!query) {
    return { data: [], loading: false, error: null };
  }

  return { data, loading, error };
}

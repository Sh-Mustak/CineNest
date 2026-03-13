import { useEffect, useState } from "react";
import { fetchMediaDetails } from "../services/mediaFetcher";

export function useMediaDetails(type, id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id || !type) return;

    const loadDetails = async () => {
      setLoading(true);

      const { data, error } = await fetchMediaDetails(type, id);

      if (error) {
        setError(error);
        setData(null);
      } else {
        setData(data);
      }

      setLoading(false);
    };

    loadDetails();
  }, [type, id]);

  return { data, loading, error };
}
import { useEffect, useState } from "react";
import { fetchSeriesDetails } from "../services/tvSeriesFetcher";

export function useSeriesDetails(id) {
  const [seriesDetails, setSeriesDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const loadDetails = async () => {
      setLoading(true);

      const { details, error } = await fetchSeriesDetails(id);

      if (error) {
        setError(error);
        setSeriesDetails(null);
      } else {
        setSeriesDetails(details);
      }

      setLoading(false);
    };

    loadDetails();
  }, [id]);

  return { seriesDetails, loading, error };
}

import { useEffect, useState } from "react";
import { FetchEpisodes } from "../services/tvSeriesFetcher";

export function useEpisodes(seriesId, seasonNmbr) {
  const [episodes, setEpisodes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!seriesId || !seasonNmbr) return;

    const loadingEpisodes = async () => {
      setLoading(true);

      const { data, error } = await FetchEpisodes(seriesId, seasonNmbr);

      if (error) {
        setError(error);
        setEpisodes(null);
      } else {
        setEpisodes(data);
      }

      setLoading(false);
    };

    loadingEpisodes();
  }, [seriesId, seasonNmbr]);

  return { episodes, loading, error };
}

import { embed_endpoints } from "./endpoints";

export const embededService = {
  getMoviePlayer: (id) => embed_endpoints.movie(id),
  getTvPlayer: (id, season, episode) => embed_endpoints.tv(id, season, episode),
};

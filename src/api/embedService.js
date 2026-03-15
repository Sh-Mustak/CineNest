import { embed_endpoints } from "./endpoints";

export const embededService = {
  getMoviePlayer: (id) => embed_endpoints.movie(id),
};

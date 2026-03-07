import { embed_endpoints } from "./endpoints";

export const embededService = {
    getMoviePlayer : (movieId) =>{
        return embed_endpoints.movie(movieId);
    }
}
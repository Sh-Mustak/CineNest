import { embed_endpoints } from "./endpoints";

export const embededService = {
    getMoviePlayer : (movieId) =>{
        return embed_endpoints.movie(movieId);
    },
    // getTvPlayer: (tvId, season, episode)=>{
    //     return embed_endpoints.tv(tvId, season, episode)
    // }
}
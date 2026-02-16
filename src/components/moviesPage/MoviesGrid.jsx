import MovieCard from "../movie/MovieCard";
export default function MoviesGrid(){
    return (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    );
}
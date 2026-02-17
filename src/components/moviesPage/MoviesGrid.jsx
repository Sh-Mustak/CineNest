import MovieCard from "../movie/MovieCard";
import MovieCardSkeleton from "../Skeleton/MovieCardSkeleton";
export default function MoviesGrid(){
    return (
        <div className="flex flex-col items-center justify-start py-20 gap-4">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
        </div>
    );
}
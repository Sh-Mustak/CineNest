/* eslint-disable no-unused-vars */
import {useState, useEffect} from "react";
import useAuth from "../../auth/hooks/useAuth";
import watchlistService from "../../../features/watchlist/services/watchlistServices";
import WatchlistToast from "../../../components/ui/WatchlistToast";
import {toast} from "sonner";
import React from "react";

export default function useWatchlist() {
    const {user, isAuthenticated} = useAuth();
    const [watchlist, setWatchlist] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadWatchlist = async () => {
            if(!isAuthenticated || !user) {
                setWatchlist([]);
                return;
            }
            try{
                setLoading(true);
                const userWatchlist = await watchlistService.getUserWatchlist(user.$id);
                setWatchlist(userWatchlist);
            } catch (error) {
                console.error("Error fetching watchlist:", error);
            } finally {
                setLoading(false);
            }
        }
        loadWatchlist();
    }, [user, isAuthenticated]);
    
    // check if a movie is in the watchlist
    const isInWatchlist = (movieId) => {
        return watchlist.some(item => item.movieId === String(movieId));
    }

    const addMovie = async (movie) => {
      
         try{
              const newRow = await watchlistService.addmovieToWatchlist({
                userId: user.$id,
                movieId: String(movie.id),
                mediaType: movie.media_type || movie.mediaType,
                title: movie.title || movie.name,
                posterPath: movie.poster_path,
              });
              setWatchlist((prev)=> [...prev, newRow]); // Update the watchlist state with the new movie
              toast.custom(()=>
                React.createElement(WatchlistToast, {
                    title: movie.title || movie.name,
                    action: "added to watchlist!",
                    icon: "bookmark_add",
                })
                );
              return newRow; // Return the newly added row for further use if needed
            }
            catch(err){
              console.error("Error adding movie to watchlist:", err);
              throw err; 
            }
    }
    const removeMovie = async (movieId) => {
        const item = watchlist.find(item => item.movieId === String(movieId));
        if(!item) return; // Movie not found in watchlist
        try{
            await watchlistService.removeMovieFromWatchlist({
                rowId: item.$id,
            });
            // Update the watchlist state after removal
            setWatchlist((prev)=> prev.filter(watchlistItem => watchlistItem.$id !== item.$id)); 
            toast.custom(()=>
            React.createElement(WatchlistToast, {
                title: item.title,
                action: "removed from watchlist!",
                icon: "bookmark_remove",
            })
            );
            } 
            catch(err){
            console.error("Error removing movie from watchlist:", err);
            throw err; 
        }
    }
    const getWatchlist = async () => {
        if(!isAuthenticated || !user) {
            setWatchlist([]);
            return;
        }
        try{
            setLoading(true);
            const userWatchlist = await watchlistService.getUserWatchlist(user.$id);
            setWatchlist(userWatchlist);
        } catch (error) {
            console.error("Error fetching watchlist:", error);
        } finally {
            setLoading(false);
        }
    }

    return { watchlist, loading, isInWatchlist, addMovie, removeMovie, getWatchlist };
}


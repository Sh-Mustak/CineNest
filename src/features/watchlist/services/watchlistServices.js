import tableDB from "../../../appwrite/database";
import {ID, Permission, Role, Query} from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_WATCHLIST_TABLE_ID;

class WatchlistService {
    async addmovieToWatchlist({userId, movieId, mediaType, title, posterPath}) {
        try{
            return await tableDB.createRow({
            databaseId: DATABASE_ID,
            tableId: COLLECTION_ID,
            rowId: ID.unique(),
            data:{
                userId,
                movieId: String(movieId),
                mediaType,
                title,
                posterPath,
            },
            permissions: [
                Permission.read(Role.user(userId)),
                Permission.update(Role.user(userId)),
                Permission.delete(Role.user(userId)),
            ]
        })

        }catch (error) {
            console.error("Error adding movie to watchlist:", error);
            throw error;
        }
    }

    async removeMovieFromWatchlist({rowId}) {
      try{
          return await tableDB.deleteRow({
            databaseId: DATABASE_ID,
            tableId: COLLECTION_ID,
            rowId: rowId,
        })
      } catch (error) {
        console.error("Error removing movie from watchlist:", error);
        throw error;
      }
    }
    async getUserWatchlist(userId) {
        try{
            const response = await tableDB.listRows({
                databaseId: DATABASE_ID,
                tableId: COLLECTION_ID,
                queries: [
                    Query.equal("userId", userId),
                ],
            });
            return response.rows;
        } catch (error) {
            console.error("Error fetching user watchlist:", error);
            throw error;
        }
    }
        async getWatchlistCount({ userId }) {
        try {
            const response = await tableDB.listRows({
                databaseId: DATABASE_ID,
                tableId: COLLECTION_ID,
                queries: [
                    Query.equal("userId", userId),
                ],
                total: true,
            });

            return response.total;
        } catch (error) {
            console.error("Error fetching watchlist count:", error);
            throw error;
        }
    }
}

export default new WatchlistService();
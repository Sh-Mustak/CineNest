import tableDB from "../../../appwrite//database";
import {ID, Permission, Role, Query} from "appwrite"

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLETION_ID = import.meta.env.VITE_APPWRITE_FAVORITE_TABLE_ID;


class FavoriteService {

    // add movie to favorite list
    async addToFavoriteList({userId, movieId, mediaType}){
        try{
            return await tableDB.createRow({
                databaseId : DATABASE_ID,
                tableId: COLLETION_ID,
                rowId: ID.unique(),
                data:{
                    userId,
                    tmdbId: movieId,
                    mediaType
                },
                permissions: [
                    Permission.read(Role.user(userId)),
                    Permission.update(Role.user(userId)),
                    Permission.delete(Role.user(userId))
                ]
            })
        }
        catch(error){
            console.error("Error adding movie to Favoritelist:", error);
            throw error;
        }
    }

    // remove movie to favorite list
    async removeFromFavoriteList({rowId}){
        try{
            return await tableDB.deleteRow({
                databaseId: DATABASE_ID,
                tableId: COLLETION_ID,
                rowId,
            })
        }
        catch (error) {
            console.error("Error removing movie from Favorite List:", error);
            throw error;
          }
    }

    // fetch movie from favorite list table
    async getFavoritList({userId}){
        try{
            const response = await tableDB.listRow({
                databaseId: DATABASE_ID,
                tableId: COLLETION_ID,
                queries: [
                    Query.equal("userId", userId),
                ]
            })
            return response.rows;
        }
        catch(error){
            console.error("Error fetching favorite list", error);
            throw error;
        }
    }

    // count total favorites for specific user
    async getFavoriteListCount({userId}){
        try{
            const response = await tableDB.listRow({
                databaseId: DATABASE_ID,
                tableId: COLLETION_ID,
                queries: [
                    Query.equal("userId", userId)
                ],
                total: true
            })
            return response.total;
        }
        catch(error){
            console.error("Error fetching favorite list count:", error);
            throw error;
        }
    }

}

export default new FavoriteService()
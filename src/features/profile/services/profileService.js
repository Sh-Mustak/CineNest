import tableDB from "../../../appwrite/database";
import {ID, Query} from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const PROFILE_TABLE_ID = import.meta.env.VITE_APPWRITE_PROFILE_TABLE_ID;

class ProfileService {
    async createProfile({userId, displayName}){
        try{
            return await tableDB.createRow({
                databaseId: DATABASE_ID,
                tableId: PROFILE_TABLE_ID,
                rowId: ID.unique(),
                data:{
                    userId,
                    displayName,
                    avatarUrl: "",
                    bio: "",
                }
            })
        }
        catch (error){
            console.error("Error creating profile:", error);
            throw error;
        }
    }

    async getProfileByUserId({userId}){
        try{
            const response = await tableDB.listRows({
                databaseId: DATABASE_ID,
                tableId: PROFILE_TABLE_ID,
                queries: [Query.equal("userId", userId)]
            });
            return response.rows.length > 0 ? response.rows[0] : null;
        }
        catch (error){
            console.error("Error fetching profile:", error);
            throw error;
        }
    }

    async updateProfile({rowId, displayName, avatarUrl, bio}){
        try{
            return await tableDB.updateRow({
                databaseId: DATABASE_ID,
                tableId: PROFILE_TABLE_ID,
                rowId,
                data:{
                    displayName,
                    avatarUrl,
                    bio,
                }
            })
        }
        catch (error){
            console.error("Error updating profile:", error);
            throw error;
        }
    }
}
export default new ProfileService();
import { ID } from "appwrite";
import {account} from "../../../appwrite"

class AuthService{
    async register({name, email, password}){
        return await account.create(
            ID.unique(),
            email,
            password,
            name
        )
    }
    async login({email, password}){
        return await account.createEmailPasswordSession(
            email,
            password
        );
    }
    async logout(){
        return await account.deleteSession("current");
    }
    // async getCurrentUser(){
    //     // return await account.get();
    // }
    async sendVerification(url){
        return await account.createVerification(url);
    }
    async forgotPassword(email, url){
        return await account.createRecovery(email, url);
    }
}
export default new AuthService();
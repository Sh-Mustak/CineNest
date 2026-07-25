import { ID } from "appwrite";
import {account} from "../../appwrite"

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
    async logout(){}
    async getCurrentUser(){}
    async sendVerification(){}
    async forgotPassword(){}
}
export default new AuthService();
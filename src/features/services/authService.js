import { ID } from "appwrite";
import {account} from "../../appwrite"

class AuthService{
    async register({name, email, password}){}
    async login({email, password}){}
    async logout(){}
    async getCurrentUser(){}
    async sendVerification(){}
    async forgotPassword(){}
}
export default new AuthService();
import { useEffect, useState } from "react";
import AuthContext from "../AppwriteContext/AuthContext"
import authService from "../../features/auth/services/authService"

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const checkUser = async ()=>{
            try{
                const currentUser = await authService.getCurrentUser(); 
                setUser(currentUser);
            }
            // eslint-disable-next-line no-unused-vars
            catch(error){
                setUser(null)   
            }
            finally{
                setLoading(false)
            }
        }
        checkUser();
    },[]);

    const value = {
        user,
        setUser,
        loading,
        isAuthenticated: !!user,
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;
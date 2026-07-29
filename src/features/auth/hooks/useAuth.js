import { useContext } from "react";
import AuthContext from "../../../context/AppwriteContext/AuthContext";
const useAuth = ()=>{
    return useContext(AuthContext)
};
export default useAuth;
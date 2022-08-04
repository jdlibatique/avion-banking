import {auth} from "../firebase/config";
import {signOut} from "@firebase/auth";
import {useAuthContext} from "./useAuthContext";
import {useNavigate} from "react-router-dom";

export const useLogout = () => {
    
    const {dispatch} = useAuthContext();
    const navigate = useNavigate();
    
    const logout = () => {
        signOut(auth).then(() => {
            dispatch({type: 'LOGOUT'});
            navigate("/");
        }).catch((error) => {
            console.log(error.message);
        })
    }
}
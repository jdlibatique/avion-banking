import {auth} from "../firebase/config";
import {signOut} from "@firebase/auth";

export const useLogout = () => {
    const logout = () => {
        signOut(auth).then(() => {
            console.log("User logged out");
        }).catch((error) => {
            console.log(error.message);
        })
    }
}
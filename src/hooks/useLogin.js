import {useState} from "react";
import {auth} from "../firebase/config"
import {signInWithEmailAndPassword} from "@firebase/auth";
import {useAuthContext} from "./useAuthContext";

export const useLogin = () => {
    
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();
    
    const login = (email, password) => {
        setError(null);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                dispatch({type: 'LOGIN', payload: userCredential.user})
        }).catch((error) => {
            setError(error.message);
            console.log(error);
        })
    }
    return { error, login };
}


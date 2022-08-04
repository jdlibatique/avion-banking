import {useState} from "react";
import {auth} from "../firebase/config"
import {signInWithEmailAndPassword} from "@firebase/auth";
import {useAuthContext} from "./useAuthContext";
import {useNavigate} from "react-router-dom";

export const useLogin = () => {
    
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();
    
    const login = (email, password) => {
        setError(null);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Logged in with", userCredential.user.email)
                dispatch({type: 'LOGIN', payload: userCredential.user})
                navigate("/Homepage");
        }).catch((error) => {
            setError(error.message);
            console.log(error);
        })
    }
    return { error, login };
}


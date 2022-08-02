import {useState} from "react";
import {auth} from "../firebase/config"
import {signInWithEmailAndPassword} from "@firebase/auth";

export const useLogin = () => {
    
    const [error, setError] = useState(null);
    
    const login = (email, password) => {
        setError(null);
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("Signed in successfully: ", userCredential.user)
        }).catch((error) => {
            setError(error.message);
            console.log(error);
        })
    }
    return { error, login };
}


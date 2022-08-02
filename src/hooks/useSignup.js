import { useState } from "react";
import auth from '../firebase/config'
import {createUserWithEmailAndPassword} from "@firebase/auth";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const signup = (email, password) => {
        setError(null);
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("Signup successful", userCredential.user);
        }).catch((error) => {
            setError(error.message);
        })
    }
    return { error, signup }
}
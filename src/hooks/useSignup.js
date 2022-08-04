import { useState } from "react";
import {auth} from '../firebase/config'
import {createUserWithEmailAndPassword} from "@firebase/auth";
import { useAuthContext} from "./useAuthContext";
import Swal from "sweetalert2";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const {dispatch} = useAuthContext()
    
    
    const signup = (email, password) => {
        setError(null);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                Swal.fire(`Welcome!` ,`Successfully signed up using ${userCredential.user.email}`, `success`);
                dispatch({type: 'LOGIN', payload: userCredential.user })
                
        }).catch((error) => {
            setError(error.message);
            Swal.fire(`Oops!` ,error.message, error);
        })
    }
    return { error, signup }
}
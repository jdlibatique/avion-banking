import {useState} from "react";
import {useAuthContext} from "./useAuthContext";

import {auth, storage} from '../firebase/config'
import {createUserWithEmailAndPassword, updateProfile} from "@firebase/auth";

import {ref, uploadBytes, getDownloadURL} from "@firebase/storage";

import Swal from "sweetalert2";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const {dispatch} = useAuthContext()
    
    
    const signup = async (email, password, displayName, displayPhoto) => {
        setError(null);
        
        try {
    
            await createUserWithEmailAndPassword(auth, email, password)
    
            const uploadPath = `displayPhotos/${auth.currentUser.uid}/${displayPhoto.name}`;
            
            const displayPhotoRef = ref(storage, uploadPath);
            const displayPhotoURL = getDownloadURL(displayPhotoRef);
    
            await updateProfile(auth.currentUser, {displayName, displayPhotoURL})
            await Swal.fire(`Welcome!`, `Successfully signed up using ${auth.currentUser.email}`, `success`);
            
            console.log(auth.currentUser)
    
            setTimeout(() => {
                dispatch({type: 'LOGIN', payload: auth.currentUser})
            }, 1500);
            
        } catch (error) {
            if (error) {
                setError(error.message);
                await Swal.fire(`Oops!`, error.message, `error`);
            }
        }

    }
    return {error, signup}
}

import {useState, useEffect} from "react";
import {useAuthContext} from "./useAuthContext";

import {auth, db, storage} from '../firebase/config'
import {createUserWithEmailAndPassword, updateProfile} from "@firebase/auth";

import {ref, uploadBytes, getDownloadURL} from "@firebase/storage";

import Swal from "sweetalert2";
import {collection, doc, getDocs, serverTimestamp, setDoc} from "@firebase/firestore";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useAuthContext()
    const [accounts, setAccounts] = useState([]);
    
    useEffect(() => {
        const ref = collection(db, 'users');
        
        getDocs(ref).then((snapshot) => {
            let results = [];
            snapshot.docs.forEach(doc => {
                results.push({id: doc.id, ...doc.data()});
            })
            setAccounts(results);
        })
    }, [])
    
    
    const signup = async (email, password, displayName, displayPhoto) => {
        setError(null);
        setIsPending(true);
        
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password)
            
            if (!userCred) {
                throw new Error("Oops, couldn't create user!'");
            }
            
            //setting upload path to Firebase storage
            const uploadPath = `displayPhotos/${userCred.user.uid}/${displayPhoto.name}`;
            
            //setting ref to Firebase storage
            const displayPhotoRef = ref(storage, uploadPath);
            
            //uploading to Firebase Storage
            await uploadBytes(displayPhotoRef, displayPhoto);
            
            //getting URL of photo that was just uploaded
            const displayPhotoURL = await getDownloadURL(displayPhotoRef);
            
    
            await updateProfile(userCred.user, {displayName, displayPhotoURL})
            await Swal.fire(`Welcome!`, `Successfully signed up using ${userCred.user.email}`, `success`);
            
            // await db("users").doc(userCred.user.uid).set({
            //     accountNumber: accounts.length - 1,
            //     displayName: displayName,
            //     displayPhotoURL: displayPhotoURL,
            //     balance: 0,
            // })
    
            await setDoc(doc(db, "users", `${userCred.user.uid}`), {
                accountNumber: accounts.length,
                displayName: displayName,
                displayPhotoURL: displayPhotoURL,
                balance: 0,
            })
            
            console.log(auth.currentUser)
    
            setTimeout(() => {
                dispatch({type: 'LOGIN', payload: userCred.user})
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
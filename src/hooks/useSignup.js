
import {useState, useEffect} from "react";
import {useAuthContext} from "./useAuthContext";

import {auth, db, storage} from '../firebase/config'
import {createUserWithEmailAndPassword, updateProfile} from "@firebase/auth";

import {ref, uploadBytes, getDownloadURL} from "@firebase/storage";

import Swal from "sweetalert2";
import {collection, doc, getDocs, query, limit, orderBy, serverTimestamp, setDoc} from "@firebase/firestore";
import {FindDocByField} from "./useFindDocByField";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useAuthContext()
    const [accounts, setAccounts] = useState([]);
    const [latestAccountNumber, setLastAccountNumber] = useState(0);
    
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
    
    
    const signup = async (email, password, displayName, displayPhoto, balance) => {
        setError(null);
        setIsPending(true);
        
        // const queryRef = collection(db, 'users');
        // const lastAccountNumberQuery = await query(queryRef, orderBy("accountNumber", "desc"), limit(1));
        // const lastAccountNumber = await getDocs(lastAccountNumberQuery);
        
        // const orderedAccounts = await getDocs(db.collection("users").orderBy("createdAt", "desc"));
        
        
        // console.log("Last account number", lastAccountNumberQuery.accountNumber);
        
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
            
    
            await updateProfile(userCred.user, {displayName, photoURL : displayPhotoURL})
            await Swal.fire(`Welcome!`, `Successfully signed up using ${userCred.user.email}`, `success`);
            
            const queriedAccountNumber = await FindDocByField("accountNumber", "users")
            
            // setLastAccountNumber(await useFindDocByField("accountNumber", "users"))
            console.log(queriedAccountNumber)
            
    
            await setDoc(doc(db, "users", `${userCred.user.uid}`), {
                accountNumber: queriedAccountNumber + 1,
                displayName: displayName,
                displayPhotoURL: displayPhotoURL,
                balance: balance,
                createdAt: serverTimestamp(),
            })
            
            console.log(auth.currentUser)
            setIsPending(false);
    
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
    return {error, signup, isPending}
}
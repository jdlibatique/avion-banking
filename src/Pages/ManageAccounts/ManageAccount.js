import React, {useEffect} from 'react'
import './ManageAccounts.css'
import { useNavigate } from 'react-router-dom'
import ConfirmationOpen from '../Confirmation/ConfirmationOpen';
import { useState } from 'react'
import {db} from "../../firebase/config";
import {addDoc, collection, getDocs} from "@firebase/firestore";
import {useLogout} from "../../hooks/useLogout";

function ManageAccount() {
    
    const navigate = useNavigate();
    const { logout } = useLogout();
    
    const [openConfirmation, setOpenConfirmation] = useState(false);
    const [accounts, setAccounts] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [balance, setBalance] = useState("");
    
    useEffect(() => {
        const ref = collection(db, 'accounts');
        
        getDocs(ref).then((snapshot) => {
            let results = [];
            snapshot.docs.forEach(doc => {
                results.push({id: doc.id, ...doc.data()});
            })
            setAccounts(results);
        })
    }, [])
    
    // const submitHandler = evt => {
    //     evt.preventDefault();
    //     evt.preventDefault();
    //     addDoc(collectionRef, {
    //         title: addBookForm.title.value,
    //         author: addBookForm.author.value,
    //         createdAt: serverTimestamp(),
    //     })
    //         .then(() => {
    //             addBookForm.reset();
    //             alert("Successfully added comment!")
    //         })
    // }
    
    return (
        <div className='withdraw-container'>
            <div className='head-container'>
                <span>Avion Bank</span>
                <div className='home-out'>
                    <button className='button-home' onClick={() => navigate('/Homepage')}>Home</button>
                    <button className='button-logout' onClick={logout}>Logout</button>
                </div>
            </div>
                <form className='manage-accounts-body'>
                    <input className='button-account' type="text" name="name" placeholder="Account #"></input>
                    <input className='button-amount'  type="text" name="name" placeholder="First Name"></input>
                    <input className='button-amount'  type="text" name="name" placeholder="Last Name"></input>
                    <button className="button-create-user" type={'submit'}>Create User</button>
                </form>
            <div>
                {console.log(accounts)}
            </div>
        </div>
    )
}

export default ManageAccount
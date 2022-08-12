import React, {useEffect} from 'react'
import './ManageAccounts.css'
import { useNavigate } from 'react-router-dom'
import ConfirmationOpen from '../Confirmation/ConfirmationOpen';
import { useState } from 'react'
import {db} from "../../firebase/config";
import {setDoc, collection, getDocs, serverTimestamp, doc, addDoc, getDoc} from "@firebase/firestore";
import {useLogout} from "../../hooks/useLogout";
import Swal from "sweetalert2";
import UserDetails from "../UserDetails/UserDetails";
import {FindDocByField} from "../../hooks/useFindDocByField";
import {useSignup} from "../../hooks/useSignup";

function ManageAccount() {
    
    const navigate = useNavigate();
    const { logout } = useLogout();
    
    const [openConfirmation, setOpenConfirmation] = useState(false);
    const [accounts, setAccounts] = useState([]);
    const [newAccount, setNewAccount] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState("");
    const [balance, setBalance] = useState(0);
    const [displayPhoto, setDisplayPhoto] = useState(null)
    const [displayPhotoError, setDisplayPhotoError] = useState(null)
    
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
    
    const handleFileChange = (evt) => {
        setDisplayPhoto(null);
        let selected = evt.target.files[0];
        console.log(selected);
        
        if (!selected) {
            setDisplayPhotoError("Please select a file for your display photo!")
            return;
        }
        if ((!selected.type.includes('image'))) {
            setDisplayPhotoError("Please select an image file! No audio files please!")
            return;
        }
        if (selected.size > 100000) {
            setDisplayPhotoError("Please select an image file less than 100KB");
            return;
        }
        
        setDisplayPhotoError(null);
        setDisplayPhoto(selected);
        console.log("Valid photo selected");
    }
    
    const {signup, isPending, error} = useSignup();
    
    const addNewAccount = async (event) => {
        event.preventDefault();
        console.log(accounts)
        console.log(accounts.length);
        
        let accountNumber = await FindDocByField("accountNumber", "users") + 1;
        console.log(accountNumber)
        
        if (parseInt(balance) <= 0) {
            Swal.fire("Oops!", "Initial balance must be a positive value!", "error");
            return;
        } else if (isNaN(parseInt(balance))) {
            Swal.fire("Oops!", "Please enter a number value!", "error");
            return;
        }
        await signup(email, password, displayName, displayPhoto, balance)
        .then((doc) => {
            // Swal.fire("Created New Account", `Account ${accountNumber} created for ${displayName}!`, "success")
            const ref = collection(db, 'users');
            getDocs(ref).then((snapshot) => {
                let results = [];
                snapshot.docs.forEach(doc => {
                    results.push({id: doc.id, ...doc.data()});
                })
                setAccounts(results);
            })
        }).catch(error => {
            Swal.fire("Oops!", error.message, "error")
        })
    }
    
    return (
        <div className='withdraw-container'>
            <div className='head-container'>
                <span>Avion Bank</span>
                <div className='home-out'>
                    <button className='button-home' onClick={() => navigate('/Homepage')}>Home</button>
                    <button className='button-logout' onClick={logout}>Logout</button>
                </div>
            </div>
                <form className='manage-accounts-body' onSubmit={addNewAccount}>
                    <input className='button-amount'  type="text" name="name" placeholder="Email" onChange={e => setEmail(e.target.value)} required></input>
                    <input className='button-amount'  type="text" name="name" placeholder="Name" onChange={e => setDisplayName(e.target.value)} required></input>
                    <input className='button-amount'  type="text" name="name" placeholder="Default Password" onChange={e => setPassword(e.target.value)} required></input>
                    <input className='button-amount'  type="text" name="name" placeholder="Initial Balance" onChange={e => setBalance(parseInt(e.target.value))} required></input>
                    <input type="file" name='displayPhoto' id='displayPhoto' onChange={handleFileChange} required/>
                    {displayPhotoError && <div className={"error"}>{displayPhotoError}</div>}
                    <button className="button-create-user" type={'submit'}>Create User</button>
                </form>
            <div>
                {console.log(accounts)}
                {UserDetails(accounts)}
            </div>
        </div>
    )
}

export default ManageAccount
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

function ManageAccount() {
    
    const navigate = useNavigate();
    const { logout } = useLogout();
    
    const [openConfirmation, setOpenConfirmation] = useState(false);
    const [accounts, setAccounts] = useState([]);
    const [newAccount, setNewAccount] = useState("");
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
    
    const addNewAccount = async (event) => {
        event.preventDefault();
        console.log(accounts.length);
        let accountNumber = await accounts.length + 1;
        console.log(accountNumber)
        if (parseInt(balance) <= 0) {
            Swal.fire("Oops!", "Initial balance must be a positive value!", "error");
            return;
        }
        await setDoc(doc(db, "accounts", `${accountNumber}`), {
            firstName: firstName,
            lastName: lastName,
            balance: balance,
            createdOn: serverTimestamp()
        }).then((doc) => {
            Swal.fire("Created New Account", `Account ${accountNumber} created for ${firstName} ${lastName}!`, "success")
            const ref = collection(db, 'accounts');
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
                    <input className='button-amount'  type="text" name="name" placeholder="First Name" onChange={e => setFirstName(e.target.value)}></input>
                    <input className='button-amount'  type="text" name="name" placeholder="Last Name" onChange={e => setLastName(e.target.value)}></input>
                    <input className='button-amount'  type="text" name="name" placeholder="Initial Balance" onChange={e => setBalance(e.target.value)}></input>
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
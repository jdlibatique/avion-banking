import React from 'react'
import './Withdraw.css'
import { useNavigate } from 'react-router-dom'
import ConfirmationOpen from '../Confirmation/ConfirmationOpen';
import { useState } from 'react'
import {doc, getDoc, updateDoc} from "@firebase/firestore";
import {db} from "../../firebase/config";
import Swal from "sweetalert2";


function Withdraw() {

  const navigate = useNavigate();
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');

  const [openConfirmation, setOpenConfirmation] = useState(false);
    
    const withdrawFromAccount = async () => {
        const docRef = doc(db, 'accounts', accountNumber);
        let currentBalance = 0;
        let nextBalance = 0;
        console.log(amount, typeof amount)
        
        const getCurrentBalance = async (docRef) => {
            
            const docSnap = await getDoc(docRef).catch(error =>{
                Swal.fire(error.message)
            });
            
            if (!docSnap.exists()) {
                Swal.fire("Oops!", "Account does not exist", `error`)
                return;
            }
            
            return docSnap.data().balance;
        }
        
        currentBalance = await getCurrentBalance(docRef);
        
        console.log("currentBalance: ", currentBalance, typeof currentBalance)
        if (parseInt(currentBalance) < parseInt(amount)){
            Swal.fire("Oops!", "Account does not have enough funds!", "error")
            return;
        }
        nextBalance = parseInt(currentBalance) - parseInt(amount)
        
        
        console.log();
        
        updateDoc(docRef, {
            balance: nextBalance
        })
            .then(() => {
                Swal.fire(`Withdrew from Account #${accountNumber}`, `Current Balance in account: ${nextBalance}`, `success`)
                console.log()
            })
    }

  return (
    <div className='withdraw-container'>
        <div className='head-container'>
            <span>Avion Banking</span>
            <div className='home-out'>
                <button className='button-home' onClick={() => navigate('/Homepage')}>Home</button>
                <button className='button-logout'>Logout</button>
            </div>
        </div>
        <div className='withdraw-body'>
            <input className='button-account' type="text" name="name" placeholder="Account #" onChange={e => setAccountNumber(e.target.value)}></input>
            <input className='button-amount'  type="text" name="name" placeholder="Amount" onChange={e => setAmount(e.target.value)}></input>
            <button className="button-withdraw" onClick={withdrawFromAccount}>Withdraw</button>
        </div>
    </div>
  )
}

export default Withdraw

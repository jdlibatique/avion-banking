import React from 'react'
import './Transfer.css'
import {useNavigate} from 'react-router-dom'
import ConfirmationOpen from '../Confirmation/ConfirmationOpen';
import {useState} from 'react'
import {doc, getDoc, updateDoc} from "@firebase/firestore";
import {db} from "../../firebase/config";
import Swal from "sweetalert2";

function Transfer() {
    
    const navigate = useNavigate();
    const [accountNumber1, setAccountNumber1] = useState('');
    const [accountNumber2, setAccountNumber2] = useState('');
    const [amount, setAmount] = useState('');
    
    const [openConfirmation, setOpenConfirmation] = useState(false);
    
    const transferToAccount = async () => {
        const docRef = doc(db, 'accounts', accountNumber1);
        let currentBalance = 0;
        let nextBalance = 0;
        console.log(amount, typeof amount)
        
        const getCurrentBalance = async (docRef) => {
            const docSnap = await getDoc(docRef).catch(error => {
                Swal.fire(error.message)
            });
            if (!docSnap.exists()) {
                Swal.fire("Oops!", "Receiver does not exist!", `error`)
                return;
            }
            return docSnap.data().balance;
        }
        
        currentBalance = await getCurrentBalance(docRef);
        
        if (isNaN(currentBalance)) {
            Swal.fire("Oops!", "Sender does not exist!", "error")
            return;
        }
        
        
        console.log("currentBalance: ", currentBalance, typeof currentBalance)
        if (isNaN(parseInt(amount)) || parseInt(amount) <= 0) {
            Swal.fire("Oops!", "Please enter a valid value!", "error")
            return;
        } else if (accountNumber1 === accountNumber2) {
            Swal.fire("Oops!", "Can't transfer to the same account!", "error")
            return;
        } else if (parseInt(currentBalance) < parseInt(amount)) {
            Swal.fire("Oops!", "Account does not have enough funds!", "error")
            return;
        }
        nextBalance = parseInt(currentBalance) - parseInt(amount)
        let accountBalance = nextBalance;
        
        
        console.log();
        
        updateDoc(docRef, {
            balance: nextBalance
        })
            .then(() => {
                // Swal.fire(`Withdrew from Account #${accountNumber1}`, `Current Balance in account: ${nextBalance}`, `success`)
                console.log(`Withdrew from Account #${accountNumber1}`, `Current Balance in account: ${nextBalance}`, `success`)
            })
        
        const docRef2 = doc(db, 'accounts', accountNumber2);
        currentBalance = 0;
        nextBalance = 0;
        console.log(amount, typeof amount)
        
        currentBalance = await getCurrentBalance(docRef2);
        
        console.log("currentBalance: ", currentBalance, typeof currentBalance)
        nextBalance = parseInt(currentBalance) + parseInt(amount)
        console.log();
        
        updateDoc(docRef2, {
            balance: nextBalance
        })
            .then(() => {
                Swal.fire(`Transferred ${amount} to Account #${accountNumber2} from Account#${accountNumber1}`, `Current Balance in account: ${accountBalance}`, `success`)
                console.log()
            })
    }
    
    return (
        <div className='withdraw-container'>
            <div className='head-container'>
                <span>Avion Bank</span>
                <div className='home-out'>
                    <button className='button-home' onClick={() => navigate('/Homepage')}>Home</button>
                    <button className='button-logout'>Logout</button>
                </div>
            </div>
            <div className='transfer-body'>
                <input className='button-account' type="text" name="name" placeholder="Account #"
                       onChange={e => setAccountNumber1(e.target.value)}></input>
                <input className='button-amount' type="text" name="name" placeholder="Target Account"
                       onChange={e => setAccountNumber2(e.target.value)}></input>
                <input className='button-amount' type="text" name="name" placeholder="Amount"
                       onChange={e => setAmount(e.target.value)}></input>
                <button className="button-transfer" onClick={transferToAccount}>Transfer
                </button>
            </div>
            {openConfirmation && <ConfirmationOpen closeConfirmation={setOpenConfirmation}/>}
        </div>
    )
}

export default Transfer
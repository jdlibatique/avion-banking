import React from 'react'
import './Deposit.css'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import ConfirmationOpen from '../Confirmation/ConfirmationOpen';
import {doc, getDoc, updateDoc} from "@firebase/firestore";
import Swal from "sweetalert2";
import {db} from "../../firebase/config";

function Deposit() {
    
    const navigate = useNavigate();
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    
    const [openConfirmation, setOpenConfirmation] = useState(false);
    
    const updateAccount = async () => {
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

            // console.log("docSnap: ", docSnap.data())
            // console.log("docSnap balance: ", docSnap.data().balance)
            return docSnap.data().balance;
        }
    
        currentBalance = await getCurrentBalance(docRef);
        
        console.log("currentBalance: ", currentBalance, typeof currentBalance)
        nextBalance = parseInt(currentBalance) + parseInt(amount)
        console.log();
    
        updateDoc(docRef, {
            balance: nextBalance
        })
            .then(() => {
                Swal.fire(`Deposited to Account #${accountNumber}`, `Current Balance in account: ${nextBalance}`, `success`)
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
                <div className={'deposit-body'} id={'depositForm'}>
                    <input className='button-account' type="text" name="name" placeholder="Account #"
                           onChange={e => setAccountNumber(e.target.value)}></input>
                    <input className='button-amount' type="text" name="name" placeholder="Amount"
                           onChange={e => setAmount(e.target.value)}></input>
                    <button className="button-deposit" onClick={updateAccount}>Deposit</button>
                </div>
        </div>
    )
}

export default Deposit
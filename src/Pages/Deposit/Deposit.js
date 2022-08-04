import React from 'react'
import './Deposit.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ConfirmationOpen from '../Confirmation/ConfirmationOpen';

function Deposit() {

  const navigate = useNavigate();

  const [openConfirmation, setOpenConfirmation] = useState(false);


  return (
    <div className='withdraw-container'>
        <div className='head-container'>
            <span>Avion Banking</span>
            <div className='home-out'>
                <button className='button-home' onClick={() => navigate('/Homepage')}>Home</button>
                <button className='button-logout'>Logout</button>
            </div>
        </div>
        <div className='deposit-body'>
            <input className='button-account' type="text" name="name" placeholder="Account #"></input>
            <input className='button-amount'  type="text" name="name" placeholder="Amount"></input>
            <button className="button-deposit" onClick={() => {setOpenConfirmation(true)}}>Deposit</button>
        </div>
        {openConfirmation && <ConfirmationOpen closeConfirmation={setOpenConfirmation}/>}
    </div>
  )
}

export default Deposit
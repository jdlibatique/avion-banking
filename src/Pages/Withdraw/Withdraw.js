import React from 'react'
import './Withdraw.css'
import { useNavigate } from 'react-router-dom'
import ConfirmationOpen from '../Confirmation/ConfirmationOpen';
import { useState } from 'react'


function Withdraw() {

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
        <div className='withdraw-body'>
            <input className='button-account' type="text" name="name" placeholder="Account #"></input>
            <input className='button-amount'  type="text" name="name" placeholder="Amount"></input>
            <button className="button-withdraw" onClick={() => {setOpenConfirmation(true)}}>Withdraw</button>
        </div>
        {openConfirmation && <ConfirmationOpen closeConfirmation={setOpenConfirmation}/>}
    </div>
  )
}

export default Withdraw

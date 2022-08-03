import React from 'react'
import './Withdraw.css'
import { useNavigate } from 'react-router-dom'

function Withdraw() {

  const navigate = useNavigate();

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
            <button className='button-account'>Account #</button>
            <button className='button-amount'>Amount</button>
            <button className='button-withdraw'>Withdraw</button>
        </div>
    </div>
  )
}

export default Withdraw

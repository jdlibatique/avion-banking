import React from 'react'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {

  const navigate = useNavigate();

  return (
    <div className='home-container'>
        <div className='head-container'>
            <span>Avion Bank</span>
            <div className='home-out'>
                <button className='button-home' onClick={() => navigate('/Homepage')}>Home</button>
                <button className='button-logout'>Logout</button>
            </div>
        </div>
        <section className='home-body'>
            <div className='hello-user'>Hello, User</div>
            <div className='first-blank'></div>
            <div className='second-blank'></div>
            <button className='button-deposit' onClick={() => navigate('/Deposit')}>Deposit</button>
            <button className='button withdraw' onClick={() => navigate('/Withdraw')}>Withdraw</button>
            <button className='button-transfer' onClick={() =>navigate('/Transfer')}>Transfer</button>
            <button className='button-search'>Seach Account</button>
            <button className='button-view'>View Details</button>
            <button className='button-manage'>Manage Accounts</button>
        </section>
    </div>
  )
}


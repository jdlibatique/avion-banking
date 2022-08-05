import React from 'react'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import {useLogout} from "../../hooks/useLogout";


export default function Homepage() {

  const navigate = useNavigate();
  const { logout } = useLogout();

  const [user, setUser] = useState("Evan");


  return (
    <div className='home-container'>
        <div className='head-container'>
            <span>Avion Bank <i class="fa-solid fa-sack-dollar"></i></span>
            <div className='home-out'>
                <button className='button-home' onClick={() => navigate('/Homepage')}>Home</button>
                <button className='button-logout' onClick={logout}>Logout</button>
            </div>
        </div>
        <section className='home-body'>
            <div className='hello-user'>Hello, {user}! </div>
            <div className='first-blank'></div>
            <div className='second-blank'></div>
            <button className='deposit' onClick={() => navigate('/Deposit')}>Deposit</button>
            <button className='withdraw' onClick={() => navigate('/Withdraw')}>Withdraw</button>
            <button className='transfer' onClick={() =>navigate('/Transfer')}>Transfer</button>
            <button className='search' onClick={() => navigate('/SearchAccount')}>Search Account</button>
            <button className='view'>View Details</button>
            <button className='manage' onClick={() => navigate('/ManageAccount')}>Manage Accounts</button>
        </section>
    </div>
  )
}


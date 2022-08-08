import React from 'react'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import {useLogout} from "../../hooks/useLogout";
import {auth} from "../../firebase/config";


export default function Homepage() {

  const navigate = useNavigate();
  const { logout } = useLogout();
  const loggedInUser = auth.currentUser.email;

  return (
    <div className='home-container'>
        <div className='head-container'>
            <span>Avion Bank <i className="fa-solid fa-sack-dollar"></i></span>
            <div className='home-out'>
                <button className='button-home' onClick={() => navigate('/Homepage')}>Home</button>
                <button className='button-logout' onClick={logout}>Logout</button>
            </div>
        </div>
        <section className='home-body'>
            <div className='hello-user'></div>
            <div className='first-blank'></div>
            <div className='second-blank'> <br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Hello, {loggedInUser}!</div>
            <button className='deposit' onClick={() => navigate('/Deposit')}>Deposit <br/> <i className="fa-brands fa-dropbox"></i></button>
            <button className='withdraw' onClick={() => navigate('/Withdraw')}>Withdraw <br/> <i className="fa-solid fa-hand-holding-dollar"></i></button>
            <button className='transfer' onClick={() =>navigate('/Transfer')}>Transfer <br/><i className="fa-solid fa-money-bill-transfer"></i></button>
            <button className='search' onClick={() => navigate('/SearchAccount')}>Search Account<i className="fa-solid fa-person-circle-check"></i></button>
            <button className='view'>View Details <br/> <i className="fa-solid fa-circle-info"></i></button>
            <button className='manage' onClick={() => navigate('/ManageAccount')}>Manage Accounts <br/> <i className="fa-solid fa-list-check"></i></button>
        </section>
    </div>
  )
}


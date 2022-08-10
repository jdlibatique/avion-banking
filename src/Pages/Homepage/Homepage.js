import React from 'react'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import {useLogout} from "../../hooks/useLogout";
import {auth} from "../../firebase/config";
import Swal from "sweetalert2";


export default function Homepage() {

  const navigate = useNavigate();
  const { logout } = useLogout();
  const loggedInUser = auth.currentUser.email;

  const exit = () => {
    Swal.fire({
      title: 'Are you sure you want to exit?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
      } 
    })
  }

  return (
    <div className='home-container'>
        <div className='head-container'>
            <span> <p> Avion Bank <i class="fa-solid fa-sack-dollar"></i> </p></span>
            <div className='home-out'>
                <button className='button-home' onClick={() => navigate('/Homepage')}>Home</button>
                <button className='button-logout' onClick={exit}>Logout</button>
            </div>
        </div>
        <section className='home-body'>
            <div className='hello-user'></div>
            <div className='first-blank'></div>
            <div className='second-blank'> <br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Hello, {loggedInUser}!</div>
            <button className='deposit' onClick={() => navigate('/Deposit')}>Deposit <br/> <i class="fa-brands fa-dropbox"></i></button>
            <button className='withdraw' onClick={() => navigate('/Withdraw')}>Withdraw <br/> <i class="fa-solid fa-hand-holding-dollar"></i></button>
            <button className='transfer' onClick={() =>navigate('/Transfer')}>Transfer <br/><i class="fa-solid fa-money-bill-transfer"></i></button>
            <button className='search'>Search Account<i class="fa-solid fa-person-circle-check"></i></button>
            <button className='view'>View Details <br/> <i class="fa-solid fa-circle-info"></i></button>
            <button className='manage' onClick={() => navigate('/ManageAccount')}>Manage Accounts <br/> <i class="fa-solid fa-list-check"></i></button>
        </section>
    </div>
  )
}


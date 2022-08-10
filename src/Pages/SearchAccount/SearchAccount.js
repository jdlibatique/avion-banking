import React from 'react'
import './SearchAccount.css'
import { useNavigate } from 'react-router-dom'
import UserResult from '../SearchAccount/UserResult/UserResult'
import { useState } from 'react'
import {useLogout} from "../../hooks/useLogout";
import UserDetails from '../UserDetails/UserDetails'


function SearchAccount() {

  const navigate = useNavigate();
  const { logout } = useLogout();

  const [result, setResult] = useState(false);

  return (
    <div className='withdraw-container'>
        <div className='head-container'>
            <span>Avion Banking</span>
            <div className='home-out'>
                <button className='button-home' onClick={() => navigate('/Homepage')}>Home</button>
                <button className='button-logout' onClick={logout}>Logout</button>
            </div>
        </div>
        <div className='search-body'>
            <input className='button-account' type="number" name="name" placeholder="Account #"></input>
            <button className='button-search' onClick={() => {setResult(true)}}> Search <i className="fa-solid fa-magnifying-glass"></i> </button>
        </div>
         {result && <UserResult closeResult={setResult} />}
    </div>
  )
}

export default SearchAccount
import React from 'react'
import './UserDetails.css'

function UserDetails() {
  return (
    <>
    {/* <div className='user-container'>
        <span className='acc-num'>Account #: {}</span>
        <span className='bal'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Balance:</span>
        <span className='firt-last'>First Name: {} Last Name: {}</span>
        <span className='remain-bal'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{}</span>
    </div> */}

    <div className='details'>
          <ul className='top'>
            <li>Account Number:</li>
            <li>Balance</li>
          </ul>
          <ul className='bottom'>
            <li>FirstName: {} LastName: {}</li>
            <li>{}5</li>
          </ul>
         </div>
    </>
  )
}

export default UserDetails
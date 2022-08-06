import React from 'react'
import './UserDetails.css'

function UserDetails() {
  return (
    <>
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
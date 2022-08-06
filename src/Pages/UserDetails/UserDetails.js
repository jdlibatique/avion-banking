import React from 'react'
import './UserDetails.css'

function UserDetails() {
  return (
    <>
    <div className='user-container'>
        <span className='acc-num'>Account Number:</span>
        <span className='bal'>Balance:</span>
        <span className='firt-last'>First Name: {} Last Name: {}</span>
    </div>
    </>
  )
}

export default UserDetails
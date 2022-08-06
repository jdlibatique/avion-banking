import React from 'react'
import './UserDetails.css'

function UserDetails() {
  return (
    <>
    <div className='user-container'>
        <span className='acc-num'>Account #: {}</span>
        <span className='bal'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Balance:</span>
        <span className='firt-last'>First Name: {} Last Name: {}</span>
        <span className='remain-bal'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{}</span>
    </div>
    </>
  )
}

export default UserDetails
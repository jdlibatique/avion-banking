import React from 'react'
import './UserDetails.css'

function UserDetails(accounts) {
    return (
        <>
            {accounts.map((account) => (
                <div className='user-container'>
                    <span className='acc-num'>Account #: {account.id}</span>
                    <span className='bal'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Balance:</span>
                    <span className='firt-last'>First Name: {account.firstName} Last Name: {account.lastName}</span>
                    <span className='remain-bal'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{account.balance}</span>
                </div>
            ))}
        </>
    )
}

export default UserDetails
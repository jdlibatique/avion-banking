import React from 'react'
import './UserDetails.css'

function UserDetails(accounts) {
    return (
        <>

            {accounts.map((account) => (
                <div className='details'>
                    <ul className='top'>
                        <li>Account #: {account.id}</li>
                        <li>Balance</li>
                    </ul>
                    <ul className='bottom'>
                        <li>{account.firstName} {account.lastName}</li>
                        <li>{account.balance}</li>
                    </ul>
                </div>
            ))}
        </>
    )
}

export default UserDetails
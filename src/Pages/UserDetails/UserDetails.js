import React from 'react'
import './UserDetails.css'

function UserDetails(accounts) {
    return (
        <>
            <div className={"account-container"}>
                {accounts.map((account) => (
                    <div className='details' key={account.id}>
                        <ul className='top'>
                            <li>Account #: {account.accountNumber}</li>
                            <li>Balance</li>
                        </ul>
                        <ul className='bottom'>
                            <li>{account.displayName}</li>
                            <li>{account.balance}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}

export default UserDetails
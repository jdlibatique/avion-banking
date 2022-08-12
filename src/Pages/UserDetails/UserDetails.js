import React from 'react'
import './UserDetails.css'

function UserDetails(accounts) {
    return (
        <>
            <div className={"account-container"}>
                {accounts.map((account) => (
                    <div className='details' key={account.id}>
                        <ul className='top'>
                            <img src={account.displayPhotoURL} className={"manage-accounts-photo"} alt=""/>
                            <li>{account.displayName}</li>
                            <div>
                                <li>Account #: {account.accountNumber}</li>
                                <li>Balance {account.balance}</li>
                            </div>

                        </ul>
                        {/*<ul className='bottom'>*/}
                        
                        {/*</ul>*/}
                    </div>
                ))}
            </div>
        </>
    )
}

export default UserDetails
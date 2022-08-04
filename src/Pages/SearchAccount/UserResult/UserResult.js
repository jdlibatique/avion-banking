import React from 'react'
import { useState } from 'react'
import './UserResult.css'

function UserResult({closeResult}) {
  return (
    <>
    <div className='result-container'>
        <div className="result-items">
            <section className='info-result'>
                <span>Name:</span>
                <span>Account #:</span>
                <span>Balance</span>
            </section>
            <button onClick={() => {closeResult(false)}}>Exit</button>
        </div>
    </div>
    </>
  )
}

export default UserResult
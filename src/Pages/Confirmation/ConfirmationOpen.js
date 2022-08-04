import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ConfirmationOpen.css'
import { useState } from 'react'

function ConfirmationOpen({closeConfirmation}) {

    const [openConfirmation, setOpenConfirmation] = useState(false);

  return (
    <>
    <div className='confirm-container'>
            <div className='confirm-items'>
                <span>Depositing/Withdrawing/Transferring to Account # ?</span>
                <span>Amount:</span>
                <span>Is this correct?</span>
                <button>Confirm</button>
                <button onClick={() => {closeConfirmation(false)}}>Cancel</button>
            </div>
    </div>
    </>
  )
}

export default ConfirmationOpen
import React from 'react'
import Homepage from './Pages/Homepage/Homepage';
import Deposit from './Pages/Deposit/Deposit';
import Withdraw from './Pages/Withdraw/Withdraw';
import Transfer from './Pages/Transfer/Transfer';
import AfterConfirmation from './Pages/AfterConfirmation/AfterConfirmation';
import SearchAccount from './Pages/SearchAccount/SearchAccount';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() { 

  return (
    <div> 
      <Router>
        <Routes>
          <Route path='/Homepage' element={<Homepage/>}/> 
          <Route path='/Deposit' element={<Deposit/>}/>
          <Route path='/Withdraw' element={<Withdraw/>}/>
          <Route path='/Transfer' element={<Transfer/>}/>
          <Route path='/AfterConfirmation' element={<AfterConfirmation/>}/>
          <Route path='/SearchAccount' element={<SearchAccount/>}/>
        </Routes>
     </Router>
     
    </div>
  );
}

export default App; 

import React from 'react'
import Homepage from './Pages/Homepage/Homepage';
import Deposit from './Pages/Deposit/Deposit';
import Withdraw from './Pages/Withdraw/Withdraw';
import Transfer from './Pages/Transfer/Transfer';
import Confirmation from './Pages/Confirmation/Confirmation';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import LoginForm from "./components/LoginForm";


function App() { 

  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='/Homepage' element={<Homepage/>}/>
            <Route path='/Deposit' element={<Deposit/>}/>
            <Route path='/Withdraw' element={<Withdraw/>}/>
            <Route path='/Transfer' element={<Transfer/>}/>
            <Route path='/Confirmation' element={<Confirmation/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App; 

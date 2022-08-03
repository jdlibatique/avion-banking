import React from 'react'
import Homepage from './Pages/Homepage/Homepage';
import Deposit from './Pages/Deposit/Deposit';
import Withdraw from './Pages/Withdraw/Withdraw';
import Transfer from './Pages/Transfer/Transfer';
import Confirmation from './Pages/Confirmation/Confirmation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() { 

  return (
    <div className="App">
      {(user.password != "") ? (
        <div className="welcome">
          <h2>Welcome, &nbsp; <span>User!</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
        
      )}
    <div>
       
      <Router>
        <Routes>
          <Route path='/Homepage' element={<Homepage/>}/> 
          <Route path='/Deposit' element={<Deposit/>}/>
          <Route path='/Withdraw' element={<Withdraw/>}/>
          <Route path='/Transfer' element={<Transfer/>}/>
          <Route path='/Confirmation' element={<Confirmation/>}/>
        </Routes>
     </Router>
     
     </div>
    </div>
  );
}

export default App; 

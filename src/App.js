import React from 'react'
import Homepage from './Pages/Homepage/Homepage';
import Deposit from './Pages/Deposit/Deposit';
import Withdraw from './Pages/Withdraw/Withdraw';
import Transfer from './Pages/Transfer/Transfer';
import Confirmation from './Pages/Confirmation/Confirmation';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import LoginForm from "./components/LoginForm";
import {useAuthContext} from "./hooks/useAuthContext";


function App() {
    const {user, authIsReady} = useAuthContext();
    
    return (
        <div>
            {authIsReady && (
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={!user ? <LoginForm /> : <Navigate to="/Homepage" />}/>
                        <Route path='/Homepage' element={user ? <Homepage /> : <Navigate to="/" />}/>
                        <Route path='/Deposit' element={user ? <Deposit/> : <Navigate to="/" />}/>
                        <Route path='/Withdraw' element={user ? <Withdraw/> : <Navigate to="/" />}/>
                        <Route path='/Transfer' element={user ? <Transfer/> : <Navigate to="/" />}/>
                        <Route path='/Confirmation' element={user ? <Confirmation/> : <Navigate to="/" />}/>
                    </Routes>
                </BrowserRouter>
            )}
        </div>
    );
}

export default App;

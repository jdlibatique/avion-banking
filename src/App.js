import React from 'react'
import Homepage from './Pages/Homepage/Homepage';
import Deposit from './Pages/Deposit/Deposit';
import Withdraw from './Pages/Withdraw/Withdraw';
import Transfer from './Pages/Transfer/Transfer';
import Confirmation from './Pages/Confirmation/Confirmation';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import LoginForm from "./Pages/LoginForm/LoginForm";
import {useAuthContext} from "./hooks/useAuthContext";
import SignupForm from "./components/SignupForm";
import ManageAccount from "./Pages/ManageAccounts/ManageAccount";
import SearchAccount from "./Pages/SearchAccount/SearchAccount";


function App() {
    const {user, authIsReady} = useAuthContext();
    
    return (
        <div>
            {authIsReady && (
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={!user ? <LoginForm /> : <Navigate to="/Homepage" />}/>
                        <Route path='/Signup' element={!user ? <SignupForm /> : <Navigate to="/Homepage" />}/>
                        <Route path='/Homepage' element={user ? <Homepage /> : <Navigate to="/" />}/>
                        <Route path='/Deposit' element={user ? <Deposit/> : <Navigate to="/" />}/>
                        <Route path='/Withdraw' element={user ? <Withdraw/> : <Navigate to="/" />}/>
                        <Route path='/Transfer' element={user ? <Transfer/> : <Navigate to="/" />}/>
                        <Route path='/Confirmation' element={user ? <Confirmation/> : <Navigate to="/" />}/>
                        <Route path='/ManageAccount' element={user ? <ManageAccount/> : <Navigate to="/" />}/>
                        <Route path='/SearchAccount' element={user ? <SearchAccount/> : <Navigate to="/" />}/>
                    </Routes>
                </BrowserRouter>
            )}
        </div>
    );
}

export default App;

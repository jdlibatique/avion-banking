import React from 'react'
import Homepage from './Pages/Homepage/Homepage';
import Deposit from './Pages/Deposit/Deposit';
import Withdraw from './Pages/Withdraw/Withdraw';
import Transfer from './Pages/Transfer/Transfer';
import Confirmation from './Pages/Confirmation/Confirmation';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import LoginForm from "./Pages/LoginForm/LoginForm";
import {useAuthContext} from "./hooks/useAuthContext";
import SignupForm from "./Pages/SignupPage/SignupForm";
import ManageAccount from "./Pages/ManageAccounts/ManageAccount";
import SearchAccount from "./Pages/SearchAccount/SearchAccount";
import { auth } from "./firebase/config";
import {Notes} from "./Pages/Notes/Notes";


function App() {
    const {user, authIsReady} = useAuthContext();
    
    return (
        <div>
            {authIsReady && (
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={!user ? <LoginForm /> : auth.currentUser.email === 'admin@avionbanking.com' ?  <Navigate to="/Homepage" /> : <Navigate to="/Dashboard" />}/>
                        <Route path='/SignupForm' element={!user ? <SignupForm /> : <Navigate to="/Homepage" />}/>
                        <Route path='/Homepage' element={user ? <Homepage /> : <Navigate to="/" />}/>
                        <Route path='/Deposit' element={user ? <Deposit/> : <Navigate to="/" />}/>
                        <Route path='/Withdraw' element={user ? <Withdraw/> : <Navigate to="/" />}/>
                        <Route path='/Transfer' element={user ? <Transfer/> : <Navigate to="/" />}/>
                        <Route path='/Confirmation' element={user ? <Confirmation/> : <Navigate to="/" />}/>
                        <Route path='/ManageAccount' element={user ? <ManageAccount/> : <Navigate to="/" />}/>
                        <Route path='/SearchAccount' element={user ? <SearchAccount/> : <Navigate to="/" />}/>
                        <Route path='/Dashboard' element={user ? <SearchAccount/> : <Navigate to="/" />}/>
                        <Route path='/Notes' element={user ? <Notes/> : <Navigate to="/" />}/>
                    </Routes>
                </BrowserRouter>
            )}
        </div>
    );
}

export default App;

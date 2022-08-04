import React, {useState} from 'react'
import {useLogin} from "../hooks/useLogin";
import {useSignup} from "../hooks/useSignup";
import {useNavigate} from "react-router-dom";


function SignupForm({}) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {error, signup} = useSignup();
    const navigate = useNavigate();
    
    const submitHandler = e => {
        e.preventDefault();
        signup(email, password);
    }
    
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Bankplication</h2>
                    {/*{(error != "") ? (<div className='error'>{error}</div>) : ""}*/}
                    <div className="form-group">
                        <label htmlFor="email">Username:</label>
                        <input type="text" name='username' id='username' onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit">Login</button>
                    <button onClick={() => navigate("/SignupForm")}>Sign Up</button>
                </div>
            </form>
        </>
    
    )
}

export default SignupForm
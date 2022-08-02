import React, {useState} from 'react'
import {useLogin} from "../hooks/useLogin";
import {useNavigate} from "react-router-dom";

function LoginForm() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {error, login} = useLogin();
    
    let navigate = useNavigate();
    
    const submitHandler = e => {
        e.preventDefault();
        login(email, password)
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Bankplication</h2>
                <div className="form-group">
                    <label htmlFor="email">Username:</label>
                    <input type="text" name='username' id='username' onChange={e => setEmail(e.target.value)} value={email} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' onChange={e => setPassword(e.target.value)} value={password} required/>
                </div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm
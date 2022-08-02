import React, {useState} from 'react'
import {useLogin} from "../hooks/useLogin";

function LoginForm({}) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {error, login} = useLogin();
    
    const submitHandler = e => {
        e.preventDefault();
        login(email, password)
    }
    
    return (
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
                <input type="submit"/>
            </div>
        </form>
    )
}

export default LoginForm
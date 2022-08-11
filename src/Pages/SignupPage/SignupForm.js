import React, {useState} from 'react'
import {useLogin} from "../../hooks/useLogin";
import {useSignup} from "../../hooks/useSignup";
import {useNavigate} from "react-router-dom";


function SignupForm({}) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [displayPhoto, setDisplayPhoto] = useState(null);
    const [displayPhotoError, setDisplayPhotoError] = useState(null);
    const {error, signup} = useSignup();
    const navigate = useNavigate();
    
    const submitHandler = e => {
        e.preventDefault();
        signup(email, password, displayName, displayPhoto);
    }
    
    const handleFileChange = (evt) => {
        setDisplayPhoto(null);
        let selected = evt.target.files[0];
        console.log(selected);
        
        if (!selected) {
            setDisplayPhotoError("Please select a file for your display photo!")
            return;
        }
        if ((!selected.type.includes('image'))) {
            setDisplayPhotoError("Please select an image file! No audio files please!")
            return;
        }
        if (selected.size > 100000) {
            setDisplayPhotoError("Please select an image file less than 100KB");
            return;
        }
        
        setDisplayPhotoError(null);
        setDisplayPhoto(selected);
        console.log("Valid photo selected");
    }
    
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Avion Banking</h2>
                    {/*{(error != "") ? (<div className='error'>{error}</div>) : ""}*/}
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name='username' id='username' onChange={e => setEmail(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' onChange={e => setPassword(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="displayName">Display Name</label>
                        <input type="displayName" name='displayName' id='displayName' onChange={e => setDisplayName(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="displayPhoto">Display Photo</label>
                        <input type="file" name='displayPhoto' id='displayPhoto' onChange={handleFileChange} required/>
                        {displayPhotoError && <div className={"error"}>{displayPhotoError}</div>}
                    </div>
                    <button type="submit">Login</button>
                    <button onClick={submitHandler}>Sign Up</button>
                    {error && <div className={"error"}>{error}</div>}
                </div>
            </form>
        </>
    
    )
}

export default SignupForm
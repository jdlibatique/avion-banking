import React, { useState }from 'react'
import LoginForm from './components/LoginForm';

function App() {

  const adminUser = {
    username: "admin",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", username: "", password: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details)
    if(details.name != "" && details.username == adminUser.username && details.password == adminUser.password) {
      console.log("Logged In");
      setUser({
        name: details.name,
        username: details.username,
        password: details.password
      })
    } else {
      setError('Please enter your name')
    }
    
    
    if (details.username == "" && details.password == "") {
      setError("Please enter your username and password")
    } else if (details.username != adminUser.username && details.password != adminUser.password) {
      setError("Username or Password do not match!")
    }
}

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", username: "", password: "" });
  }

  return (
    <div className="App">
      {(user.password != "") ? (
        <div className="welcome">
          <h2>Welcome, &nbsp; <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
        
      )}
    </div>
  );
}

export default App;

import React, { useState }from 'react'
import LoginForm from './components/LoginForm';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() { 

//   const adminUser = {
//     username: "admin",
//     password: "admin123"
//   }
//
//   const [user, setUser] = useState({username: "", password: ""});
//   const [error, setError] = useState("");
//
//   const Login = details => {
//     console.log(details)
//     if(details.username == adminUser.username && details.password == adminUser.password) {
//       console.log("Logged In");
//       setUser({
//         username: details.username,
//         password: details.password
//       })
//     } else if (details.username != adminUser.username && details.password != adminUser.password) {
//       setError("Username or Password do not match!")
//     }
// }
//
//   const Logout = () => {
//     console.log("Logout");
//     setUser({username: "", password: ""});
//   }

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<LoginForm/>}></Route>
            </Routes>
        </BrowserRouter>
      {/*{(user.password != "") ? (*/}
      {/*  <div className="welcome">*/}
      {/*    <h2>Welcome, &nbsp; <span>User!</span></h2>*/}
      {/*    <button onClick={Logout}>Logout</button>*/}
      {/*  </div>*/}
      {/*) : (*/}
      {/*  <LoginForm Login={Login} error={error}/>*/}
      {/*  */}
      {/*)}*/}
    </div>
  );
}

export default App;

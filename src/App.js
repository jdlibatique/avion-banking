import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginForm from "./components/LoginForm";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<LoginForm />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;

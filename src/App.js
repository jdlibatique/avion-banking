
import LoginForm from './components/LoginForm';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<LoginForm/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

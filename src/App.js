import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Gallary from './Gallary';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallary" element={<Gallary />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

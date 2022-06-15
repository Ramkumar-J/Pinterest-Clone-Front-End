import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import Signup from './Signup';
import Login from './Login';
import Pin from './Pin';
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
        <div className="container-fluid">
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createpin" element={<Pin />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

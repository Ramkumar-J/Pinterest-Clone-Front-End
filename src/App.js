import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import Signup from './Signup';
import Login from './Login';
import Gallary from './Gallary';
import Pin from './Pin';
import Navbar from './Navbar';


function App() {
  return (
    <BrowserRouter>
     <div id="wrapper" className="home-bg">
        <Navbar></Navbar>
        <div className="container-fluid">
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Gallary />} />
        <Route path="/createpin" element={<Pin />} />
        </Routes>
      </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

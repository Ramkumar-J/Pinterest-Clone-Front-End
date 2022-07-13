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
import ViewPin from './ViewPin';
import Navbar from './Navbar';
import Profile from './Profile';


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
        <div className="container-fluid p-0">
        <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createpin" element={<Pin />} />
        <Route path="/viewpin/:id" element={<ViewPin />} />
        <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

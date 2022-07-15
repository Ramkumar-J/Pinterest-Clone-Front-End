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
import SavedPin from './SavedPin';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [Pins, setPins] = useState([]);
  const [savepin,setSavepin] = useState([]);
  useEffect(() => {
    async function getPin() {
      try {
        let pinData = await axios.get("https://pinterest-clone-nodeapp.herokuapp.com/home", {
          headers: {
            Authorization: window.localStorage.getItem("pinteresttoken"),
          },
        });
        console.log(pinData);
        setPins(pinData.data);
      } catch (error) {
        // console.log(error);
        alert("something went wrong");
      }
    }
    getPin();
  }, []);

let Addsavedpin= (pin) => {
   setSavepin([...savepin,pin]);
}

let Removesavedpin = (pin) => {
  let index=savepin.findIndex((e) => pin._id === e._id);
  savepin.splice(index,1);
  setSavepin([...savepin]);
}

// useEffect(() => {
//   let data=localStorage.getItem("savepin");
//   if(data) {
//     setSavepin(JSON.parse(data));
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem("savepin", JSON.stringify(savepin));
// });
  return (
    <BrowserRouter>
    <Navbar Pins={Pins}></Navbar>
        <div className="container-fluid p-0">
        <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home Pins={Pins} Addsavedpin={Addsavedpin} Savedpins={savepin}/>} />
        <Route path="/createpin" element={<Pin />} />
        <Route path="/savedpins" element={<SavedPin Savedpins={savepin} Removesavedpin={Removesavedpin}/>} />
        <Route path="/viewpin/:id" element={<ViewPin Addsavedpin={Addsavedpin}/>} />
        <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import ViewPin from './ViewPin';
import Navbar from './Navbar';
import Profile from './Pages/Profile';
import SavedPin from './SavedPin';
import CreatePin from './Pages/CreatePin';
import Today from './Pages/Today';
import TodayPin from './TodayPin';
import { PinProvider } from './PinContext';



function App() {
  const savedPins=JSON.parse(window.localStorage.getItem("savedpins") || "[]")
  const [pins, setPins] = useState([]);
  const [savepin,setSavepin] = useState(savedPins);
  // useEffect(() => {
  //   async function getPin() {
  //     try {
  //       let pinData = await axios.get("https://pinterest-clone-nodeapp.herokuapp.com/home", {
  //         headers: {
  //           Authorization: window.localStorage.getItem("pinteresttoken"),
  //         },
  //       });
  //       console.log(pinData);
  //       setPins(pinData.data);
  //     } catch (error) {
  //       alert("something went wrong");
  //     }
  //   }
  //   getPin();
  // }, []);

// let Addsavedpin= (pin) => {
//    setSavepin([...savepin,pin]);
// }

// let Removesavedpin = (pin) => {
//   let index=savepin.findIndex((e) => pin._id === e._id);
//   savepin.splice(index,1);
//   setSavepin([...savepin]);
// }

useEffect(() => {
  window.localStorage.setItem("savedpins", JSON.stringify(savepin))
},[savepin])

  return (
    <PinProvider value={{pins,setPins,savepin,setSavepin}}>
    <BrowserRouter>
    <Navbar></Navbar>
        <div className="container-fluid p-0">
        <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/today" element={<Today />} />
        <Route path="/createpin" element={<CreatePin />} />
        <Route path="/savedpins" element={<SavedPin/>} />
        <Route path="/viewpin/:id" element={<ViewPin/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todaypin" element={<TodayPin />} />
        </Routes>
      </div>
    </BrowserRouter>
    </PinProvider>
  );
}

export default App;

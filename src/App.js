import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ViewPin from "./Components/ViewPin";
import Navbar from "./Components/Navbar";
import Profile from "./Pages/Profile";
import SavedPin from "./Components/SavedPin";
import CreatePin from "./Pages/CreatePin";
import Today from "./Pages/Today";
import TodayPin from "./Components/TodayPin";
import { PinProvider } from "./Context/PinContext";
import LandingHeader from "./Components/LandingHeader";
import LandingPage from "./Components/LandingPage";

function App() {
  const savedPins = JSON.parse(
    window.localStorage.getItem("savedpins") || "[]"
  );
  const [pins, setPins] = useState([]);
  const [savepin, setSavepin] = useState(savedPins);

  useEffect(() => {
    window.localStorage.setItem("savedpins", JSON.stringify(savepin));
  }, [savepin]);

  return (
    <PinProvider value={{ pins, setPins, savepin, setSavepin }}>
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        <div className="container-fluid p-0">
          <Routes>
          <Route path="/" element={<LandingPage />} />
            {/* <Route path="/" element={<Signup />} /> */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/today" element={<Today />} />
            <Route path="/createpin" element={<CreatePin />} />
            <Route path="/savedpins" element={<SavedPin />} />
            <Route path="/viewpin/:id" element={<ViewPin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/todaypin" element={<TodayPin />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PinProvider>
  );
}

export default App;

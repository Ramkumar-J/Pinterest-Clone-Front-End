import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Pin from "../Components/Pin";
import PinContext from "../Context/PinContext";

function Home() {
  const { pins, setPins, savepin, setSavepin } = useContext(PinContext);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    async function getPin() {
      try {
        let pinData = await axios.get(
          "https://pinterest-clone-backend.vercel.app/home",
          {
            headers: {
              Authorization: window.localStorage.getItem("pinteresttoken"),
            },
          }
        );
        // console.log(pinData);
        setPins(pinData.data);
      } catch (error) {
        alert("something went wrong");
      }
    }
    getPin();
  }, []);
  let Addsavedpin = (pin) => {
    setSavepin([...savepin, pin]);
  };

  return (
    <>
      <Navbar></Navbar>
      {pins.length > 0 ? (
        <div className="container-fluid">
          <input
            className="form-control rounded-pill bg-light w-50 mx-auto"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></input>
          <div className="gallary mt-4">
            {pins
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
                  return val;
              })
              .map((pin) => {
                return (
                  <Pin
                    pin={pin}
                    Addsavedpin={Addsavedpin}
                    Savedpins={savepin}
                  ></Pin>
                );
              })}
          </div>
        </div>
      ) : (
        <div className="text-center mt-5">
          <div className="spinner-border" role="status"></div>
          <br></br>
          <p className="fs-3 fw-bolder mb-0">We're adding new ideas to your</p>
          <p className="fs-3 fw-bolder">home feed!</p>
        </div>
      )}
      <i className="bi bi-question question-icon"></i>
    </>
  );
}
export default Home;

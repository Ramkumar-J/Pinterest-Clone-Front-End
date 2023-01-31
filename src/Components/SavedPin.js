import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PinContext from "../Context/PinContext";
import Navbar from "./Navbar";

function SavedPin() {
  const {savepin,setSavepin} = useContext(PinContext);
  let Removesavedpin = (pin) => {
    let index=savepin.findIndex((e) => pin._id === e._id);
    savepin.splice(index,1);
    setSavepin([...savepin]);
  }
  return (
    <>
    <Navbar></Navbar>
    <section className="container">
      <h1 className="text-primary text-center fw-bold mt-3">Saved Pins</h1>
      <div class="gallary mt-4">
        {savepin.map((savedpin) => {
          return (
            <div class="pin-container">
            <div class="pin">
              <div class="pin-image-container">
              <Link to={`/viewpin/${savedpin._id}`}>
                <img class="pin-image" src={savedpin.image} alt="Pin Image" />
                </Link>
                </div>
                <div class="pin-content">
                  <a href={savedpin.image} target="_blank" download>
              <i class="bi bi-arrow-up-right me-5 rounded-circle pin-icon"></i>
            </a>
                  <Link to={`/viewpin/${savedpin._id}`}>
                    <i class="bi bi-eye rounded-circle pin-icon"></i>
                  </Link>
                </div>
              <button
                class="btn btn-danger rounded-pill pin-button"
                onClick={() => Removesavedpin(savedpin)}
              >
                Unsave
              </button>
              </div>
              {/* <div className="pin-info">
              <h5 className="mt-1 ms-3 fw-bolder">{savedpin.title}</h5>
              <img
          class="img-fluid me-2 rounded-circle user-image"
          src="./assets/home_pin_logo.jpg"
          height={30}
          width={30}
        ></img>
              <span>{savedpin.about}</span>
              </div> */}
            </div>
          );
        })}
      </div>
    </section>
    <i className="bi bi-question question-icon"></i>
    </>
  );
}

export default SavedPin;

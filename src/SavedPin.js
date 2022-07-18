import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SavedPin(props) {
  return (
    <div className="container">
      <h1 className="text-primary text-center fw-bold mt-3">Saved Pins</h1>
      <div class="gallary mt-4">
        {props.Savedpins.map((savedpin) => {
          return (
            <div class="pin">
              <div class="image-container">
                <img class="pin-image" src={savedpin.image} alt="Image" />
                <div class="pin-content">
                  {/* <a href={savedpin.image} download><img class="pin-icon rounded-circle p-1" src="https://img.icons8.com/external-ayo-icons-royyan-wijaya/25/external-arrow-arrow-line-ayo-icons-royyan-wijaya-2.png" alt=""/></a> */}
                  <Link to={`/viewpin/${savedpin._id}`}>
                    <img
                      class="pin-icon rounded-circle p-1"
                      src="https://img.icons8.com/external-icongeek26-outline-icongeek26/25/external-view-graphic-design-icongeek26-outline-icongeek26.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <button
                class="btn btn-danger rounded-pill pin-button"
                onClick={() => props.Removesavedpin(savedpin)}
              >
                Unsave
              </button>
              <h5 className="mt-1 fw-bolder">{savedpin.title}</h5>
              <img
                class="img-fluid me-2 user-image"
                src="https://i.pinimg.com/75x75_RS/e9/f7/e1/e9f7e101e3b7484d53b2b4d5a6004740.jpg"
              ></img>
              <span>{savedpin.about}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SavedPin;

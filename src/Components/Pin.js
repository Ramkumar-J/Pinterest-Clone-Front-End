import React from "react";
import { Link } from "react-router-dom";

function Pin(props){
    return(
        <div class="pin-container">
          <div class="pin">
        <div class="pin-image-container">
        <Link to={`/viewpin/${props.pin._id}`}>
          <img
            class="bg-danger pin-image"
            src={props.pin.image}
            alt="Pin Image"
          />
          </Link>
          </div>
          <div class="pin-icon-container">
            <a href={props.pin.image} download>
              <i class="bi bi-arrow-up-right me-5 rounded-circle pin-icon"></i>
            </a>
            <Link to={`/viewpin/${props.pin._id}`}>
              <i class="bi bi-eye rounded-circle pin-icon"></i>
            </Link>
            <button
          class="btn btn-danger rounded-pill pin-button"
          onClick={() => props.Addsavedpin(props.pin)}
          disabled={props.Savedpins.some(
            (obj) => obj._id === props.pin._id
          )}
        >
          Save
        </button>
          </div>
        </div>
        <div className="pin-info">
        <h5 className="mt-1 ms-3 fw-bolder">{props.pin.title}</h5>
        </div>
        {/* <img
          class="img-fluid me-2 rounded-circle user-image"
          src="./assets/home_pin_logo.jpg"
          height={30}
          width={30}
        ></img>
        <span>{props.pin.about}</span> */}
      </div>
    )
}

export default Pin;
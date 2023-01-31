import React from "react";
import { Link } from "react-router-dom";

function Pin(props) {
  return (
    <section className="pin-container">
      <div className="pin">
        <div className="pin-image-container">
          <Link to={`/viewpin/${props.pin._id}`}>
            <img
              className="bg-danger pin-image"
              src={props.pin.image}
              alt="Pin Image"
            />
          </Link>
        </div>
        <div className="pin-icon-container">
          <a href={props.pin.image} target="_blank" download>
            <i className="bi bi-arrow-up-right me-5 rounded-circle pin-icon"></i>
          </a>
          <Link to={`/viewpin/${props.pin._id}`}>
            <i className="bi bi-eye rounded-circle pin-icon"></i>
          </Link>
          <button
            className="btn btn-danger rounded-pill pin-button"
            onClick={() => props.Addsavedpin(props.pin)}
            disabled={props.Savedpins.some((obj) => obj._id === props.pin._id)}
          >
            Save
          </button>
        </div>
      </div>
      {/* <div classNameName="pin-info">
        <h5 classNameName="mt-1 ms-3 fw-bolder">{props.pin.title}</h5>
        <img
          className="img-fluid me-2 rounded-circle user-image"
          src="./assets/home_pin_logo.jpg"
          height={30}
          width={30}
        ></img>
        <span>{props.pin.about}</span>
         </div> */}
    </section>
  );
}

export default Pin;

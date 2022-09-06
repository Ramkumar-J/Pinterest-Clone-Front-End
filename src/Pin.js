import React from "react";
import { Link } from "react-router-dom";

function Pin(props){
    return(
        <div class="pin">
        <div class="image-container">
          <img
            class="bg-danger pin-image"
            src={props.pin.image}
            alt="Image"
          />
          <div class="pin-content">
            <a href={props.pin.image} download>
              <img
                class="me-5 rounded-circle p-1 pin-icon"
                src="https://img.icons8.com/external-ayo-icons-royyan-wijaya/25/external-arrow-arrow-line-ayo-icons-royyan-wijaya-2.png"
                alt=""
              />
            </a>
            <Link to={`/viewpin/${props.pin._id}`}>
              <img
                class="rounded-circle p-1 pin-icon"
                src="https://img.icons8.com/external-icongeek26-outline-icongeek26/25/external-view-graphic-design-icongeek26-outline-icongeek26.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <button
          class="btn btn-danger rounded-pill pin-button"
          onClick={() => props.Addsavedpin(props.pin)}
          disabled={props.Savedpins.some(
            (obj) => obj._id === props.pin._id
          )}
        >
          Save
        </button>
        <h5 className="mt-1 fw-bolder">{props.pin.title}</h5>
        <img
          class="img-fluid me-2 user-image"
          src="https://i.pinimg.com/75x75_RS/e9/f7/e1/e9f7e101e3b7484d53b2b4d5a6004740.jpg"
        ></img>
        <span>{props.pin.about}</span>
      </div>
    )
}

export default Pin;
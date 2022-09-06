import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
function Profile() {
  return (
    <div className="container p-0 profile">
      <img
        className="img-fluid mt-0 mb-0 bg-secondary mx-auto profile-cover"
        src="assets/Profile-cover.jpg"
        alt="profile cover photo"
      ></img>
      <img
        className="img-fluid user-pic"
        src="assets/Profile-picture.png"
      ></img>

      <h2 className="fw-bolder mt-2">Ramkumar</h2>
      <p className="mt-2">@ramrk12</p>
      <p className="mb-0 fs-5">10 Following</p>
      {/* <button className="btn bg-secondary bg-opacity-25 rounded-pill mx-auto text-dark fw-bolder p-2">Edit Profile</button> */}
      {/* <p className=" mt-2 fs-5 fw-bolder text-decoration-underline profile-stick"><Link to="/home">Created Pins</Link></p> */}
      <p className=" mt-2 fs-5 fw-bolder text-decoration-underline profile-stick">
        <Link to="/savedpins">Saved Pins</Link>
      </p>
    </div>
  );
}

export default Profile;

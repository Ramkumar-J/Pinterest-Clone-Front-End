import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Profile() {
  return (
    <>
    <Navbar></Navbar>
    <div className="container p-0 profile">
      {/* <img
        className="img-fluid mt-0 mb-0 bg-secondary mx-auto profile-cover"
        src="assets/Profile-cover.jpg"
        alt="profile cover photo"
      ></img>
      <img
        className="img-fluid user-pic"
        src="assets/Profile-picture.png"
      ></img> */}
      <h1 className="username-pic">R</h1>
      <h2 className="fw-bolder mt-2">Ramkumar</h2>
      <p className="mt-2">@ramrk12</p>
      <p className="mb-0 fs-5">10 Following</p>
      <div className="profile-btn-area">
      <button className="profile-btn">Share</button>
      <button className="profile-btn">Edit Profile</button>
      </div>
      <p className=" mt-2 fs-5 fw-bolder text-decoration-underline profile-stick">
        <Link to="/savedpins">Saved Pins</Link>
      </p>
    </div>
    </>
  );
}

export default Profile;

import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
function Profile() {
  return (
    <div className="container p-0 profile">
      <img
        className="img-fluid mt-0 mb-0  mx-auto profile-cover"
        src="https://media.istockphoto.com/photos/pink-sunset-picture-id1139149089?b=1&k=20&m=1139149089&s=170667a&w=0&h=LcJIu-j_k0mz6ItmKawPuoRiBmuSivvGAEHkf98cfdQ="
        alt="profile cover photo"
      ></img>
      <img
        class="img-fluid user-pic"
        src="https://img.icons8.com/fluency/100/test-account.png"
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

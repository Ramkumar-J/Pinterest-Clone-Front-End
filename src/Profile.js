import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
function Profile(){
    return(
        <div className="container d-flex justify-content-center flex-column">
            {/* <div className="row mt-3">
                <h1 className="fw-bolder text-primary font-monospace text-center">Profile</h1>
            </div> */}
            {/* <div className="row mt-3">
            <img className="img-fluid mt-3 profile-cover" src="https://i.pinimg.com/originals/30/5c/5a/305c5a457807ba421ed67495c93198d3.jpg" alt="profile cover photo"></img>
                </div> */}
           {/* <img className="img-fluid mt-3 profile-cover" src="https://i.pinimg.com/originals/30/5c/5a/305c5a457807ba421ed67495c93198d3.jpg" alt="profile cover photo"></img> */}
           {/* <div className="row mt-5"> */}
                <img
                    class="rounded-circle mt-5 user-pic"
                    src="https://img.icons8.com/fluency/344/user-male-circle.png"
                  ></img>
                  <h2 className="fw-bolder mt-2 text-center">Ramkumar</h2>
                  <p className="mt-2 text-center">@ramrk12</p>
                  <p className="text-center fs-5">10 Following</p>
                  <button className="btn bg-secondary bg-opacity-25 rounded-pill mx-auto text-dark fw-bolder p-2">Edit Profile</button>
                  <p className="text-center mt-5 fs-5 fw-bolder text-decoration-underline profile-stick"><Link to="/home">Created Pins</Link></p>
                  <p className="text-center mt-2 fs-5 fw-bolder text-decoration-underline profile-stick"><Link to="/savedpins">Saved Pins</Link></p>
                    {/* <Link className="text-dark" to="/home">Created Pins</Link>  */}
                  {/* <a className="text-dark ms-3" href="#"><span>Saved</span></a> */}
                  {/* </p> */}
                  {/* <Home></Home> */}
            {/* </div> */}
            {/* <div className="row mt-3">
                <h1 className="fw-bolder text-primary font-monospace">Profile</h1>
            </div>
            <div className="row mt-3">
                <img className="w-50 h-50 profile-cover" src="https://i.pinimg.com/originals/30/5c/5a/305c5a457807ba421ed67495c93198d3.jpg" alt="profile cover photo"></img>
                </div>
                <div className="row mt-3">
                <img
                    class="me-2 rounded-circle"
                    src="https://i.pinimg.com/75x75_RS/e9/f7/e1/e9f7e101e3b7484d53b2b4d5a6004740.jpg"
                  ></img>
            </div>     */}
            
        </div>
    )
}

export default Profile;
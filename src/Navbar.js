import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const[searchTerm,setSearchTerm]=useState([]);
  let navigate=useNavigate();
  let handleLogout=() => {
    window.localStorage.removeItem("pinteresttoken");
    navigate("/");
  }
  // const[Pins,setPins]=useState([]);
  //   useEffect(() => {
  //       async function getPin(){
  //           try {
  //               let pinData=await axios.get("https://pinterest-clone-nodeapp.herokuapp.com/home",{
  //                   headers:{
  //                       Authorization:window.localStorage.getItem("pinteresttoken")
  //                   }
  //               });
                
  //           console.log(pinData);
  //           setPins(pinData.data);
  //             } catch (error) {
  //               console.log(error);
  //               alert("something went wrong");
  //             }
  //       }
  //       getPin();
  //     },[])
  return (
    <header class="mt-2">
      <nav class="navbar navbar-expand-lg navbar-light text-dark fw-bolder bg-transparant">
        <Link class="navbar-brand ms-4 icon-effect" to="/home">
          <img src="https://img.icons8.com/color/40/pinterest--v1.png"></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavBar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavBar">
          <ul class="navbar-nav fw-bolder fs-6">
            <li class="nav-item ">
              <Link
                class="nav-link text-dark rounded-pill page-effect"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li class="nav-item dropdown ms-2">
              <a
                class="nav-link dropdown-toggle text-dark rounded-pill page-effect"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                id="navBarDropdown"
                aria-expanded="false"
              >
                Create
              </a>
              <ul class="dropdown-menu  fs-6" aria-labelledby="navBarDropdown">
                <li>
                  <Link class="dropdown-item text-dark fw-bolder" to="/createpin">
                    Create Pin
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex ms-3 icon-effect box">
            <input
              class="form-control rounded-pill bg-light"
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            ></input>
            {/* {
              props.Pins.filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase()).toArray())
                return val;
              })
            } */}
          </form>
          <ul class="navbar-nav ms-auto me-2">
          <li class="nav-item me-1 icon-effect">
              <Link class="nav-link" to="/profile">
                <i class="bi bi-person-circle fs-4"></i>
              </Link>
            </li>
          <li className="nav-item ms-2">
              <Link
                className="nav-link bg-success rounded-pill text-white p-2"
                to="/login"
              >
                Log in
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link bg-secondary bg-opacity-25 rounded-pill text-dark p-2"
                to="/signup"
              >
                Sign up
              </Link>
            </li>
            {/* <li class="nav-item me-1 icon-effect">
              <a class="nav-link" href="#">
                <i class="bi bi-bell-fill fs-4"></i>
              </a>
            </li>
            <li class="nav-item me-1 icon-effect">
              <a class="nav-link" href="#">
                <i class="bi bi-chat-dots-fill fs-4"></i>
              </a>
            </li> */}
            {/* <li class="nav-item me-1 icon-effect">
              <Link class="nav-link" to="/profile">
                <i class="bi bi-person-circle fs-4"></i>
              </Link>
            </li> */}
            <li className="nav-item">
              <button
                className="btn btn-danger btn-sm rounded-pill text-white p-2 fs-6 ms-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    
  );
}
export default Navbar;

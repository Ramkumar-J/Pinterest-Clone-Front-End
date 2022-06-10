import React from "react";
import { Link } from "react-router-dom";
import Gallary from "./Gallary";
function Home() {
  return (
    <header class="mt-2">
      <nav class="navbar navbar-expand-lg navbar-light text-dark fw-bolder bg-transparant">
        <a class="navbar-brand ms-4 icon-effect">
          <img src="./assets/icons8-pinterest-color-32.png"></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="mainNavBar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavBar">
          <ul class="navbar-nav fw-bolder fs-6">
            <li class="nav-item ">
              <Link
                class="nav-link text-white rounded-pill page-effect active"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li class="nav-item ms-2">
              <a class="nav-link text-dark page-effect" href="#">
                Today
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-dark page-effect"
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
                  <a class="dropdown-item text-dark fw-bolder" href="#">
                    Create Idea Pin
                  </a>
                </li>
                <li>
                  <a class="dropdown-item text-dark fw-bolder" href="#">
                    Create Pin
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex ms-3 icon-effect box">
            {/* <i class="bi bi-search"></i> */}
            <input
              class="form-control rounded-pill bg-light"
              type="text"
              placeholder="Search"
            ></input>
          </form>
          <ul class="navbar-nav ms-auto me-3">
            <li class="nav-item me-2 icon-effect">
              <a class="nav-link" href="#">
                <i class="bi bi-bell-fill fs-4"></i>
              </a>
            </li>
            <li class="nav-item me-2 icon-effect">
              <a class="nav-link" href="#">
                <i class="bi bi-chat-dots-fill fs-4"></i>
              </a>
            </li>
            <li class="nav-item me-2 icon-effect">
              <a class="nav-link" href="#">
                <i class="bi bi-person-circle fs-4"></i>
              </a>
            </li>
            <li class="nav-item me-2 icon-effect">
              <a class="nav-link mt-2" href="#">
                <i class="bi bi-chevron-down fs-6"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Gallary></Gallary>
    </header>
    
  );
}
export default Home;

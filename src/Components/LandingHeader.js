import React from "react";
import { Link } from "react-router-dom";
function LandingHeader() {
  return (
    <header className="mt-2 bg-transparant">
      <nav className="navbar navbar-expand-md navbar-light">
        <Link className="navbar-brand text-danger ms-4 fw-bolder" to="/">
          <img
            src="./assets/icons8-pinterest-color-32.png"
            alt="Pinterest Logo"
          ></img>
          Pinterest
        </Link>
        <button
          className="navbar-toggler text-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#subNavBar"
        >
          <span className="navbar-toggler-icon text-primary"></span>
        </button>
        <div className="collapse navbar-collapse" id="subNavBar">
          <ul className="navbar-nav ms-auto fw-bolder me-3 ms-5">
            <li class="nav-item ms-3">
              <Link class="nav-link text-dark navlink" to="#">
                About
              </Link>
            </li>
            <li class="nav-item ms-3">
              <Link class="nav-link text-dark navlink" to="#">
                Bussiness
              </Link>
            </li>
            <li class="nav-item ms-3">
              <Link class="nav-link text-dark navlink" to="#">
                Blog
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link
                className="nav-link bg-danger rounded-pill text-white p-2"
                to="/login"
              >
                Log in
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link
                className="nav-link bg-secondary bg-opacity-25 rounded-pill text-dark p-2"
                to="/signup"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default LandingHeader;

import React from "react";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-transparant mt-2">
        <Link className="navbar-brand ms-4 fw-bolder brand" to="/">
          <img src="./assets/icons8-pinterest-color-32.png"></img>
          Pinterest
        </Link>
        <button
          className="navbar-toggler text-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#subNavBar"
        >
          <span className="navbar-toggler-icon text-dark bg-secondary"></span>
        </button>
        <div className="collapse navbar-collapse" id="subNavBar">
          <ul className="navbar-nav ms-auto fw-bolder me-3 ms-5 fs-6">
            <li className="nav-item me-4">
              <a className="nav-link text-dark" href="#">
                About
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link text-dark" href="#">
                Bussiness
              </a>
            </li>
            <li className="nav-item me-3 ms-2">
              <a className="nav-link text-dark" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link bg-danger rounded-pill text-white p-2"
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
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default LandingPage;

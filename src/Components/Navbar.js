import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  let handleLogout = () => {
    window.localStorage.removeItem("pinteresttoken");
    navigate("/");
  };
  return (
    <header className="mt-2">
      <nav className="navbar navbar-expand-md navbar-light text-dark bg-transparant">
        <Link className="navbar-brand ms-4 icon-effect" to="/home">
          <img
            src="../assets/pinterest_login_logo.png"
            alt="Pinterest Logo"
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavBar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavBar">
          <ul className="navbar-nav fw-bolder fs-6">
            <li className="nav-item ms-2">
              <Link
                className="nav-link text-dark rounded-pill nav-effect"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link text-dark rounded-pill nav-effect"
                to="/today"
              >
                Today
              </Link>
            </li>
            <li className="nav-item dropdown ms-2">
              <a
                className="nav-link dropdown-toggle text-dark rounded-pill nav-effect"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                id="navBarDropdown"
                aria-expanded="false"
              >
                Create
              </a>
              <ul
                className="dropdown-menu fs-6"
                aria-labelledby="navBarDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bolder"
                    to="/createpin"
                  >
                    Create Pin
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          {/* <form className="d-flex ms-3 icon-effect box"> */}
          {/* <input
              className="form-control rounded-pill bg-light"
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            ></input> */}
          {/* </form> */}
          <ul className="navbar-nav ms-auto me-2">
            {/* <li className="nav-item ms-2 icon-effect">
              <Link className="nav-link" to="/profile">
                <i className="bi bi-person-circle fs-4"></i>
              </Link>
            </li> */}
            {/* <li classNameName="nav-item">
              <button classNameName="btn btn-sm">
                <Link
                  classNameName="nav-link bg-success rounded-pill fs-6 text-white fw-bold p-2"
                  to="/login"
                >
                  Log in
                </Link>
              </button>
            </li>
            <li classNameName="nav-item">
              <button classNameName="btn btn-sm">
                <Link
                  classNameName="nav-link bg-secondary bg-opacity-25 rounded-pill fs-6 text-dark fw-bold p-2"
                  to="/signup"
                >
                  Sign up
                </Link>
              </button>
            </li> */}
            <li className="nav-item me-1 icon-effect">
              <a className="nav-link" href="#">
                <i className="bi bi-bell-fill fs-4 ms-2 me-2"></i>
              </a>
            </li>
            <li className="nav-item me-1 icon-effect">
              <a className="nav-link" href="#">
                <i className="bi bi-chat-dots-fill fs-4 ms-2 me-2"></i>
              </a>
            </li>
            <li className="nav-item me-1 icon-effect">
              <Link className="nav-link" to="/profile">
                <i className="bi bi-person-circle fs-4 ms-2 me-2"></i>
              </Link>
            </li>
            <li className="nav-item ms-2 me-2 mt-1">
              <button
                className="btn btn-danger btn-sm rounded-pill text-white p-2 fw-bold fs-6"
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

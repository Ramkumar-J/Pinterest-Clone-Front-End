import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  let handleLogout = () => {
    window.localStorage.removeItem("pinteresttoken");
    navigate("/");
  };

  return (
    <header class="mt-2">
      {/* <div>
      <h1>Pinterest</h1>
      </div> */}
      <nav class="navbar navbar-expand-md navbar-light text-dark fw-bolder bg-transparant one">
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
            <li class="nav-item ms-2">
              <Link
                class="nav-link text-dark rounded-pill nav-effect"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li class="nav-item ms-2">
              <Link
                class="nav-link text-dark rounded-pill nav-effect"
                to="/today"
              >
                Today
              </Link>
            </li>
            <li class="nav-item dropdown ms-2">
              <a
                class="nav-link dropdown-toggle text-dark rounded-pill nav-effect"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                id="navBarDropdown"
                aria-expanded="false"
              >
                Create
              </a>
              <ul class="dropdown-menu fs-6" aria-labelledby="navBarDropdown">
                <li>
                  <Link
                    class="dropdown-item text-dark fw-bolder"
                    to="/createpin"
                  >
                    Create Pin
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          {/* <form class="d-flex ms-3 icon-effect box"> */}
          {/* <input
              class="form-control rounded-pill bg-light"
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            ></input> */}
          {/* </form> */}
          <ul class="navbar-nav ms-auto me-2">
            <li class="nav-item ms-2 icon-effect">
              <Link class="nav-link" to="/profile">
                <i class="bi bi-person-circle fs-4"></i>
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm">
                <Link
                  className="nav-link bg-success rounded-pill fs-6 text-white fw-bold p-2"
                  to="/login"
                >
                  Log in
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm">
                <Link
                  className="nav-link bg-secondary bg-opacity-25 rounded-pill fs-6 text-dark fw-bold p-2"
                  to="/signup"
                >
                  Sign up
                </Link>
              </button>
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
            <li className="nav-item ms-2 mt-1">
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

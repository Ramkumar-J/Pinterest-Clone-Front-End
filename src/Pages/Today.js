import React from "react";
import { Link } from "react-router-dom";
import TodayPin from "../Components/TodayPin";

function Today() {
  return (
    <div className="container text-center">
      <h1 className="mt-2">Today's Inspiration</h1>
      <h4 className="mt-2">September 5,2022</h4>
      <TodayPin></TodayPin>
      <i className="bi bi-check-circle-fill fs-2 mt-5"></i>
      <p className="mb-0">That's all for today!</p>
      <p className="fs-5 fw-bolder">Come back tomorrow for more inspiration</p>
      <Link
        to="/home"
        className="btn bg-secondary bg-opacity-25 btn-sm rounded-pill text-dark fw-bolder mb-5"
      >
        Go to home feed
      </Link>
    </div>
  );
}

export default Today;

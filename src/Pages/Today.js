import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import TodayPin from "../Components/TodayPin";

function Today() {
  return (
    <>
      <Navbar></Navbar>
      <section className="container text-center">
        <h1 className="mt-2">Today's Inspiration</h1>
        <h4 className="mt-2">January 24,2023</h4>
        <TodayPin></TodayPin>
        <i className="bi bi-check-circle-fill fs-2 mt-5"></i>
        <p className="mb-0">That's all for today!</p>
        <p className="fs-5 fw-bolder">
          Come back tomorrow for more inspiration
        </p>
        <Link
          to="/home"
          className="btn bg-secondary bg-opacity-25 btn-sm rounded-pill text-dark fw-bolder mb-5"
        >
          Go to home feed
        </Link>
      </section>
      <i className="bi bi-question question-icon"></i>
    </>
  );
}

export default Today;

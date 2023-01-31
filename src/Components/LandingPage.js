import React from "react";
import { Link } from "react-router-dom";
import LandingHeader from "../Components/LandingHeader";
function LandingPage() {
  return (
    <>
      <LandingHeader></LandingHeader>
      <section className="container-fluid landing-bg">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-0 m-0 landing-img-container">
            <div className="landing-mainimg">
              <img
                className="img-fluid"
                src="./assets/landing_img_1.png"
                alt="Lipshade Image-1"
              ></img>
              <div className="landing-subimg">
                <img
                  className="img-fluid "
                  src="./assets/landing_img_2.png"
                  alt="Lipshade Image-2"
                ></img>
                <div className="text-center text-white">
                  <p className="mb-0 fw-bolder city">Scout the City</p>
                  <p className="followers">56.7k followers</p>
                </div>
                <div className="landing-lastimg">
                  <img
                    className="img-fluid"
                    src="./assets/landing_img_3.png"
                    alt="Lipshade Image-3"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 landing-content-container">
            <p className="landing-main-content">
              See it, make it, try it, do it
            </p>
            <p className="landing-sub-content">
              The best part of Pinterest is discovering new things and ideas
              from people around the world.
            </p>
            <button className="explore-btn">
              <Link to="/login" className="explore-btn-text">
                Explore
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;

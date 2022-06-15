import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import Navbar from "./Navbar";

function Pin() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      about: "",
      link: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.image) {
        errors.image = "Image is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3008/createpin", values, {
          headers: {
            Authorization: window.localStorage.getItem("pinteresttoken"),
          },
        });
        navigate("/home");
      } catch (error) {
        console.log(error);
        alert("something went wrong");
      }
    },
  });

  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid p-0 pin-bg">
        <div className="add-pin">
          <button className="btn btn-secondary btn-lg">
            <i class="bi bi-image"></i>
          </button>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row mt-5">
              <div className="col-lg-3"></div>
              {/* Create pin area */}
              <div className="col-lg-6">
                <div class="row mt-3">
                  <div className="col-lg-12">
                    <h5 className="fw-bolder">Create a Pin</h5>
                  </div>
                </div>
                <div class="pin-container bg-light p-3 rounded">
                  <div class="row mt-2">
                    <div class="col-lg-6">
                      <button class="btn btn-light btn-outline-primary rounded-circle">
                        <i class="bi bi-three-dots"></i>
                      </button>
                    </div>
                  </div>
                  <form onSubmit={formik.handleSubmit}>
                    <div class="row mt-2">
                        {/* Leftside */}
                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                        <div class="row mt-5">
                          <div class="col-lg-12">
                            <label>Upload image link here</label>
                            <input
                              type={"text"}
                              className="form-control imagebox mt-2"
                              accept="image/*"
                              name="image"
                              onChange={formik.handleChange}
                              value={formik.values.image}
                            ></input>
                            <span style={{ color: "red" }}>
                              {formik.errors.image}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Rightside */}
                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="row mt-2">
                          <div class="col-lg-12">
                            <label>Title</label>
                            <input
                              class="form-control input-box mt-3 fw-bolder"
                              type={"text"}
                              placeholder="Add a Title"
                              name="title"
                              onChange={formik.handleChange}
                              value={formik.values.title}
                            ></input>
                          </div>
                        </div>
                        <div class="row mt-4">
                          <div class="col-lg-12">
                            <label>About pin</label>
                            <textarea
                              class="form-control mt-3 w-100"
                              rows="1"
                              type={"text"}
                              placeholder="Tell everyone what is your pin about"
                              name="about"
                              onChange={formik.handleChange}
                              value={formik.values.about}
                            ></textarea>
                          </div>
                        </div>
                        <div class="row mt-5">
                          <div class="col-lg-12">
                            <label>Link</label>
                            <input
                              class="form-control input-box mt-3 fs-5 fw-light"
                              type={"text"}
                              placeholder="Add a destination link"
                              name="link"
                              onChange={formik.handleChange}
                              value={formik.values.link}
                            ></input>
                          </div>
                        </div>
                        <div class="row mt-5">
                          <div class="col-lg-12">
                            <input
                              class="form-control w-25 btn btn-danger btn-small"
                              type={"submit"}
                              value="Save"
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pin;

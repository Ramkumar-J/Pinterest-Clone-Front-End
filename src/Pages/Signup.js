import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LandingHeader from "../Components/LandingHeader";
function Signup() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      age: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !values.email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        errors.email = "Please Enter Valid Email";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 8) {
        errors.password = "Password Contains minimum 8 Characters";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://pinterest-clone-backend.vercel.app/signup",
          values
        );
        navigate("/login");
      } catch (error) {
        console.log(error);
        alert("something went wrong");
      }
    },
  });
  return (
    <>
      <LandingHeader></LandingHeader>
      <div class="container-fluid signup-container">
        <div class="signup-card">
          <div class="signup-card-body">
            <div className="signup-logo-container">
              <img
                class="img-fluid signup-logo"
                src="./assets/pinterest_login_logo.png"
                alt="Pinterest Logo"
              ></img>
            </div>
            <h1 class="fs-2 fw-bolder text-center mt-2">
              Welcome to Pinterest
            </h1>
            <p class="text-center">Find new ideas to try</p>
            <form onSubmit={formik.handleSubmit}>
              <label className="ms-2" for="email">
                Email
              </label>
              <input
                class="form-control mt-1 mb-1 rounded-pill signup-input_box"
                type={"email"}
                name="email"
                id="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              ></input>
              <span style={{ color: "red" }}>{formik.errors.email}</span>
              <label className="ms-2" for="password">
                Password
              </label>
              <input
                class="form-control mt-1 mb-1 rounded-pill signup-input_box"
                type={"password"}
                name="password"
                id="password"
                placeholder="Create a Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              ></input>
              <span style={{ color: "red" }}>{formik.errors.password}</span>
              <label className="ms-2" for="age">
                Age
              </label>
              <input
                class="form-control mt-1 mb-1 rounded-pill signup-input_box"
                type={"text"}
                name="age"
                id="age"
                placeholder="Age"
                onChange={formik.handleChange}
                value={formik.values.age}
              ></input>
              <input
                class="form-control btn btn-danger rounded-pill text-center mt-2"
                type={"submit"}
                value="Continue"
              ></input>
            </form>
            <p class="mt-2 mb-0 text-center signup-content">
              By continuing, you agree to Pinterest's
            </p>
            <p class="mb-0 mt-0 text-center signup-content">
              <a class="fw-bolder text-dark" href="#">
                Terms of Service
              </a>{" "}
              acknowledge you've read our
            </p>
            <p class="mb-0 mt-0 text-center signup-content">
              <a class="fw-bolder text-dark" href="#">
                Privacy Policy
              </a>
            </p>
            <p class="mt-2 text-center signup-content">
              <Link class="fw-bolder text-dark" to="/login">
                Already a member? Log in
              </Link>
            </p>
            <p class="mt-2 text-center signup-content">
              Are you a business?{" "}
              <a class="fw-bolder text-dark" href="#">
                Get started here!
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

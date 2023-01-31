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
      <section className="container-fluid signup-container">
        <div className="signup-card">
          <div className="signup-card-body">
            <div className="signup-logo-container">
              <img
                className="img-fluid signup-logo"
                src="./assets/pinterest_login_logo.png"
                alt="Pinterest Logo"
              ></img>
            </div>
            <h1 className="fs-2 fw-bolder text-center mt-2">
              Welcome to Pinterest
            </h1>
            <p className="text-center">Find new ideas to try</p>
            <form onSubmit={formik.handleSubmit}>
              <label className="ms-2" for="email">
                Email
              </label>
              <input
                className="form-control mt-1 mb-1 rounded-pill signup-input_box"
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
                className="form-control mt-1 mb-1 rounded-pill signup-input_box"
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
                className="form-control mt-1 mb-1 rounded-pill signup-input_box"
                type={"text"}
                name="age"
                id="age"
                placeholder="Age"
                onChange={formik.handleChange}
                value={formik.values.age}
              ></input>
              <input
                className="form-control btn btn-danger rounded-pill text-center mt-2"
                type={"submit"}
                value="Continue"
              ></input>
            </form>
            <p className="mt-2 mb-0 text-center signup-content">
              By continuing, you agree to Pinterest's
            </p>
            <p className="mb-0 mt-0 text-center signup-content">
              <a className="fw-bolder text-dark" href="#">
                Terms of Service
              </a>{" "}
              acknowledge you've read our
            </p>
            <p className="mb-0 mt-0 text-center signup-content">
              <a className="fw-bolder text-dark" href="#">
                Privacy Policy
              </a>
            </p>
            <p className="mt-2 text-center signup-content">
              <Link className="fw-bolder text-dark" to="/login">
                Already a member? Log in
              </Link>
            </p>
            <p className="mt-2 text-center signup-content">
              Are you a business?{" "}
              <a className="fw-bolder text-dark" href="#">
                Get started here!
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;

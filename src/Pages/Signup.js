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
      username: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
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
    <div class="container-fluid signup-container ">
      <div class="card bg-transparent signup-card">
        <div class="card-body text-dark">
          <div className="signup-logo-container">
          <img
            class="img-fluid signup-logo"
            src="https://img.icons8.com/color/40/pinterest--v1.png"
          ></img>
          </div>
          <h1 class="fs-2 fw-bolder mt-2">Welcome to Pinterest</h1>
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
            <label className="ms-2" for="user">
              User Name
            </label>
            <input
              class="form-control mt-1 mb-1 rounded-pill signup-input_box"
              type={"text"}
              name="username"
              id="user"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.username}
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

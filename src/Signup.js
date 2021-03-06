import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
          "https://pinterest-clone-nodeapp.herokuapp.com/signup",
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
    <div class="container-fluid contain-size login-bg">
      <div class="card card-size">
        <div class="card-body text-white">
          <img
            class="img-fluid logo"
            src="./assets/icons8-pinterest-color-32.png"
          ></img>
          <h1 class="fs-2 fw-bolder mt-2">Welcome to Pinterest</h1>
          <p class="text-center">Find new ideas to try</p>
          <form onSubmit={formik.handleSubmit}>
            <label className="ms-2" for="email">
              Email
            </label>
            <input
              class="form-control mt-1 mb-1 rounded-pill in-box"
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
              class="form-control mt-1 mb-1 rounded-pill in-box"
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
              class="form-control mt-1 mb-1 rounded-pill in-box"
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
          <p class="mt-2 mb-0 text-center content">
            By continuing, you agree to Pinterest's
          </p>
          <p class="mb-0 mt-0 text-center content">
            <a class="fw-bolder text-white" href="#">
              Terms of Service
            </a>{" "}
            acknowledge you've read our
          </p>
          <p class="mb-0 mt-0 text-center content">
            <a class="fw-bolder text-white" href="#">
              Privacy Policy
            </a>
          </p>
          <p class="mt-2 text-center content">
            <Link class="fw-bolder text-white" to="/login">
              Already a member? Log in
            </Link>
          </p>
          <p class="mt-2 text-center content">
            Are you a business?{" "}
            <a class="fw-bolder text-white" href="#">
              Get started here!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

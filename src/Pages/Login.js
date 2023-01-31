import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LandingHeader from "../Components/LandingHeader";

function Login() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
        let loginData = await axios.post(
          "https://pinterest-clone-backend.vercel.app/login",
          values
        );
        window.localStorage.setItem("pinteresttoken", loginData.data.token);
        navigate("/home");
      } catch (error) {
        console.log(error);
        alert("Credential Not Found");
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
            <h1 className="fs-2 fw-bolder text-center mt-3 mb-3">
              Welcome to Pinterest
            </h1>
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
              <p className="mt-2 mb-0 fw-bolder login-content">
                Don't forgot your password?
              </p>
              <p className="mt-2 mb-0 fw-bolder login-content">
                For Demo,<br></br>
                Email: user@gmail.com<br></br>
                Password: user@123
              </p>
              <input
                className="form-control btn btn-danger rounded-pill text-center mt-4"
                type={"submit"}
                value="Log in"
              ></input>
            </form>
            <p className="mt-2 mb-0 text-center login-content">
              By continuing, you agree to Pinterest's
            </p>
            <p className="mb-0 mt-0 text-center login-content">
              <a className="fw-bolder text-dark" href="#">
                Terms of Service
              </a>{" "}
              acknowledge you've read our
            </p>
            <p className="mb-0 mt-0 text-center login-content">
              <a className="fw-bolder text-dark" href="#">
                Privacy Policy
              </a>
            </p>
            <hr className="w-50 mx-auto"></hr>
            <p className="mt-2 text-center login-content">
              <Link className="fw-bolder text-dark" to="/signup">
                Not on Pinterest yet? Sign up
              </Link>
            </p>
            <p className="mt-2 text-center login-content">
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

export default Login;

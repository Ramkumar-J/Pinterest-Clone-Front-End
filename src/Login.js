import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage";

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
        let loginData = await axios.post("https://pinterest-clone-nodeapp.herokuapp.com/login", values);
        window.localStorage.setItem("pinteresttoken", loginData.data.token);
        navigate("/home");
      } catch (error) {
        console.log(error);
        alert("something went wrong");
      }
    },
  });
  return (
    <>
      <LandingPage></LandingPage>
      <div class="container-fluid contain-size">
        <div class="card card-size">
          <div class="card-body text-dark">
            <img
              class="img-fluid logo"
              src="./assets/icons8-pinterest-color-32.png"
            ></img>
            <h1 class="fs-2 fw-bolder mt-3 mb-3">Welcome to Pinterest</h1>
            <form onSubmit={formik.handleSubmit}>
              <label className="ms-2">Email</label>
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
              <label className="ms-2">Password</label>
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
              <p class="mt-2 mb-0 fw-bolder content">
                Don't forgot your password?
              </p>
              <input
                class="form-control btn btn-danger rounded-pill text-center mt-4"
                type={"submit"}
                value="Log in"
              ></input>
            </form>
            <p class="mt-2 mb-0 text-center content">
              By continuing, you agree to Pinterest's
            </p>
            <p class="mb-0 mt-0 text-center content">
              <a class="fw-bolder text-dark" href="#">
                Terms of Service
              </a>{" "}
              acknowledge you've read our
            </p>
            <p class="mb-0 mt-0 text-center content">
              <a class="fw-bolder text-dark" href="#">
                Privacy Policy
              </a>
            </p>
            <hr class="w-50 mx-auto"></hr>
            <p class="mt-2 text-center content">
              <Link class="fw-bolder text-dark" to="/signup">
                Not on Pinterest yet? Sign up
              </Link>
            </p>
            <p class="mt-2 text-center content">
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

export default Login;

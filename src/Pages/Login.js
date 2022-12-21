import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
      <div class="container-fluid signup-container signup-bg">
        <div class="card signup-card">
          <div class="card-body mt-2 text-white">
            <img
              class="img-fluid signup-logo"
              src="./assets/icons8-pinterest-color-32.png"
            ></img>
            <h1 class="fs-2 fw-bolder mt-3 mb-3">Welcome to Pinterest</h1>
            <form onSubmit={formik.handleSubmit}>
              <label className="ms-2">Email</label>
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
              <label className="ms-2">Password</label>
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
              <p class="mt-2 mb-0 fw-bolder login-content">
                Don't forgot your password?
              </p>
              <p class="mt-2 mb-0 fw-bolder login-content">
                For Demo,<br></br>
                Email: user@gmail.com<br></br>
                Password: user@123
              </p>
              <input
                class="form-control btn btn-danger rounded-pill text-center mt-4"
                type={"submit"}
                value="Log in"
              ></input>
            </form>
            <p class="mt-2 mb-0 text-center login-content">
              By continuing, you agree to Pinterest's
            </p>
            <p class="mb-0 mt-0 text-center login-content">
              <a class="fw-bolder text-white" href="#">
                Terms of Service
              </a>{" "}
              acknowledge you've read our
            </p>
            <p class="mb-0 mt-0 text-center login-content">
              <a class="fw-bolder text-white" href="#">
                Privacy Policy
              </a>
            </p>
            <hr class="w-50 mx-auto"></hr>
            <p class="mt-2 text-center login-content">
              <Link class="fw-bolder text-white" to="/signup">
                Not on Pinterest yet? Sign up
              </Link>
            </p>
            <p class="mt-2 text-center contentlogin-content">
              Are you a business?{" "}
              <a class="fw-bolder text-white" href="#">
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

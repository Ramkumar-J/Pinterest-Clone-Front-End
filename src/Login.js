import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    let navigate=useNavigate();
    let formik=useFormik({
       initialValues:{
           email:"",
           password:"",
       },
       onSubmit:async (values) => {
        try {
            let loginData=await axios.post("http://localhost:3008/login",values);
            window.localStorage.setItem("pinteresttoken",loginData.data.token);
            navigate("/home");
        } catch (error) {
            console.log(error);
            alert("something went wrong");
        }
       }
    })
  return (
      <div class="container-fluid contain-size">
    <div class="card card-size">
        <div class="card-body text-dark">
        {/* <button class="btn btn-transparant"><i class="bi bi-x"></i></button> */}
        <img class="img-fluid logo" src="./assets/icons8-pinterest-color-32.png"></img>
        <h1 class="fs-2 fw-bolder mt-3 mb-3">Welcome to Pinterest</h1>
        <form onSubmit={formik.handleSubmit}>
        <label className='ms-2'>Email</label>
        <input class="form-control mt-1 mb-1 rounded-pill in-box" type={"email"} name="email" id="email" placeholder='Email' onChange={formik.handleChange} value={formik.values.email}></input>
        <label className='ms-2'>Password</label>
        <input class="form-control mt-1 mb-1 rounded-pill in-box" type={"password"} name="password" id="password" placeholder='Create a Password' onChange={formik.handleChange} value={formik.values.password}></input>
        <p class="mt-2 mb-0 fw-bolder content">Forgot your password?</p>
        <input class="form-control btn btn-danger rounded-pill text-center mt-4" type={"submit"} value="Log in"></input>
        </form>
        <p class="mt-2 mb-0 text-center content">By continuing, you agree to Pinterest's</p>
        <p class="mb-0 mt-0 text-center content"><a class="fw-bolder text-dark" href="https://policy.pinterest.com/en/terms-of-service">Terms of Service</a> acknowledge you've read our</p>
        <p class="mb-0 mt-0 text-center content"><a class="fw-bolder text-dark" href="https://policy.pinterest.com/en/privacy-policy">Privacy Policy</a></p>
        <hr class="w-50 mx-auto"></hr>
        <p class="mt-2 text-center content"><a class="fw-bolder text-dark" href="#">Not on Pinterest yet? Sign up</a></p>
        <p class="mt-2 text-center content">Are you a business? <a class="fw-bolder text-dark" href="https://www.pinterest.com/business/create/">Get started here!</a></p>
        </div>
    </div>
    </div>
  )
}

export default Login
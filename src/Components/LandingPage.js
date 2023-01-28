import React from 'react'
import LandingHeader from "../Components/LandingHeader";
function LandingPage() {
  return (
    <>
    <LandingHeader></LandingHeader>
    <div className='container-fluid landing-bg'>
        <div className='row'>
            <div className='col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6 p-0 m-0 landing-img-container'>
                <div className='landing-mainimg'>
                <img className='img-fluid' src="https://s.pinimg.com/webapp/shop-bd0c8a04.png"></img>
                <div className='landing-subimg'>
                <img className='img-fluid ' src="https://s.pinimg.com/webapp/creator-pin-img-491ebb56.png"></img>
                <div className='text-center text-white'>
                <p className='mb-0 fw-bolder city'>Scout the City</p>
                <p className='followers'>56.7k followers</p>
                </div>
                <div className='landing-lastimg'>
                <img className='img-fluid' src="https://s.pinimg.com/webapp/creator-avatar-d7a05622.png"></img>
                </div>
                </div>
                </div>
           </div>
            <div className='col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 landing-content-container'>
                <p className='text-danger text-center landing-main-content'>See it, make it, try it, do it</p>
                <p className='text-danger text-center fs-4 landing-sub-content'>The best part of Pinterest is discovering new things and ideas from people around the world.</p>
                <button className='btn btn-danger rounded-pill text-white'>Explore</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default LandingPage;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
function ViewPin(){
    let params=useParams();
    let[view,setView]=useState([])
    useEffect(() => {
    async function getview(){
        try {
            let pinview=await axios.get(`https://pinterest-clone-nodeapp.herokuapp.com/viewpin/${params.id}`,{
                headers: {
                  Authorization: window.localStorage.getItem("pinteresttoken"),
                },
              });
            console.log(pinview);
            setView(pinview.data);
        } catch (error) {
            console.log("error");
        }
    }
    getview();
    },[])
  
    return(
        <>
        <Navbar></Navbar>
        <div className="container">
            <div className="row mt-5 bg-light">
                <div className="col-lg-6">
                    <img class="img-fluid h-75 w-100" src={view.image}></img>
                </div>
                <div className="col-lg-6">
                    <div className="row mt-5">
                    <div className="col-lg-6">
                    <a href="#"><img class="ms-2 rounded-circle p-1" src="https://img.icons8.com/ios-glyphs/30/share.png" alt=""/></a>
                        </div>
                        <div className="col-lg-6">
                        <button class="btn btn-danger rounded-pill ms-5">Save</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                    <div className="col-lg-12">
                    <h1 className="mt-0 fw-bolder text-uppercase">{view.title}</h1>
                    <p>Photo by Lingam Alagar on behance ｜ Graphic Design,Retouching</p>
                        </div>   
                    </div>
                    <div className="row mt-3">
                    <div className="col-lg-12">
                    <img
                    class="img-fluid me-2 rounded-circle"
                    src="https://i.pinimg.com/75x75_RS/e9/f7/e1/e9f7e101e3b7484d53b2b4d5a6004740.jpg"
                  ></img>
                  <span className="fs-4 fw-bolder">{view.about}</span>
                        </div>   
                    </div>
                    <div className="row mt-3">
                    <div className="col-lg-12">
                  <p className="fs-4 fw-bolder">Comments</p>
                  <input className="form-control w-75 h-50" placeholder="Add a Comment"></input>
                  <input className="btn btn-primary mt-3" type="button" value="Submit"></input>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
        {/* <Home></Home> */}
        </>
    )
}

export default ViewPin;
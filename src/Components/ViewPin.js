import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PinContext from "../Context/PinContext";
import Navbar from "./Navbar";
function ViewPin() {
  const {savepin,setSavepin} = useContext(PinContext);
  let params = useParams();
  let [view, setView] = useState([]);
  useEffect(() => {
    async function getview() {
      try {
        let pinview = await axios.get(
          `https://pinterest-clone-backend.vercel.app/viewpin/${params.id}`,
          {
            headers: {
              Authorization: window.localStorage.getItem("pinteresttoken"),
            },
          }
        );
        console.log(pinview);
        setView(pinview.data);
      } catch (error) {
        console.log("error");
      }
    }
    getview();
  }, []);

  let Addsavedpin= (pin) => {
    setSavepin([...savepin,pin]);
 }

  let comment = () => {
    let list = document.createElement("list");
    document.getElementById("commentline").appendChild(list);
    let image = document.createElement("img");
    image.setAttribute(
      "src",
      "https://img.icons8.com/fluency/35/user-male-circle.png"
    );
    image.classList.add("rounded-circle", "mt-2");
    let span = document.createElement("span");
    span.classList.add("bg-white", "tex-dark", "fs-6", "p-2", "mt-5");
    let inputValue = document.getElementById("myInput").value;
    let node = document.createTextNode(inputValue);
    span.appendChild(node);
    let br = document.createElement("br");
    if (inputValue === " ") {
      alert("Please write any comment");
    } else {
      list.appendChild(image);
      list.appendChild(span);
      list.appendChild(br);
    }
    document.getElementById("myInput").value = " ";
  };

  return (
    <>
    <Navbar></Navbar>
      <div className="container p-0 view-pin">
        <div className="row mt-3 mb-5">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <img
              class="img-fluid w-100 bg-secondary viewpin-image"
              src={view.image}
            ></img>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-5">
            <div className="row mt-3">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <a href={view.image} download>
                  <img
                    class="ms-2 rounded-circle p-1"
                    src="./assets/home_pin_logo.jpg"
                    alt="Pin user logo"
                  />
                </a>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <button
                  class="btn btn-danger rounded-pill"
                  onClick={() => Addsavedpin(view)}
                >
                  Save
                </button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12">
                <h1 className="mt-0 fw-bolder text-uppercase">{view.title}</h1>
                <p>
                  Photo by Lingam Alagar on behance ｜ Graphic Design,Retouching
                </p>
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
                <input
                  className="form-control w-75 h-50"
                  id="myInput"
                  placeholder="Add a Comment"
                ></input>
                <input
                  className="btn btn-primary mt-3"
                  onClick={comment}
                  type="submit"
                  value="Submit"
                ></input>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-12">
                <ul id="commentline" className="p-0"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default ViewPin;

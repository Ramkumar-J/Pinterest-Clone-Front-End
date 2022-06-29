import axios from "axios";
import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Home() {
  const [Pins, setPins] = useState([]);
  useEffect(() => {
    async function getPin() {
      try {
        let pinData = await axios.get("https://pinterest-clone-nodeapp.herokuapp.com/home", {
          headers: {
            Authorization: window.localStorage.getItem("pinteresttoken"),
          },
        });
        console.log(pinData);
        setPins(pinData.data);
      } catch (error) {
        console.log(error);
        alert("something went wrong");
      }
    }
    getPin();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      {Pins.length > 0 ? (
        <div className="container-fluid">
           <div class="gallary">
            {Pins.map((pin) => {
              return (
                <div class="pin">
        <div class="image-container">
        <img class="pin-image" src={pin.image} alt="Image" />
        <div class="pin-content">
            <a href="#"><img class="pin-icon me-5 rounded-circle p-1" src="https://img.icons8.com/ios-glyphs/25/share.png" alt=""/></a>
            <Link to={`/viewpin/${pin._id}`}><img class="pin-icon rounded-circle p-1" src="https://img.icons8.com/external-icongeek26-outline-icongeek26/25/external-view-graphic-design-icongeek26-outline-icongeek26.png" alt=""/></Link>
          </div>
        </div>
          <button class="btn btn-danger rounded-pill pin-button">Save</button>
        <h5 className="mt-0 fw-bolder">{pin.title}</h5>
                  <img
                    class="img-fluid me-2 user-image"
                    src="https://i.pinimg.com/75x75_RS/24/30/d2/2430d22def035ed725bffcafd7e275a7.jpg"
                  ></img>
                  <span>{pin.about}</span>
    </div>
              );
            })}
          </div>
          
          {/* <div class="row">
            {Pins.map((pin) => {
              return (
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                  <img
                    className="img-fluid mb-0 img-size"
                    src={pin.image}
                  ></img>
                  <h5 className="mt-0 fw-bolder">{pin.title}</h5>
                  <img
                    class="img-fluid me-2 img-user"
                    src="https://i.pinimg.com/75x75_RS/24/30/d2/2430d22def035ed725bffcafd7e275a7.jpg"
                  ></img>
                  <span>{pin.about}</span>
                  <br></br>
                  <a href={pin.link}>{pin.link}</a>
                </div>
              );
            })}
          </div> */}
        </div>
      ) : (
        <div class="text-center mt-5">
          <div class="spinner-border" role="status"></div>
          <br></br>
          <p class="fs-3 fw-bolder mb-0">We're adding new ideas to your</p>
          <p class="fs-3 fw-bolder">home feed!</p>
        </div>
      )}
    </>
  );
}
export default Home;

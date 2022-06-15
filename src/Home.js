import axios from "axios";
import react, { useEffect, useState } from "react";
import Navbar from "./Navbar";
function Home() {
  const [Pins, setPins] = useState([]);
  useEffect(() => {
    async function getPin() {
      try {
        let pinData = await axios.get("http://localhost:3008/home", {
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
          <div class="row">
            {Pins.map((pin) => {
              return (
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
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
          </div>
        </div>
      ) : (
        <div class="d-flex justify-content-center mt-5">
          <div class="spinner-border" role="status"></div>
          <br></br>
          <p class="">Loading...</p>
        </div>
      )}
    </>
  );
}
export default Home;

import axios from "axios";
import react, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pin from "../Pin";
import PinContext from "../PinContext";

function Home() {
  const {pins,setPins,savepin,setSavepin} = useContext(PinContext);
  const [searchTerm, setSearchTerm] = useState("");
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
        alert("something went wrong");
      }
    }
    getPin();
  }, []);
  let Addsavedpin= (pin) => {
    setSavepin([...savepin,pin]);
 }


  // const [Pins, setPins] = useState([]);
  // useEffect(() => {
  //   async function getPin() {
  //     try {
  //       let pinData = await axios.get("https://pinterest-clone-nodeapp.herokuapp.com/home", {
  //         headers: {
  //           Authorization: window.localStorage.getItem("pinteresttoken"),
  //         },
  //       });
  //       console.log(pinData);
  //       setPins(pinData.data);
  //     } catch (error) {
  //       console.log(error);
  //       alert("something went wrong");
  //     }
  //   }
  //   getPin();
  // }, []);
  return (
    <>
      {/* <Navbar></Navbar> */}
      {pins.length > 0 ? (
        <div className="container-fluid">
          <input
            class="form-control rounded-pill bg-light w-50 mx-auto"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></input>
          <div class="gallary mt-4">
            {pins.filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
                return val;
            })
            .map((pin) => {
              return (
                <Pin pin={pin} Addsavedpin={Addsavedpin} Savedpins={savepin}></Pin>
                // <div class="pin">
                //   <div class="image-container">
                //     <img
                //       class="bg-danger pin-image"
                //       src={pin.image}
                //       alt="Image"
                //     />
                //     <div class="pin-content">
                //       <a href={pin.image} download>
                //         <img
                //           class="me-5 rounded-circle p-1 pin-icon"
                //           src="https://img.icons8.com/external-ayo-icons-royyan-wijaya/25/external-arrow-arrow-line-ayo-icons-royyan-wijaya-2.png"
                //           alt=""
                //         />
                //       </a>
                //       <Link to={`/viewpin/${pin._id}`}>
                //         <img
                //           class="rounded-circle p-1 pin-icon"
                //           src="https://img.icons8.com/external-icongeek26-outline-icongeek26/25/external-view-graphic-design-icongeek26-outline-icongeek26.png"
                //           alt=""
                //         />
                //       </Link>
                //     </div>
                //   </div>
                //   <button
                //     class="btn btn-danger rounded-pill pin-button"
                //     onClick={() => props.Addsavedpin(pin)}
                //     disabled={props.Savedpins.some(
                //       (obj) => obj._id === pin._id
                //     )}
                //   >
                //     Save
                //   </button>
                //   <h5 className="mt-1 fw-bolder">{pin.title}</h5>
                //   <img
                //     class="img-fluid me-2 user-image"
                //     src="https://i.pinimg.com/75x75_RS/e9/f7/e1/e9f7e101e3b7484d53b2b4d5a6004740.jpg"
                //   ></img>
                //   <span>{pin.about}</span>
                // </div>
              );
            })}
          </div>
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

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function SavedPin(props) {
  // let pinContext=useContext(Pincontext);
  // const [savepin,setSavepin] = useState([]);
//   useEffect(() => {
//   setSavepin(JSON.parse(window.sessionStorage.getItem("savepin")));
// }, []);

// useEffect(() => {
//   window.sessionStorage.setItem("savepin", savepin);
// }, [savepin]);
// useEffect(() => {
//   let data=localStorage.getItem("savepin");
//   if(data) {
//     pinContext.setSavepin(JSON.parse(data));
//   }
// }, []);

// useEffect(() => {
//   localStorage.pinContext.setItem("savepin", JSON.stringify(savepin));
// });
  return (
    <div className='container'>
        <div class="gallary mt-3">
    {props.Savedpins.map((savedpin) => {
      return (
        <div class="pin">
<div class="image-container">
<img class="pin-image" src={savedpin.image} alt="Image" />
<div class="pin-content">
    <a href={savedpin.image} download><img class="pin-icon me-5 rounded-circle p-1" src="https://img.icons8.com/external-ayo-icons-royyan-wijaya/25/external-arrow-arrow-line-ayo-icons-royyan-wijaya-2.png" alt=""/></a>
    {/* <Link to={`/viewpin/${savedpin._id}`}><img class="pin-icon rounded-circle p-1" src="https://img.icons8.com/external-icongeek26-outline-icongeek26/25/external-view-graphic-design-icongeek26-outline-icongeek26.png" alt=""/></Link> */}
  </div>
</div>
  <button class="btn btn-danger rounded-pill pin-button" onClick={() => props.Removesavedpin(savedpin)}>Unsave</button>
<h5 className="mt-1 fw-bolder">{savedpin.title}</h5>
          <img
            class="img-fluid me-2 user-image"
            src="https://i.pinimg.com/75x75_RS/24/30/d2/2430d22def035ed725bffcafd7e275a7.jpg"
          ></img>
          <span>{savedpin.about}</span>
</div>
      );
    })}
  </div>
        </div>
   
    
  )
}

export default SavedPin;
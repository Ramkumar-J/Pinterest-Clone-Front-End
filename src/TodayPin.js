import React from "react";

function TodayPin(){
    return(
        <div className="container text-center">
            <div className="row">
                <div className="offset-3 col-6 offset-3">
        <div className="card today-card">
        <div className="card-top">
            <img className="img-fluid today-image" src="https://i.pinimg.com/236x/19/70/69/1970695549477ec6ca0f73a3a580be91.jpg"></img>
        </div>
        <p className="card-text mt-2 mb-0 fw-bolder">No More Hungry</p>
        <h3 className="card-title fw-bolder mb-3">Snack Attack</h3>
        </div>
        </div>
    </div>
    </div>
    )
}

export default TodayPin;
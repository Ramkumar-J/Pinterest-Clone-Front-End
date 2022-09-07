import React from "react";
import { Link } from "react-router-dom";

function TodayPin() {
  const todayList = [
    {
      image:
        "https://images.unsplash.com/photo-1536329639134-ade172b2fea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "Snack Attack",
      subtitle: "No More Hungry",
    },
    {
      image:
        "https://images.unsplash.com/photo-1610723208548-cf52500fa7fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxhQ2xUNVlsNnhmNHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Living Room Inspo",
      subtitle: "Festive Upgrade",
    },
    {
      image:
        "https://images.unsplash.com/photo-1578909196400-59f8f8156a05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdGl2YXRpb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Motivational Quotes",
      subtitle: "Gentle Reminder",
    },
    {
      image:
        "https://i.pinimg.com/236x/8d/68/05/8d6805bcb205d0362a1eb02cace0e623.jpg",
      title: "Pink Engagement Rings",
      subtitle: "The Colour of Love",
    },
  ];
  return (
    <div className="container text-center">
      {/* <h4 className="mt-2">September 5,2022</h4> */}
      <div className="row mt-4 mb-4">
        {todayList.map((todaypin) => {
          return (
            <>
              <div className="col-lg-6 mb-3">
                <div className="card today-card">
                  <div className="card-top">
                      <img
                        className="img-fluid today-image"
                        src={todaypin.image}
                      ></img>
                  </div>
                  <p className="card-text mt-3 mb-0 fw-bolder">
                    {todaypin.subtitle}
                  </p>
                  <h3 className="card-title fw-bolder mb-3">
                    {todaypin.title}
                  </h3>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default TodayPin;

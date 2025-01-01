import React from "react";


const OurMission = () => {
  return (
<>

<div className="container ">
  <div className="row">
    <div className="col-md-6">
      <h1 className="text-mission">Our Mission</h1>
      <p className="text-mission-paragraph">
        Our mission is to streamline the process of finding and securing
        construction projects. We understand the complexities and challenges
        involved in the construction industry, and we aim to simplify the
        process by providing a comprehensive, user-friendly platform that offers
        detailed project information.{" "}
      </p>
    </div>
    <div className="col-md-6">
      {/* <img src="./images/slide-1.jpg" class="mission-img" alt="Buildings" /> */}
      <img
        src="./images/our mission.png"
        alt="our mission"
        className="mission-img"
      />
    </div>
  </div>
</div>

</>


    );
}
export default OurMission;
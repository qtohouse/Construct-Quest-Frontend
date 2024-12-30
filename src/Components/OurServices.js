
import React from "react";


const OurServices = () => {
  return (
<>
<>
  <div className="services services-img">
    <div className="color-gradient-service">
      <h2>Our Services</h2>
    </div>
  </div>
  <div className="">
    <p className="service-paragraph ">
      We offer a one-window solution for all your project bidding needs. Our
      platform allows you to:
    </p>
  </div>
  <div className="container ">
    <div className="row">
      <div className="col-md-6">
        {/* <h1 class="text-warning">What We Do</h1> * /}
      {/* <p class="text-paragraph">Construct Quest Specializes In Providing Construction Project Leads That Are Meticulously Categorized Based On:</p> */}{" "}
       
        <ul className="category">
          <li className="category-list">
            <strong className="">Search and Filter: </strong> From small
            renovations to large-scale developments, access projects of all
            sizes.
          </li>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <li>
            <strong className="">Tailored Leads:</strong> Receive leads that are
            tailored to your business preferences and expertise.
          </li>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <li>
            <strong className="">Detailed Project Information:</strong>Access
            comprehensive details about each project, including scope,
            timelines, and contact information.
          </li>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </ul>
      </div>
      <div className="col-md-6">
        {/* <img src="./images/.jpg" class="service-img" alt="Buildings" /> */}
        <img
          src="./images/our services.png"
          alt="our services"
          className="service-img"
        />
      </div>
    </div>
  </div>
</>


</>

  );
}
export default OurServices;

import React from "react";


const Cards = () => {
  return (
<>
  {/* {/* Card Container Start * /} */}
  <div className="container">
    <div className="card-container">
      <div className="maincard">
        <div className="icons-card">
          {" "}
          <img
            className="icons"
            alt="twitter"
            src="./images/available-project-icon.png"
          />
        </div>
        <div className="text">
          <span className="title">Available-Projects</span>
        </div>
        <div className="arrow">
          <span className="number">500</span>
          <img
            className="icons"
            alt="twitter"
            src="./images/greater-than-icon.png"
          />
        </div>
      </div>
      <div className="maincard">
        <div className="icons-card">
          <img
            className="icons"
            alt="twitter"
            src="./images/active-project-icon.png"
          />
        </div>
        <div className="text">
          <span className="title">Active-Projects</span>
        </div>
        <div className="arrow">
          <span className="number">500</span>
          <img
            className="icons"
            alt="twitter"
            src="./images/greater-than-icon.png"
          />
        </div>
      </div>
      <div className="maincard">
        <div className="icons-card">
          <img
            className="icons"
            alt="twitter"
            src="./images/bidding-open-icon.png"
          />
        </div>
        <div className="text">
          <span className="title">Bidding-Open</span>
        </div>
        <div className="arrow">
          <span className="number">500</span>
          <img
            className="icons"
            alt="twitter"
            src="./images/greater-than-icon.png"
          />
        </div>
      </div>
      <div className="maincard">
        <div className="icons-card">
          <img
            className="icons"
            alt="twitter"
            src="./images/coming-soon-icon.png"
          />
        </div>
        <div className="text">
          <span className="title">Bidding-Open</span>
        </div>
        <div className="arrow">
          <span className="number">500</span>
          <img
            className="icons"
            alt="twitter"
            src="./images/greater-than-icon.png"
          />
        </div>
      </div>
      {/* <div class="card">
      <div class="icons-card"><i class="fas fa-gavel"></i></div>
      <div class="text">
          <span class="title">Bidding-Open</span>
          <span class="number">500</span>
      </div>
      <div class="arrow"><i class="fas fa-chevron-right"></i></div>
  </div> */}
    </div>
  </div>
  {/* Card Container End */}
</>
  );
}
export default Cards;
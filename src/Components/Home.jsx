
import React from "react";
import Cards from "./Cards";
import KeyFeatures from "./KeyFeatures";
import Benefits from "./Benefits";
import JoinUs from "./JoinUs";
import ParticleEffect from "./ParticleEffect";


const Home = () => {
  return (

<>



<ParticleEffect></ParticleEffect>
 



     {/* /*Marquee Tag start */  }
 
  <div className="marquee-container">
    <div className="marquee-text">
      Welcome to CQ ! Our Website is Under Development.Thank You for Your
      Patience!
    </div>
  </div>
       {/* /* Marquee Tag End *  */}


  <Cards></Cards>
  <KeyFeatures></KeyFeatures>
  <Benefits></Benefits>
  <JoinUs></JoinUs>
</>




  );
}
export default Home;
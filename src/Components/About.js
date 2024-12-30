import React from "react";
import OurMission from "./OurMission";
import WhatWeDo from "./WhatWeDo";
import OurServices from "./OurServices"

const About = () => {
  return (
 

<>
  <div className="about about-img">
    <div className="colorgradientonimage">
      <h2>About Us</h2>
    </div>
  </div>
  <br />
  <div className="about-paragraph">
    <p>
      Welcome to <strong>Construct Quest</strong> – your ultimate partner in
      discovering construction project leads across the United States. At
      Construct Quest, we are dedicated to connecting general contractors,
      subcontractors, vendors, suppliers, and manufacturers with the most
      relevant and up-to-date construction projects tailored to their specific
      needs.
    </p>
  </div>
  <OurMission></OurMission>
  <WhatWeDo></WhatWeDo>
  <OurServices></OurServices>
</>
  );
}
export default About;








  



import React from "react";


const Register = () => {
  return (
<>
<div className="register-now">
  <div className="color-gradient-register">
    <div className="container container-register-now">
      <div className="center-register-icons">
        {/* <img class="register-icons" alt="lock icon" src="/images/register-now.png" /> */}
        <img
          className="register-icons"
          alt="lock icon"
          src="./images/register-icon.png"
        />
      </div>
      <div className="register-heading">Register Now</div>
      <div className="register-pargraph">Let's begin</div>
      <form action="" className="form-register">
        <div className="row">
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="companyName"
                placeholder="Company Name"
              />
              <label htmlFor="companyName">Company Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="designation"
                placeholder="Your Designation"
              />
              <label htmlFor="designation">Your Designation</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Alternative Email"
              />
              <label htmlFor="alternative email">Alternative Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="cellno"
                placeholder="Cell No"
              />
              <label htmlFor="Cellno">Cell No</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="city"
              />
              <label htmlFor="city">City</label>
            </div>
            <div className="form-floating mb-3">
            <select
             className="form-select"
             aria-label="Default select example"
            defaultValue=""
            >
             <option disabled value="">
              Select Minority Status
           </option>
                 <option value="WBE">WBE</option>
                 <option value="DBE">DBE</option>
                 <option value="MBE">MBE</option>
                 <option value="SBE">SBE</option>
            </select>
              <label htmlFor="minoritystatus">Minority Status</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="websitename/domain"
                placeholder="Website Name / Domain"
              />
              <label htmlFor="websitename/domain">Website Name / Domain</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="phoneNo"
                placeholder="Full Name"
              />
              <label htmlFor="fullname">Full Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="phoneno"
                placeholder="Phone No"
              />
              <label htmlFor="phoneno">Phone No</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="addressline"
                placeholder="Address Line"
              />
              <label htmlFor="addressline">Address Line</label>
            </div>
            <div className="form-floating mb-3">
            <select
  className="form-select"
  aria-label="Default select example"
  defaultValue=""
>
  <option disabled value="">
    Select State
  </option>
  <option value="AL">Alabama (AL)</option>
  <option value="AK">Alaska (AK)</option>
  <option value="AZ">Arizona (AZ)</option>
  <option value="AR">Arkansas (AR)</option>
  <option value="CA">California (CA)</option>
  <option value="CO">Colorado (CO)</option>
  <option value="CT">Connecticut (CT)</option>
  <option value="DE">Delaware (DE)</option>
  <option value="FL">Florida (FL)</option>
  <option value="GA">Georgia (GA)</option>
  <option value="HI">Hawaii (HI)</option>
  <option value="ID">Idaho (ID)</option>
  <option value="IL">Illinois (IL)</option>
  <option value="IN">Indiana (IN)</option>
  <option value="IA">Iowa (IA)</option>
  <option value="KS">Kansas (KS)</option>
  <option value="KY">Kentucky (KY)</option>
  <option value="LA">Louisiana (LA)</option>
  <option value="ME">Maine (ME)</option>
  <option value="MD">Maryland (MD)</option>
  <option value="MA">Massachusetts (MA)</option>
  <option value="MI">Michigan (MI)</option>
  <option value="MN">Minnesota (MN)</option>
  <option value="MS">Mississippi (MS)</option>
  <option value="MO">Missouri (MO)</option>
  <option value="MT">Montana (MT)</option>
  <option value="NE">Nebraska (NE)</option>
  <option value="NV">Nevada (NV)</option>
  <option value="NH">New Hampshire (NH)</option>
  <option value="NJ">New Jersey (NJ)</option>
  <option value="NM">New Mexico (NM)</option>
  <option value="NY">New York (NY)</option>
  <option value="NC">North Carolina (NC)</option>
  <option value="ND">North Dakota (ND)</option>
  <option value="OH">Ohio (OH)</option>
  <option value="OK">Oklahoma (OK)</option>
  <option value="OR">Oregon (OR)</option>
  <option value="PA">Pennsylvania (PA)</option>
  <option value="RI">Rhode Island (RI)</option>
  <option value="SC">South Carolina (SC)</option>
  <option value="SD">South Dakota (SD)</option>
  <option value="TN">Tennessee (TN)</option>
  <option value="TX">Texas (TX)</option>
  <option value="UT">Utah (UT)</option>
  <option value="VT">Vermont (VT)</option>
  <option value="VA">Virginia (VA)</option>
  <option value="WA">Washington (WA)</option>
  <option value="WV">West Virginia (WV)</option>
  <option value="WI">Wisconsin (WI)</option>
  <option value="WY">Wyoming (WY)</option>
</select>

              <label htmlFor="state">State</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="workarea"
                placeholder="workarea"
              />
              <label htmlFor="workarea">Define Work Area Description</label>
            </div>
            <div className="form-floating mb-3">
            <select
  className="form-select"
  aria-label="Default select example"
  defaultValue=""
>
  <option disabled value="">
    Select Bondable
  </option>
  <option value="Yes">Yes</option>
  <option value="No">No</option>
</select>

              <label htmlFor="bondable">Bondable</label>
            </div>
          </div>
        </div>
        {/* <input class="login-button" type="submit" value="Next" /> */}
        <a href="/projectdetail" className="nav-link ">
          <button type="button" className="button">
            Next
          </button>
        </a>
      </form>
    </div>
  </div>
</div>

</>

  );
}
export default Register;
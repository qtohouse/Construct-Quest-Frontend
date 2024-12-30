
import React from "react";


const Profile = () => {
  return (



<>
  <div className="container">
    <div className="row gutters">
      <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div className="card h-100">
          <div className="card-body">
            <div className="account-settings">
              <div className="user-profile">
                <div className="user-avatar">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Maxwell Admin"
                  />
                </div>
                <h5 className="user-name">William</h5>
                <h6 className="user-email">testing@abc.com</h6>
              </div>
              <div className="about">
                <h5>About</h5>
                <p>I'm William. General Contractor at Pc Construction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div className="card h-100">
          <div className="card-body">
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 className="mb-2 personal-heading">Personal Details</h6>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Full Name"
                  />
                  <label htmlfor="name">Enter Full Name</label>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                  <label htmlfor="email">Enter Email ID</label>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-floating">
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Phone"
                  />
                  <label htmlfor="phone">Enter Phone Number</label>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="website"
                    placeholder="Website Url"
                  />
                  <label htmlfor="website">Enter Websit Url</label>
                </div>
              </div>
            </div>
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 className="mt-3 mb-2 personal-heading">Address</h6>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="street"
                    placeholder="Street No"
                  />
                  <label htmlfor="street">Enter Street No</label>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="City"
                  />
                  <label htmlfor="city">Enter City</label>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    placeholder="State"
                  />
                  <label htmlfor="state">Enter State</label>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="zipcode"
                    placeholder="Zip Code"
                  />
                  <label htmlfor="zipcode">Enter Zip Code</label>
                </div>
              </div>
            </div>
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="text-right">
                  <a href="/">
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-cancel"
                    >
                      Cancel
                    </button>
                  </a>
                  <a href="/">
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-update"
                    >
                      Update
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
</>
  );
}
export default Profile;
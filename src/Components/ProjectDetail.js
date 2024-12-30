
import React from "react";


const ProjectDetail = () => {
  return (
<>

<div className="project-detail">
  <div className="color-gradient-project-detail">
    <div className="container container-project-detail">
      <div className="center-register-icons">
        <img
          className="register-icons"
          alt="lock icon"
          src="./images/project-detail-icon.png"
        />
      </div>
      <h1 className="project-detail-heading ">PROJECT REQUIRED INFORMATION</h1>
      <p className="project-detail-pargraph">
        You're just a step away from unlocking top construction leads!
      </p>
      <form>
        <div className="form-group row">
          <span className="col-6 col-form-label">
            Project Type (i.e Schools/colleges, Public universities, Police
            Stations/Fire Stations etc)
          </span>
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="projecttype"
                placeholder="Project Type"
              />
              <label>Project Type</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <span className="col-6 col-form-label">
            Project Size in Square Area
          </span>
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="projectsize"
                placeholder="Project Size"
              />
              <label>Project Size</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <span className="col-6 col-form-label">
            Project Size in Estimated Cost Range
          </span>
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="projectcost"
                placeholder="Project Cost Range"
              />
              <label>Project Cost Range</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <span className="col-6 col-form-label">
            Average Numbers of Bids Per Month
          </span>
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="averagebids"
                placeholder="Average No of Bids"
              />
              <label>Average Number of Bids</label>
            </div>
          </div>
        </div>
        {/* <div class="form-group row">
      <span class="col-6 col-form-label">Project Size in Square Area</span>
      <div class="col-6">
          <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="city"
                placeholder="city"
              />
              <label for="city"></label>
            </div>
      </div>
  </div> */}
        {/* <div class="form-group row">
      <span class="col-6 col-form-label">Project Size in Estimated Cost Range</span>
      <div class="col-6">
          <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="city"
                placeholder="city"
              />
              <label for="city">City</label>
            </div>
      </div>
  </div> */}
        {/* <div class="form-group row">
      <span class="col-6 col-form-label">Average Numbers of Bids Per Month</span>
      <div class="col-6">
          <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="city"
                placeholder="city"
              />
              <label for="city">City</label>
            </div>
      </div>
  </div> */}
        <div className="form-group row">
          <span className="col-6 col-form-label">
            Specify Sub Regions (i.e. Selective Regions of the
            State/County/City)
          </span>
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="subregions"
                placeholder="Specify Sub Regions"
              />
              <label>Specify Sub Regions</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <span className="col-6 col-form-label">CSI Divisions</span>
          <div className="col-6">
            <div className="form-floating mb-3">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="" disabled="" selected="">
                  Select a CSI Division
                </option>
                <option value="Division1">General Requirements</option>
                <option value="Division2">Existing Conditions</option>
                <option value="Division3">Concrete</option>
                <option value="Division4">Masonry </option>
                <option value="Division5">Metals</option>
                <option value="Division6">
                  Wood, Plastics, and Composites
                </option>
                <option value="Division7">
                  Thermal and Moisture Protection
                </option>
                <option value="Division8">Openings</option>
                <option value="Division9">Finishes</option>
                <option value="Division10">Specialties</option>
                <option value="Division11">Equipment</option>
                <option value="Division12">Furnishings</option>
                <option value="Division13">Special Construction</option>
                <option value="Division14">Conveying Equipment</option>
                <option value="Division15">Plumbing + HVAC</option>
                <option value="Division16">Electrical + Lighting</option>
                <option value="Division17">Mechanical Support</option>
                <option value="Division18">Fire Suppression</option>
                <option value="Division19">Plumbing</option>
                <option value="Division20">
                  Heating Ventilating and Air Conditioning
                </option>
                <option value="Division21">Integrated Automation </option>
                <option value="Division22">Electrical</option>
                <option value="Division23">Communications</option>
                <option value="Division24">
                  Electronic Safety and Security
                </option>
                <option value="Division25">Earthwork</option>
                <option value="Division26">Exterior Improvements</option>
                <option value="Division27">Utilities</option>
                <option value="Division28">Transportation</option>
                <option value="Division29">
                  Waterways and Marine Construction
                </option>
                <option value="Division30">Process Interconnections</option>
                <option value="Division31">
                  Water and Wastewater Equipment
                </option>
                <option value="Division32">Electrical Power Generation</option>
              </select>
              <label htmlFor="csidivisions">CSI Divisions</label>
            </div>
          </div>
        </div>
        <a href="/" className="nav-link ">
          <button type="button" className="button">
            Submit
          </button>
        </a>
      </form>
    </div>
  </div>
</div>

</>

  );
}
export default ProjectDetail;
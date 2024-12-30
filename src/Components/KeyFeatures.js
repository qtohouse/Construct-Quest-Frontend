
import React from "react";


const KeyFeatures = () => {
  return (
<>
<>
  {/* Banner-1 Start */}
  <div className="banner">
    <span>Key Features Overview</span>
  </div>
  <br />
  {/* Banner-1 End */}
  {/* {/* Key Features Start * /} */}
  <div className="container-fluid key-features">
    <div className="container container-keyfeatures">
      <div className="row g-5">
        <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
          <div className="key-features-item">
            <div className="feature">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex">
                    <div className="pe-4">
                      <div className="">
                        <img
                          className="icons"
                          src="/images/search-filter-icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="feature-detail">
                      <h4>Customizable Search Filter</h4>
                      <p>
                        Quickly find projects that match your specific criteria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex">
                    <div className="pe-4">
                      <div className="">
                        <img
                          className="icons"
                          src="/images/project-insight-icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="feature-detail">
                      <h4>Comprehensive Projects Insights</h4>
                      <p>
                        Dive deep with access to detailed project plans,
                        specifications, and bidder lists.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex">
                    <div className="pe-4">
                      <div className="">
                        <img
                          className="icons"
                          src="images/reporting-icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="feature-detail">
                      <h4>Analytics and Reportings</h4>
                      <p>
                        Gain insights into market trends and your bidding
                        history to refine your strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="explore-more">
              <a href="/">
                Explore More<span>&gt;</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-6 wow fadeInLeft">
          <div className="rounded h-100">
            {/* <img src="images/slide-1.jpg" class="image-style"   alt="" /> */}
            <img
              src="/images/key features.png"
              alt="key features"
              className="image-style"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  {/* {/* Key Features End  * /} */}
</>


</>

  );
}
export default KeyFeatures;
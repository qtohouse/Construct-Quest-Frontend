
import React from "react";


const PricingPlan = () => {
  return (


<>
 {/* PrcingPlan Start */}
  <div className="pricing pricing-img">
    <div className="color-gradient-pricing">
      <h2>Pricing plans</h2>
    </div>
  </div>
  <br />
  <br />
  <div className="container">
  <div
    className="tab-content wow fadeIn"
    style={{ visibility: "visible", animationName: "fadeIn" }}
  >
    <div role="tabpanel" className="tab-pane fade show active" id="yearly">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-30">
          <div className="price-item text-center">
            <div className="price-top">
              <h4>Personal</h4>
              <h2 className="mb-0">
                <sup>$</sup>99
              </h2>
              <span className="text-capitalize">Up to 50 leads/month</span>
            </div>
            <div className="price-content">
              <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                <li>
                  <i className="zmdi zmdi-check mr-2" />
                  <span className="c-black">Market Analysis</span> ✓
                </li>
                <li>
                  <i className="zmdi zmdi-check mr-2" />
                  <span className="c-black">Online Database Access</span> ✓
                </li>
                <li>
                  <i className="zmdi zmdi-check mr-2" />
                  <span className="c-black">Competitor analysis</span> ✗
                </li>
                <li>
                  <i className="zmdi zmdi-close mr-2" />
                  <span>Monthly Reports</span> ✗
                </li>
                <li>
                  <i className="zmdi zmdi-close mr-2" />
                  <span> Dedicated Account Manager</span> ✗
                </li>
                <li>
                  <i className="zmdi zmdi-close mr-2" />
                  <span>Priority Support</span> ✗
                </li>
              </ul>
              <a href="/"  className="btn btn-custom btn-warning ">
                Buy now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-30">
          <div className="price-item text-center popular">
            <div className="price-top">
              <h4>Business</h4>
              <h2 className="mb-0">
                <sup>$</sup>299
              </h2>
              <span className="text-capitalize">Up to 100 leads/month</span>
            </div>
            <div className="price-content">
              <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                <li>
                  <i className="zmdi zmdi-check mr-2" />
                  <span className="c-black">Market Analysis</span> ✓
                </li>
                <li>
                  <i className="zmdi zmdi-check mr-2" />
                  <span className="c-black">Online Database Access</span> ✓
                </li>
                <li>
                  <i className="zmdi zmdi-check mr-2" />
                  <span className="c-black">Competitor analysis</span> ✓
                </li>
                <li>
                  <i className="zmdi zmdi-close mr-2" />
                  <span>Monthly Reports</span> ✓
                </li>
                <li>
                  <i className="zmdi zmdi-close mr-2" />
                  <span> Dedicated Account Manager</span> ✗  
                </li>
                <li>
                  <i className="zmdi zmdi-close mr-2" />
                  <span>Priority Support</span> ✗
                </li>
              </ul>
              <a href="/" className="btn btn-custom btn-light">
                Buy now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-30">
          <div className="price-item text-center">
            <div className="price-top">
              <h4>Enterprise</h4>
              <h2 className="mb-0">
                <sup>$</sup>399
              </h2>
              <span className="text-capitalize">Lead Quantity of Your Choice </span> 
            </div>
            <div className="price-content">
              <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                <li>
                  <i className="zmdi zmdi-check mr-2" />
                  <span className="c-black">Market Analysis</span> ✓✓
                </li>
                <li>
                  <i className="zmdi zmdi-check mr-2" />
                  <span className="c-black">Online Database Access</span> ✓✓
                </li> 
                <li>
                  <i className="zmdi zmdi-check mr-2" />
                  <span className="c-black">Competitor Analysis</span> ✓✓
                </li>
                <li>
                  <i className="zmdi zmdi-close mr-2" />
                  <span>Monthly Reports</span> ✓✓
                </li>
                <li>
                  <i className="zmdi zmdi-close mr-2" />
                  <span> Dedicated Account Manager </span> ✓✓
                </li>
                <li>
                  <i className="zmdi zmdi-close mr-2" />
                  <span>Priority Support</span> ✓✓
                </li>
              </ul>
              <a href="/"  className="btn btn-custom btn-warning">
                Buy now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  <br />
  <br />
 {/* PrcingPlan End */}
</>


  );
}
export default PricingPlan;
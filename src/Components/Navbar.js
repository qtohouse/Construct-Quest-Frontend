


import React from "react";


const Navbar = () => {
  return (
<>
<>
  {/* Topbar Start */}
  <div className="container-fluid topbar-top bg-topbar ">
    <div className="container">
      <div className="d-flex justify-content-between topbar ">
        <div className="d-flex align-items-center flex-shrink-0 topbar-info">
          <img
            className="icons"
            src="./images/phone-yellow-icon.png"
            alt=""
          />
          <a href="tel: (312)-544-0023" className="me-4 text-topbar">
            (312)-544-0023{" "}
          </a>
          <img
            className="icons"
            src="./images/mail-yellow-icon.png"
            alt=""
          />
          <a href="mailto: info@constructquest.com" className="text-topbar">
            info@constructquest.com
          </a>
        </div>
        {/* {/* Login Button * /} */}
        <div className="navul">
          <a href="/login" className="nav-link ">
            <button type="button" className="btn loginb vertical-align-btn">
              Login
            </button>
          </a>
        </div>
        {/* {/* Cart Button * /} */}
        <button type="button" className="btn cartb vertical-align-btn ">
          <div className="CI">
            <img className="icons" src="/images/carticon.png" alt="" />
            <span>No Item</span>
            <a href="/">
              <img
                className=""
                alt="dropdown"
                src="./images/dropdown-white.png"
              />
            </a>
          </div>
        </button>
        {/* {/* Notification and Icons * /} */}
        <div className="mni bdg">
          <div>
            <img
              className="icons"
              src="./images/notification-icon.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="icons"
              src="./images/mail-white-icon.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="icons"
              src="./images/person-icon.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  <nav>
    {/* Navigation links */}
    {/* Navbar Start */}
    <div className="container-fluid bg-light">
      <div className="container">
        <nav className="navbar navbar-dark navbar-expand-lg py-lg-0">
          {/* {/* Logo Section * /} */}
          <a href="/" className="navbar-brand">
            <img
              className="main-logo"
              alt=""
              src="./images/construct-quest-logo.png"
            />
            <div className="logo-text">
              <span className="">Lead Smarter, Bid Better</span>
            </div>
          </a>
          {/* {/* Search Form * /} */}
          <div className="search-form">
            <div className="form-group">
              <div className="d-flex">
                <input
                  type="search"
                  className="form-control border-0 rounded-pill"
                  name="search-input"
                  defaultValue=""
                  placeholder="Search Here"
                  required=""
                />
                {/* {/* <img class="icons" src="./images/search.png" alt="" /> * /}               */}
              </div>
            </div>
          </div>
          {/* {/* Navbar Toggler * /} */}
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* {/* Navbar Links * /} */}
          <div className="collapse navbar-collapse  " id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="/projectinsight" className="nav-item nav-link">
                Project Insights
              </a>
              <a href="/bidcalender" className="nav-item nav-link">
                Bid Calender
              </a>
              <a className="nav-item nav-link" href="">Resources</a>
              {/* {/* Dropdown Menu * /} */}
              <div className="nav-item dropdown">
                <a href="/" className="" data-bs-toggle="dropdown">
                  <img
                    className="icons-dropdown"
                    alt="dropdown"
                    src="./images/dropdown-icon.png"
                  />
                </a>
                <div className="dropdown-menu  ">
                  <a href="/contact" className="dropdown-item">
                    Contact Us
                  </a>
                  <a href="/blog" className="dropdown-item">
                    Blog Posts
                  </a>
                  <a href="/privacy" className="dropdown-item">
                    Privacy
                  </a>
                  <a href="/faq" className="dropdown-item">
                    FAQ's
                  </a>
                  <a href="/testimonials" className="dropdown-item">
                    Testimonials
                  </a>
                </div>
              </div>
              <a href="/about" className="nav-item nav-link">
                About Us
              </a>
            </div>
            {/* {/* Register and Demo Buttons * /} */}
            <a href="/register" className="nav-link ">
              <button
                type="button"
                className="btn register-nav vertical-align-btn"
              >
                Register Now
              </button>
            </a>
            {/*         
                <a href="/" class="nav-link ">
                <button type="button" class="btn get-a-demo  vertical-align-btn">
                  Free Demo
                </button>
                </a> */}
          </div>
        </nav>
      </div>
    </div>
    {/* Navbar End */}
  </nav>
</>

</>

  );
}
export default Navbar;
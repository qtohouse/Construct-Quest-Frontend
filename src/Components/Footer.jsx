
import React from "react";


const Footer = () => {
  return (
<>
<>
  {/* {/* Footer Start * /} */}
  <div className="footer">
    <div className="container-fluid">
      {/* { /* Footer Paragraph * / } */}
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="footer-about">
            <div className="footer-header">
              <h3>Construct Quest</h3>
              <a href="/">
                <img
                  className="footer-main-logo"
                  alt="construct quest logo"
                  src="./images/construct-quest-logo-white.png"
                />
              </a>
            </div>
            <p>
              Welcome to <a href="/">Construct Quest</a> - Your ultimate
              partner in discovering construction project leads across the
              United States. At Construct Quest, we are dedicated to connecting
              general contractors, subcontractors, vendors, suppliers, and
              manufacturers with the most relevant and up-to-date construction
              projects tailored to their specific needs.
            </p>
          </div>
        </div>
        {/* { /* Footer Resources * / } */}
        <div className="col-md-6 col-lg-8">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-link">
                <h3>Our Services</h3>
                <a href="/">Search &amp; Filters</a>
                <a href="/">Tailored Leads</a>
                <a href="/">Detail Project Information</a>
                {/* {/* <a href="/">Ut porttitor</a>
            <a href="/">Nam pretium</a> * /} */}
                {/* {/* <h3>Resources</h3>
            <a href="/">Blog Posts</a>
            <a href="/">Partners</a>
            <a href="/">Webinars</a>
            <a href="/">Testimonials</a> * /} */}
              </div>
            </div>
            {/* { /* Footer Quicklinks * / } */}
            <div className="col-md-4" style={{ marginRight: "-76px" }}>
              <div className="footer-link">
                <h3>Quick Link</h3>
                <a href="/">Home </a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact Us</a>
                <a href="/login">Login</a>
              </div>
            </div>
            {/* { /* Footer Get in touch * / } */}
            <div className="col-md-4">
              <div className="footer-contact">
                <h3>Get In Touch</h3>
                {/* {/* <p>
              Georgia, USA
            </p> * /} */}
                <a className="" href="mailto: info@constructquest.com">
                  <p>info@constructquest.com</p>
                </a>
                <a className="" href="tel: (312)-544-0023">
                  <p>(312)-544-0023</p>
                </a>
                {/* { /* Footer Socialmedia * / } */}
                <div className="footer-social">
                  <a href="https://www.linkedin.com/company/construct-quest/about/">
                    <img
                      className="icons"
                      alt="linkedin"
                      src="./images/linkedin-icon.png"
                    />
                  </a>
                  <a href="https://www.facebook.com/people/Construct-Quest/61560306973135/">
                    <img
                      className="icons"
                      alt="facebook"
                      src="./images/facebook-icon.png"
                    />
                  </a>
                  <a href="https://www.instagram.com/constructquest/">
                    <img
                      className="icons"
                      alt="insatgram"
                      src="./images/instagram-icon.png"
                    />
                  </a>
                  <a href="https://x.com/ConstructQuest">
                    <img
                      className="icons"
                      alt="twitter"
                      src="./images/twitter-icon.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* { /* Footer Menu * / } */}
    <div className="container-fluid footer-menu">
      <div className="f-menu">
        <a href="/blog">Blog Posts</a>
        <a href="/privacy">Privacy policy</a>
        {/* <a href="/">webinars</a> */}
        <a href="/faq">FAQ's</a>
        <a href="/testimonials">Testimonials</a>
      </div>
    </div>
    {/* { /* Footer Rights * / } */}
    <div className="container copyright">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <p>
            © 2025
            <a href="/">Construct Quest</a>, All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* {/* Footer End * /} */}
</>

</>

  );
}
export default Footer;
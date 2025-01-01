import React from "react";


const Contact = () => {
  return (


<>
  <div className="contact contact-img">
    <div className="colorgradientonimage">
      <h2>Contact Us</h2>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <div className="container-xxl py-6" id="contact">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-3">Get In Touch</h1>
          <p className="mb-4">
            We'd love to hear from you! Whether you have questions, feedback, or
            need assistance, our team is here to help. Please reach out to us
            using our contact details. We'll get back to you as soon as
            possible.
          </p>
          <div className="d-flex mb-4">
            <img
              className="icons"
              alt="twitter"
              src="./images/phone-yellow-icon.png"
            />
            <a href="tel: (312)-544-0023" className="phone-contact">
              (312)-544-0023{" "}
            </a>
          </div>
          <div className="d-flex mb-4">
            <img
              className="icons"
              alt="twitter"
              src="./images/mail-yellow-icon.png"
            />
            <a href="mailto: info@constructquest.com" className="email-contact">
              info@constructquest.com
            </a>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlfor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlfor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlfor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    id="message"
                    style={{ height: 150 }}
                    defaultValue={""}
                  />
                  <label htmlfor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <a href="/">
                  <button className="btn btn-primary " type="submit">
                    Send Message
                  </button>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
</>
  );
}
export default Contact;
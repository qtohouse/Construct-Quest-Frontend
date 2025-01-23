
import React from "react";


const Faq = () => {
  return (


<>
 {/* Faq Start */}
  {/* <section class="bg-light"> */}
  <div className="faq faq-img">
    <div className="color-gradient-faq">
      <h2>Faq's</h2>
    </div>
  </div>
  <br />
  <br />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="faq-card card-style1 border-0">
          <div className="card-body p-4 p-md-5 p-xl-6">
            <div className="text-center mb-0.7 mb-lg-6">
              {/* <span class="section-title text-faq">FAQ's</span> */}
              {/* {/* <h2 class="h1 mb-0 text-secondary">Frequently Asked Questions</h2> * /} */}
            </div>
            <div id="accordion" className="accordion-style">
              <div className="faq-card mb-3">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is Construct Quest?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordion"
                >
                  <div className="card-body">
                    Construct Quest is a platform that provides contractors with
                    tailored leads and one-window solutions for construction
                    projects happening across the USA.
                  </div>
                </div>
              </div>
              <div className="faq-card mb-3">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How does Construct Quest find leads?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordion"
                >
                  <div className="card-body">
                    We use advanced algorithms and industry networks to identify
                    and curate exclusive construction project opportunities that
                    match your business's expertise and location.
                  </div>
                </div>
              </div>
              <div className="faq-card mb-3">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Are the leads provided by Construct Quest verified?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordion"
                >
                  <div className="card-body">
                    Yes, all leads are thoroughly vetted to ensure they meet our
                    quality standards and provide valuable opportunities for our
                    contractors.
                  </div>
                </div>
              </div>
              <div className="faq-card mb-3">
                <div className="card-header" id="headingFour">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Can I customize the types of leads I receive?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordion"
                >
                  <div className="card-body">
                    Absolutely! You can specify your preferences based on
                    project type, location, and other criteria to receive the
                    most relevant leads.
                  </div>
                </div>
              </div>
              <div className="faq-card">
                <div className="card-header" id="headingFive">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      How can Construct Quest help me win more projects?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordion"
                >
                  <div className="card-body">
                    By providing exclusive, tailored leads and comprehensive
                    project details, we help you focus your efforts on
                    high-potential opportunities, increasing your chances of
                    winning projects.
                  </div>
                </div>
              </div>
              <div className="faq-card">
                <div className="card-header" id="headingSix">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      What kind of projects can I find on Construct Quest?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseSix"
                  className="collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordion"
                >
                  <div className="card-body">
                    We offer a wide range of construction project leads,
                    including residential, commercial, industrial, and
                    infrastructure projects across the USA.
                  </div>
                </div>
              </div>
              <div className="faq-card">
                <div className="card-header" id="headingSeven">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      {" "}
                      How do I contact Construct Quest for support or inquiries?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseSeven"
                  className="collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordion"
                >
                  <div className="card-body">
                    You can contact us through our website's contact form, email
                    us at{" "}
                    <a
                      className="faq-info"
                      href="mailto: info@constructquest.com"
                    >
                      <strong>info@constructquest.com</strong>
                    </a>{" "}
                    or call our customer service hotline
                    <a className="faq-info" href="tel: (312)-544-0023">
                      <strong>(312) 544 0023.</strong>
                    </a>
                  </div>
                </div>
              </div>
              <div className="faq-card ">
                <div className="card-header" id="headingEight">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      What makes Construct Quest different from other lead
                      generation services?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseEight"
                  className="collapse"
                  aria-labelledby="headingEight"
                  data-bs-parent="#accordion"
                >
                  <div className="card-body">
                    Construct Quest offers tailored leads and a one-window
                    solution, providing all necessary project details, contact
                    information, and support in one convenient place.
                  </div>
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
 {/* Faq End */}
</>


  );
}
export default Faq;
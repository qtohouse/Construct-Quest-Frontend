import React, { useEffect } from 'react';

const ProjectInsights = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll('.list-group-item');
    const tabContents = document.querySelectorAll('.tab-pane');

    tabs.forEach((tab) => {
      tab.addEventListener('click', function (event) {
        event.preventDefault();
        const activeTab = event.currentTarget.getAttribute('id').replace('-tab', '');

        tabs.forEach((t) => {
          t.classList.remove('active');
        });

        tabContents.forEach((content) => {
          content.classList.remove('show', 'active');
        });

        document.getElementById(activeTab).classList.add('show', 'active');
        event.currentTarget.classList.add('active');
      });
    });

    // Set default active tab
    document.getElementById('specs-tab').classList.add('active');
    document.getElementById('specs').classList.add('show', 'active');
  }, []);

  return (
    <div>
      <div className="project-insights-top project-insights-top-img">
        <div className="colorgradientonimage">
          <h2>Project Insights</h2>
        </div>
      </div>
      <br />
      <div className="project-insights">
        <div className="color-gradient-project-insights">
          <div className="container container-project-insights">
            <form action="" className="form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Project Title"
                    />
                    <label>Project Title</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      id=""
                      placeholder="Project Opening Date"
                    />
                    <label>Project Opening Date</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      id=""
                      placeholder="Project Due Date"
                    />
                    <label> Project Due Date</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder=" State of Project"
                    />
                    <label> State of Project</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Project Size"
                    />
                    <label>Project Size</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Project Value"
                    />
                    <label>Project Value</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Department of Project"
                    />
                    <label>Department of Project</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Project Source"
                    />
                    <label>Project Source</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Solicitation"
                    />
                    <label>Solicitation</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="datetime-local"
                      className="form-control"
                      id=""
                      placeholder="completiontime"
                    />
                    <label>Completion Time</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="MWSEB's and SDVOB's"
                    />
                    <label>MWSEB's and SDVOB's</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Type of Project"
                    />
                    <label>Type of Project</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Owner of Project"
                    />
                    <label>Owner of Project</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id=""
                      placeholder="Location of Project"
                    />
                    <label>Location of Project</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Scope/Nature of Project"
                    />
                    <label>Scope/Nature of Project</label>
                  </div>
                  <div className="form-floating mb-3 ">
                    <input
                      type="date"
                      className="form-control"
                      id=""
                      placeholder="Pre Bid Meeting Date"
                    />
                    <label>Pre Bid Meeting Date</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="workarea"
                    />
                    <label htmlFor="workarea">
                      Pre Bid Meeting (Mandatory/Non-Mandatory)
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      id=""
                      placeholder="Bid Date Extended"
                    />
                    <label>Bid Date Extended</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Bid Location"
                    />
                    <label>Bid Location</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Bid Phase"
                    />
                    <label>Bid Phase</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Bidding Method"
                    />
                    <label>Bidding Method</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="CSI Divisions"
                    />
                    <label>CSI Divisions</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container p-0">
        <div className="row">
          <div className="col-md-5 col-xl-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Project Detail</h5>
              </div>
              <div className="list-group list-group-flush" role="tablist">
                <a href="#" className="list-group-item list-group-item-action" id="specs-tab" role="tab">
                  Specs
                </a>
                <a href="#" className="list-group-item list-group-item-action" id="plans-tab" role="tab">
                  Plans
                </a>
                <a href="#" className="list-group-item list-group-item-action" id="addendum-tab" role="tab">
                  Addendum
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Note</h5>
              </div>
              <span>All potential bidders are highly encouraged to attend the pre-bid meeting.</span>
            </div>
          </div>
          <div className="col-md-7 col-xl-8">
            <div className="tab-content">
              <div className="tab-pane fade" id="specs" role="tabpanel">
                <div className="card">
                  <div className="card-body">
                    <table className="file-table">
                      <thead>
                        <tr>
                          <th>File Name</th>
                          <th>File size</th>
                          <th>Uploaded Date</th>
                          <th>Download All Docs</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01 Specifications</td>
                          <td>51 Mb</td>
                          <td>July 17, 2024</td>
                          <td>
                            <a href="/" className="download-link">
                              <img src="./images/pdf.png" alt="Download PDF" />
                              Download
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>02 Specifications</td>
                          <td>51 Mb</td>
                          <td>July 18, 2024</td>
                          <td>
                            <a href="/" className="download-link">
                              <img src="./images/pdf.png" alt="Download PDF" />
                              Download
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>03 Specifications</td>
                          <td>51 Mb</td>
                          <td>July 17, 2024</td>
                          <td>
                            <a href="/" className="download-link">
                              <img src="./images/pdf.png" alt="Download PDF" />
                              Download
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>04 Specifications</td>
                          <td>51 Mb</td>
                          <td>July 17, 2024</td>
                          <td>
                            <a href="/" className="download-link">
                              <img src="./images/pdf.png" alt="Download PDF" />
                              Download
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>05 Specifications</td>
                          <td>51 Mb</td>
                          <td>July 17, 2024</td>
                          <td>
                            <a href="/" className="download-link">
                              <img src="./images/pdf.png" alt="Download PDF" />
                              Download
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="plans" role="tabpanel">
                <div className="card">
                  <div className="card-body">
                    <table className="file-table">
                      <thead>
                        <tr>
                          <th>File Name</th>
                          <th>File size</th>
                          <th>Uploaded Date</th>
                          <th>Download All Docs</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01 plans</td>
                          <td>51 Mb</td>
                          <td>July 17, 2024</td>
                          <td>
                            <a href="/" className="download-link">
                              <img src="./images/pdf.png" alt="Download PDF" />
                              Download
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>02 plans</td>
                          <td>51 Mb</td>
                          <td>July 17, 2024</td>
                          <td>
                            <a href="/" className="download-link">
                              <img src="./images/pdf.png" alt="Download PDF" />
                              Download
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>03 plans</td>
                          <td>51 Mb</td>
                          <td>July 17, 2024</td>
                          <td>
                            <a href="/" className="download-link">
                              <img src="./images/pdf.png" alt="Download PDF" />
                              Download
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>04 plans</td>
                          <td>51 Mb</td>
                          <td>July 17, 2024</td>
                          <td>
                            <a href="/" className="download-link">
                              <img src="./images/pdf.png" alt="Download PDF" />
                              Download
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>05 plans</td>
                          <td>51 Mb</td>
                          <td>July 17, 2024</td>
                          <td>
                            <a href="/" className="download-link">
                              <img src="./images/pdf.png" alt="Download PDF" />
                              Download
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="addendum" role="tabpanel">
                <div className="card">
                  <div className="card-body">
                    <table className="file-table">
                      <thead>
                        <tr>
                          <th>File Name</th>
                          <th>File size</th>
                          <th>Uploaded Date</th>
                          <th>Download All Docs</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01 addendum</td>
                          <td>51 Mb</td>
                          <td>July 17, 2024</td>
                          <td>
                            <a href="/" className="download-link">
                              <img src="./images/pdf.png" alt="Download PDF" />
                              Download
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>02 addendum</td>
                          <td>51 Mb</td>
                          <td>July 17, 2024</td>
                          <td>
                            <a href="/" className="download-link">
                              <img src="./images/pdf.png" alt="Download PDF" />
                              Download
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>03 addendum</td>
                          <td>51 Mb</td>
                          <td>July 17, 2024</td>
                          <td>
                            <a href="/" className="download-link">
                              <img src="./images/pdf.png" alt="Download PDF" />
                              Download
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>04 addendum</td>
                          <td>51 Mb</td>
                          <td>July 17, 2024</td>
                          <td>
                            <a href="/" className="download-link">
                              <img src="./images/pdf.png" alt="Download PDF" />
                              Download
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>05 addendum</td>
                          <td>51 Mb</td>
                          <td>July 17, 2024</td>
                          <td>
                            <a href="/" className="download-link">
                              <img src="./images/pdf.png" alt="Download PDF" />
                              Download
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInsights;

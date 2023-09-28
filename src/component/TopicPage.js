import '../style/style.css'
import { Link } from "react-router-dom";
import imgRemote from "../component/images/topics/undraw_Remote_design_team_re_urdx.png";
import undrawGroup from "../component/images/topics/undraw_Group_video_re_btu7.png";
import Podcast from "../component/images/topics/undraw_Podcast_audience_re_4i5q.png";
import undrawFinance from "../component/images/topics/undraw_Finance_re_gnv2.png";



function TopicPage() {
    return (
      <>
        <div className="topicpage">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-12 ">
                <h2 className="mb-4">Popular Topics</h2>
              </div>
              <div className="col-lg-8 col-12">
                <div
                  to={"/web-Design"}
                  className="text-decoration-none text-black shadow-lg bg-white"
                >
                  <div className="custom-block bg-white d-flex flex-column flex-lg-row ">
                    <img
                      src={imgRemote}
                      className="custom-block-image img-fluid"
                      alt=""
                    />
                    <div className="mt-4 d-flex">
                      <div>
                        <h5 className="text-black mb-2">Web Design</h5>

                        <p className="mb-0">
                          When you search for free CSS templates, you will
                          notice that TemplateMo is one of the best websites.
                        </p>
                        <a href="/#" className="btn custom-btn mt-2 mt-lg-3">
                          Learn More
                        </a>
                      </div>

                      <span className="badge bg-design  ms-auto">14</span>
                    </div>
                  </div>
                </div>
                <div
                  to={"/web-Design"}
                  className="text-decoration-none text-black shadow-lg bg-white"
                >
                  <div className="custom-block bg-white d-flex flex-column flex-lg-row ">
                    <img
                      src={undrawGroup}
                      className="custom-block-image img-fluid"
                      alt=""
                    />
                    <div className="mt-4 d-flex">
                      <div>
                        <h5 className="text-black mb-2">Advertising</h5>

                        <p className="mb-0">
                          Visit TemplateMo website to download free CSS
                          templates. Lorem ipsum dolor, sit amet consectetur
                          adipisicing elit animi necessitatibus
                        </p>
                        <a href="/#" className="btn custom-btn mt-2 mt-lg-3">
                          Learn More
                        </a>
                      </div>

                      <span
                        style={{ background: "#F50057" }}
                        className="badge bg-design  ms-auto"
                      >
                        40
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  to={"/web-Design"}
                  className="text-decoration-none text-black shadow-lg bg-white"
                >
                  <div className="custom-block bg-white d-flex flex-column flex-lg-row ">
                    <img
                      src={Podcast}
                      className="custom-block-image img-fluid"
                      alt=""
                    />
                    <div className="mt-4 d-flex">
                      <div>
                        <h5 className="text-black mb-2">Podcast</h5>

                        <p className="mb-0">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit animi necessitatibus
                        </p>
                        <a href="/#" className="btn custom-btn mt-2 mt-lg-3">
                          Learn More
                        </a>
                      </div>

                      <span
                        style={{ background: "#F9A826" }}
                        className="badge bg-design  ms-auto"
                      >
                        70
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-12">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center mb-0">
                    <li class="page-item">
                      <button className="page-link" aria-label="Previous">
                        <span aria-hidden="true">Prev</span>
                      </button>
                    </li>

                    <li class="page-item active" aria-current="page">
                      <button className="page-link" href="/#">
                        1
                      </button>
                    </li>

                    <li class="page-item">
                      <button className="page-link">2</button>
                    </li>

                    <li class="page-item">
                      <button className="page-link">3</button>
                    </li>

                    <li class="page-item">
                      <button className="page-link">4</button>
                    </li>

                    <li class="page-item">
                      <button className="page-link">5</button>
                    </li>

                    <li class="page-item">
                      <button className="page-link" aria-label="Next">
                        <span aria-hidden="true">Next</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* ##################################################### */}
        <div className="threding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-12 text-start mb-4 ">
                <h2 className="mb-4">Trending Topics</h2>
              </div>
              <div
                to={"/web-Design"}
                className="text-decoration-none text-black col-lg-6  col-12 mb-4 mb-lg-0"
              >
                <div className="tab-block  bg-white shadow-lg">
                  <div className="d-flex">
                    <div>
                      <h5 className="mb-2">Investment</h5>

                      <p className="mb-0">
                        Lorem Ipsum dolor sit amet consectetur
                      </p>
                    </div>

                    <span className="badge bg-design  ms-auto">75</span>
                  </div>

                  <img
                    src={undrawFinance}
                    className="tab-block-image img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div
                to={"/web-Design"}
                className="text-decoration-none text-black col-lg-6 col-12"
              >
                <div className="tab-block  tab-block-overlay">
                  <div className="d-flex flex-column h-100">
                    <div className="tab-block-overlay-text d-flex">
                      <div>
                        <h5 className="text-white mb-2">Finance</h5>

                        <p className="text-white">
                          Topic Listing Template includes homepage, listing
                          page, detail page, and contact page. You can feel free
                          to edit and adapt for your CMS requirements.
                        </p>

                        <a
                          href="topics-detail.html"
                          className="btn custom-btn mt-2 mt-lg-3"
                        >
                          Learn More
                        </a>
                      </div>

                      <span className="badge bg-finance  ms-auto">25</span>
                    </div>

                    <div className="social-share d-flex">
                      <p className="text-white me-4">Share:</p>

                      <ul className="social-icon">
                        <li className="social-icon-item">
                          <a href="/#" className="social-icon-link bi-twitter">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                        </li>

                        <li className="social-icon-item">
                          <a href="/#" className="social-icon-link bi-facebook">
                            <i className="fa-brands fa-facebook"></i>
                          </a>
                        </li>

                        <li className="social-icon-item">
                          <a
                            href="/#"
                            className="social-icon-link bi-pinterest"
                          >
                            <i className="fa-brands fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>

                      <a href="/#" className="custom-icon bi-bookmark ms-auto">
                        <i className="fa-regular fa-bookmark"></i>
                      </a>
                    </div>

                    <div className="section-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default TopicPage;
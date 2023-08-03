
import { useEffect } from 'react';
import '../style/style.css'
import imgRemote from "../component/images/topics/undraw_Remote_design_team_re_urdx.png";
import colleagues from "../component/images/topics/colleagues-working-cozy-office-medium-shot.png";
import Redesign from "../component/images/topics/undraw_Redesign_feedback_re_jvm0.png";
import Groupvideo from "../component/images/topics/undraw_Group_video_re_btu7.png";
import undrawonline from "../component/images/topics/undraw_online_ad_re_ol62.png";
import viral from "../component/images/topics/undraw_viral_tweet_gndb.png";
import undrawFinance from "../component/images/topics/undraw_Finance_re_gnv2.png";
import Compose from "../component/images/topics/undraw_Compose_music_re_wpiw.png";
import happy from "../component/images/topics/undraw_happy_music_g6wc.png";
import Podcast from "../component/images/topics/undraw_Podcast_audience_re_4i5q.png";
import undrawEducator from "../component/images/topics/undraw_Educator_re_ju47.png";
import undrawGraduation from '../component/images/topics/undraw_Graduation_re_gthn.png';
import { Link } from 'react-router-dom';


function BrowseTopics() {
  useEffect(() => {
    let tabContent = [...document.querySelectorAll(".tab-content")]
    console.log(tabContent);
        let topicUl = document.querySelectorAll(".topic-ul li button");
    topicUl.forEach((topic) => {
      topic.addEventListener("click", () => {
        tabContent.forEach((tab) => {
           if (tab.getAttribute("category") === topic.getAttribute("cata")) {
             tab.classList.add("show");
           } else {
             tab.classList.remove("show");
           }
           
         })
             topicUl.forEach((topic) => {
               topic.classList.remove("active");
             });
             topic.classList.add("active");
           });
    });
                    
    }, []);

    return (
      <>
        <div className="browse-topics" id="browse-topics">
          <h1 className="text-center mt-5 mb-5  fw-bold me-0 ms-0">
            Browse Topics
          </h1>
          <div className="container">
            <div className="container-fluid">
              <div className="row ">
                <ul className="topic-ul d-flex align-content-center justify-content-center">
                  <li className="topic-li">
                    <button className="btn active " cata="design">
                      Design
                    </button>
                  </li>
                  <li className="topic-li">
                    <button className="btn " cata="marketing">
                      Marketing
                    </button>
                  </li>
                  <li className="topic-li">
                    <button className="btn " cata="Finance">
                      Finance
                    </button>
                  </li>
                  <li className="topic-li">
                    <button className="btn " cata="Music">
                      Music
                    </button>
                  </li>
                  <li className="topic-li">
                    <button className="btn " cata="Education">
                      Education
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 */}
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tab-page design">
                  <div className="tab-content show" category="design">
                    <div className="row">
                      <Link
                        className="text-decoration-none text-black col-lg-4 col-md-6 col-12 mb-4 mb-lg-0"
                        to={"/web-Design"}
                      >
                        <div className="tab-block  bg-white shadow-lg">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Web Design</h5>

                              <p className="mb-0">
                                Topic Listing Template based on Bootstrap 5
                              </p>
                            </div>

                            <span className="badge bg-design  ms-auto">14</span>
                          </div>

                          <img
                            src={imgRemote}
                            class="tab-block-image img-fluid"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link to={"/web-Design"} className="text-decoration-none text-black col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="tab-block  bg-white shadow-lg">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Graphic</h5>

                              <p className="mb-0">
                                Lorem Ipsum dolor sit amet consectetur
                              </p>
                            </div>

                            <span className="badge bg-design  ms-auto">75</span>
                          </div>

                          <img
                            src={Redesign}
                            className="tab-block-image img-fluid"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link to={"/web-Design"} className="text-decoration-none text-black col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="tab-block  bg-white shadow-lg">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Logo Design</h5>

                              <p className="mb-0">
                                Lorem Ipsum dolor sit amet consectetur
                              </p>
                            </div>

                            <span className="badge bg-design  ms-auto">
                              100
                            </span>
                          </div>

                          <img
                            src={colleagues}
                            class="tab-block-image img-fluid"
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="tab-content" category="marketing">
                    <div className="row">
                      <Link to={"/web-Design"} className="text-decoration-none text-black col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="tab-block  bg-white shadow-lg">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Advertising</h5>

                              <p className="mb-0">
                                Lorem Ipsum dolor sit amet consectetur
                              </p>
                            </div>

                            <span
                              style={{ backgroundColor: "#f50057" }}
                              className="badge    ms-auto"
                            >
                              30
                            </span>
                          </div>

                          <img
                            src={Groupvideo}
                            class="tab-block-image img-fluid"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link to={"/web-Design"} className="text-decoration-none text-black col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="tab-block  bg-white shadow-lg">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Video Content</h5>

                              <p className="mb-0">
                                Lorem Ipsum dolor sit amet consectetur
                              </p>
                            </div>

                            <span
                              style={{ backgroundColor: "#f50057" }}
                              className="badge bg-design  ms-auto"
                            >
                              35
                            </span>
                          </div>

                          <img
                            src={undrawonline}
                            className="tab-block-image img-fluid"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link to={"/web-Design"} className="text-decoration-none text-black col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="tab-block  bg-white shadow-lg">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Viral Tweet</h5>

                              <p className="mb-0">
                                Lorem Ipsum dolor sit amet consectetur
                              </p>
                            </div>

                            <span
                              style={{ backgroundColor: "#f50057" }}
                              className="badge bg-design  ms-auto"
                            >
                              50
                            </span>
                          </div>

                          <img
                            src={viral}
                            class="tab-block-image img-fluid"
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="tab-content" category="Finance">
                    <div className="row">
                      <Link to={"/web-Design"} className="text-decoration-none text-black col-lg-6  col-12 mb-4 mb-lg-0">
                        <div className="tab-block  bg-white shadow-lg">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Graphic</h5>

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
                      </Link>
                      <Link to={"/web-Design"} className="text-decoration-none text-black col-lg-6 col-12">
                        <div className="tab-block  tab-block-overlay">
                          <div className="d-flex flex-column h-100">
                            <div className="tab-block-overlay-text d-flex">
                              <div>
                                <h5 className="text-white mb-2">Finance</h5>

                                <p className="text-white">
                                  Topic Listing Template includes homepage,
                                  listing page, detail page, and contact page.
                                  You can feel free to edit and adapt for your
                                  CMS requirements.
                                </p>

                                <a
                                  href="topics-detail.html"
                                  className="btn custom-btn mt-2 mt-lg-3"
                                >
                                  Learn More
                                </a>
                              </div>

                              <span className="badge bg-finance  ms-auto">
                                25
                              </span>
                            </div>

                            <div className="social-share d-flex">
                              <p className="text-white me-4">Share:</p>

                              <ul className="social-icon">
                                <li className="social-icon-item">
                                  <a
                                    href="/#"
                                    className="social-icon-link bi-twitter"
                                  >
                                    <i className="fa-brands fa-twitter"></i>
                                  </a>
                                </li>

                                <li className="social-icon-item">
                                  <a
                                    href="/#"
                                    className="social-icon-link bi-facebook"
                                  >
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

                              <a
                                href="/#"
                                className="custom-icon bi-bookmark ms-auto"
                              >
                                <i className="fa-regular fa-bookmark"></i>
                              </a>
                            </div>

                            <div className="section-overlay"></div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="tab-content" category="Music">
                    <div className="row">
                      <Link to={"/web-Design"} className="text-decoration-none text-black col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="tab-block  bg-white shadow-lg">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Composing Song</h5>

                              <p className="mb-0">
                                Lorem Ipsum dolor sit amet consectetur
                              </p>
                            </div>

                            <span
                              style={{ backgroundColor: " rgb(249 168 38)" }}
                              className="badge bg-design  ms-auto"
                            >
                              14
                            </span>
                          </div>

                          <img
                            src={Compose}
                            class="tab-block-image img-fluid"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link to={"/web-Design"} className="text-decoration-none text-black col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="tab-block  bg-white shadow-lg">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Online Music</h5>

                              <p className="mb-0">
                                Lorem Ipsum dolor sit amet consectetur
                              </p>
                            </div>

                            <span
                              style={{ backgroundColor: " rgb(249 168 38)" }}
                              className="badge bg-design  ms-auto"
                            >
                              75
                            </span>
                          </div>

                          <img
                            src={happy}
                            className="tab-block-image img-fluid"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link to={"/web-Design"} className="text-decoration-none text-black col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="tab-block  bg-white shadow-lg">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Podcast</h5>

                              <p className="mb-0">
                                Lorem Ipsum dolor sit amet consectetur
                              </p>
                            </div>

                            <span
                              style={{ backgroundColor: " rgb(249 168 38)" }}
                              className="badge bg-design  ms-auto"
                            >
                              100
                            </span>
                          </div>

                          <img
                            src={Podcast}
                            class="tab-block-image img-fluid"
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="tab-content" category="Education">
                    <div className="row">
                      <Link to={"/web-Design"} className="text-decoration-none text-black col-lg-6  col-12 mb-4 mb-lg-0">
                        <div className="tab-block  bg-white shadow-lg">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Educator</h5>

                              <p className="mb-0">
                                Lorem Ipsum dolor sit amet consectetur
                              </p>
                            </div>

                            <span
                              style={{ backgroundColor: " rgb(0 191 166)" }}
                              className="badge bg-design  ms-auto"
                            >
                              80
                            </span>
                          </div>

                          <img
                            src={undrawEducator}
                            class="tab-block-image img-fluid"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link to={"/web-Design"} className="text-decoration-none text-black col-lg-6 col-12 mb-4 mb-lg-0">
                        <div className="tab-block  bg-white shadow-lg">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Graduation</h5>

                              <p className="mb-0">
                                Lorem Ipsum dolor sit amet consectetur
                              </p>
                            </div>

                            <span
                              style={{ backgroundColor: " rgb(0 191 166)" }}
                              className="badge bg-design  ms-auto"
                            >
                              65
                            </span>
                          </div>

                          <img
                            src={undrawGraduation}
                            class="tab-block-image img-fluid"
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default BrowseTopics;
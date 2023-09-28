import '../style/style.css'
import imgRemote from "../component/images/topics/undraw_Remote_design_team_re_urdx.png";
import businesswoman from "../component/images/businesswoman-using-tablet-analysis.jpg";
import { Link } from 'react-router-dom';
function CompeletLanding
() {
    return (
      <>
        <div className="compeletLanding">
          <div className="container">
            <div className="row justify-content-center">
              <Link
                to={"/web-Design"}
                className="text-decoration-none col-lg-4 col-12 mb-4 mb-lg-0"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="custom-block bg-white ">
                  <div className="d-flex">
                    <div>
                      <h5 className="text-black mb-2">Web Design</h5>

                      <p className="mb-0">
                        When you search for free CSS templates, you will notice
                        that TemplateMo is one of the best websites.
                      </p>
                    </div>

                    <span className="badge bg-design  ms-auto">14</span>
                  </div>

                  <img
                    src={imgRemote}
                    className="custom-block-image img-fluid"
                    alt=""
                  />
                </div>
              </Link>
              <div className="col-lg-6 col-12">
                <div className="custom-block  custom-block-overlay">
                  <div className="d-flex flex-column h-100">
                    <img
                      src={businesswoman}
                      className="custom-block-image-overlay img-fluid"
                      alt=""
                    />
                    <div className="custom-block-overlay-text d-flex">
                      <div>
                        <h5 className="text-white mb-2">Finance</h5>

                        <p className="text-white">
                          Topic Listing Template includes homepage, listing
                          page, detail page, and contact page. You can feel free
                          to edit and adapt for your CMS requirements.
                        </p>

                        <a href="/#" className="btn custom-btn mt-2 mt-lg-3">
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

export default CompeletLanding;
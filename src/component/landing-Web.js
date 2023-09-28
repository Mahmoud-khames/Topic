import '../style/style.css'
import imgRemote from "../component/images/topics/undraw_Remote_design_team_re_urdx.png";
import { Link } from 'react-router-dom';


function LandingWeb() {
    return (
      <>
        <div className="landing-web">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-12 mb-5">
                <div className="list">
                  <ul className="ul-list">
                    <li>
                      <Link
                        className="text-decoration-none text-black"
                        to="/"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        Homepage
                      </Link>
                    </li>
                    <li className="active">Web Design</li>
                  </ul>
                  <h2 className="text-white">Introduction to Web Design 101</h2>
                  <div className="d-flex align-items-center mt-5">
                    <Link to="/" className="btn custom-btn mt-2 mt-lg-3">
                      Learn More
                    </Link>
                    <i className="fa-regular fa-bookmark bi-bookmark"></i>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-12">
                <div class="web-details bg-white shadow-lg">
                  <img src={imgRemote} class="img-diesgn img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default LandingWeb;
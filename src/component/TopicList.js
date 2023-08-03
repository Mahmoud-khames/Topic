import '../style/style.css'
import { Link } from "react-router-dom";

function TopicsList() {
    return (
      <>
        <div className="topicslist">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12 mb-5">
                <div className="list">
                  <ul className="ul-list">
                    <li>
                      <Link className="text-decoration-none text-black" to="/">
                        Homepage
                      </Link>
                    </li>
                    <li className="active">Topics Listing</li>
                  </ul>
                  <h2 className="text-white">Topics Listing</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default TopicsList;
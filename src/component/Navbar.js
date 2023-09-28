import { useEffect } from "react";
import "../style/style.css"
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";



function Navbar() {
  let location = useLocation();
  let returHome = (title) => {
    if (
      location.pathname === "/Topics-Listing" || location.pathname === "/contact-form"
    ) {
      location.pathname = `/${title}`;
    }
  }
    window.addEventListener("scroll", function () {
        let mainNav = document.querySelector(".main-nav");
        mainNav.classList.toggle("scrolled", window.scrollY > 0);
    });
useEffect(() => {
    const navlinks = document.querySelectorAll(".navbar-nav-ul .nav-item");
    navlinks.forEach((navlink) => {
      navlink.addEventListener("click", () => {
        navlinks.forEach((navlink) => {
          navlink.classList.remove("active");
        });
        navlink.classList.add("active");
      });
    });
},[])
    return (
      <>
        <nav className="navbar navbar-expand-lg  main-nav">
          <div className="container-fluid ">
            <Link className="logo" href="/">
              <i className="fa-solid fa-biohazard"></i>
              Topic
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse main-ul"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav navbar-nav-ul me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to={"/"}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#browse-topics"
                    onClick={returHome("#browse-topics")}
                  >
                    BROWSE TOPICS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#howitwork"
                    onClick={returHome("#howitwork")}
                  >
                    HOW IT WORKS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#faqs"
                    onClick={returHome("#faqs")}
                  >
                    FAQS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#contact"
                    onClick={returHome("#contact")}
                  >
                    CONTACT
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    PAGES
                  </a>
                  <ul className="dropdown-menu dif">
                    <li>
                      <Link
                        className="dropdown-item"
                        to={"/Topics-Listing"}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        TOPICS LISTING
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to={"/contact-form"}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        CONTACT FORM
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <i className="fa-solid fa-user user"></i>
            </div>
          </div>
        </nav>
      </>
    );
}




export default Navbar;
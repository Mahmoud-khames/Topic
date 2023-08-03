import { useEffect } from "react";
import "../style/style.css"
import { Link } from "react-router-dom";



function Navbar() {
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
            <a className="logo" href="/#">
              <i className="fa-solid fa-biohazard"></i>
              Topic
            </a>
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
                  <Link className="nav-link " aria-current="page" to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#browse-topics">
                    BROWSE TOPICS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#howitwork">
                    HOW IT WORKS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faqs">
                    FAQS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    CONTACT
                  </a>
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
                      <Link className="dropdown-item" to={"/Topics-Listing"}>
                        TOPICS LISTING
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to={"/contact-form"}>
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
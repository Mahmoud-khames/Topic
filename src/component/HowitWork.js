
import { useEffect } from 'react';
import '../style/style.css'

function HowitWork() {
          useEffect(() => {
            let howitwork = document.querySelector(".howitwork ");
            let timelineli = document.querySelectorAll(".vertical-scrollable-timeline li");
            window.onscroll = () => {
              
              if (window.scrollY > howitwork.offsetTop - 100) {
                timelineli.forEach((item) => {
                  item.classList.add("active");
                });
              } else {
                timelineli.forEach((item) => {
                  item.classList.remove("active");
                });
              }
            }
            
          },[])

    return (
      <>
        <div className="howitwork mt-4" id="howitwork">
          <div className="section-overlay-howitwork"></div>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="text-white mb-4 fw-bold">How does it work?</h2>
              </div>
              <div className="col-lg-10 col-12 mx-auto">
                <div className="timeline">
                  <ul className="vertical-scrollable-timeline">
                    <div className="list-progress">
                      <div className="line"></div>
                    </div>
                    <li>
                      <h4 className="text-white mb-3">
                        Search your favourite topic
                      </h4>
                      <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis, cumque magnam? Sequi, cupiditate quibusdam
                        alias illum sed esse ad dignissimos libero sunt,
                        quisquam numquam aliquam? Voluptas, accusamus omnis?
                      </p>
                      <div className="icon-holder">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </div>
                    </li>
                    <li>
                      <h4 className="text-white mb-3">
                        Bookmark & Keep it for yourself
                      </h4>
                      <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis, cumque magnam? Sequi, cupiditate quibusdam
                        alias illum sed esse ad dignissimos libero sunt,
                        quisquam numquam aliquam? Voluptas, accusamus omnis?
                      </p>
                      <div className="icon-holder">
                        <i className="fa-regular fa-bookmark"></i>
                      </div>
                    </li>
                    <li>
                      <h4 className="text-white mb-3">Read & Enjoy</h4>
                      <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis, cumque magnam? Sequi, cupiditate quibusdam
                        alias illum sed esse ad dignissimos libero sunt,
                        quisquam numquam aliquam? Voluptas, accusamus omnis?
                      </p>
                      <div className="icon-holder">
                        <i className="fa-solid fa-book-open"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 text-center mt-5">
                <p class="text-white fs-4">
                  Want to learn more?
                  <a
                    href="/#"
                    className="btn custom-btn custom-border-btn ms-3"
                  >
                    Check out Youtube
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default HowitWork;

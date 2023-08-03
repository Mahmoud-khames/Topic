import "../style/style.css"
import businesswoman from "../component/images/businesswoman-using-tablet-analysis.jpg";
import colleagues from "../component/images/colleagues-working-cozy-office-medium-shot.jpg";



function WebDesign() {
    return (
      <>
        <div className="web-design">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-12 m-auto">
                <h2>Introduction to Web Design</h2>
                <p className="text-start">
                  So how can you stand out, do something unique and interesting,
                  build an online business, and get paid enough to change life.
                  Please visit TemplateMo website to download free website
                  templates.
                </p>
                <p className="text-start">
                  There are so many ways to make money online. Below are several
                  platforms you can use to find success. Keep in mind that there
                  is no one path everyone can take. If that were the case,
                  everyone would have a million dollars.
                </p>
                <blockquote>
                  Freelancing your skills isn’t going to make you a millionaire
                  overnight.
                </blockquote>
                <div className="row">
                  <div className="imgList col-lg-6 col-12">
                    <img src={businesswoman} className="img-fluid img-web" />
                  </div>
                  <div className="imgList col-lg-6 col-12">
                    <img src={colleagues} className="img-fluid img-web" />
                  </div>
                  <p>
                    Most people start with freelancing skills they already have
                    as a side hustle to build up income. This extra cash can be
                    used for a vacation, to boost up savings, investing, build
                    business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default WebDesign;
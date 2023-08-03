import "../style/style.css"
import rear from "../component/images/rear-view-young-college-student.jpg";



function CompleteWeb() {
    return (
      <>
        <div className="completeWeb">
          <div className="container">
            <div className="row justify-content-center">
              <div className="imgList col-lg-5 col-12">
                <img src={rear} className=" img-fluid" alt="" />
              </div>

              <div className="col-lg-5 col-12 subscribe-form-wrap d-flex justify-content-center align-items-center">
                <div
                  className="custom-form subscribe-form"
                  action="#"
                  method="post"
                  role="form"
                >
                  <h4 className="mb-4 pb-2 text-start fw-bold">Get Newsletter</h4>

                  <input
                    type="email"
                    name="subscribe-email"
                    id="subscribe-email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />

                  <div className="col-lg-12 col-12">
                    <button type="submit" className="form-control">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default CompleteWeb;
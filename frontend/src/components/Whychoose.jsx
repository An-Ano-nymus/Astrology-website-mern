import React from "react";
import choose from "../assets/images/svg/choose.svg";
import Breadcrumb from "./Breadcrumb";
const Whychoose = () => {
  return (
    <>
      <section className="as_whychoose_wrapper" id="whyus">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 text-center">
              <h1 className="as_heading">Why Choose Us</h1>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="240"
                  height="15"
                  viewBox="0 0 240 15">
                  {" "}
                  <image
                    id="Design"
                    width="240"
                    height="15"
                    xlinkHref="data:img/png;base64,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"
                  />{" "}
                </svg>
              </span>
              <p className="as_font14 as_padderTop20 as_padderBottom50">
                It is a long established fact that a reader will be distracted
                by the readable content of a page <br />
                when looking at its layout. The point of using Lorem Ipsum .
              </p>
            </div>
            <div className="col-lg-12">
              <ul className="as_choose_ul">
                <li>
                  <div className="as_whychoose_box text-center">
                    <span className="as_number">
                      <span>
                        <span data-from="0" data-to="100" data-speed="5000">
                          100
                        </span>
                        +
                      </span>
                      <img src={choose} alt="" />
                    </span>
                    <h4>Trusted by Million Clients</h4>
                  </div>
                </li>
                <li>
                  <div className="as_whychoose_box text-center">
                    <span className="as_number">
                      <span>
                        <span data-from="0" data-to="30" data-speed="5000">
                          30
                        </span>
                        +
                      </span>
                      <img src={choose} alt="" />
                    </span>
                    <h4>Years of Experience</h4>
                  </div>
                </li>
                <li>
                  <div className="as_whychoose_box text-center">
                    <span className="as_number">
                      <span>
                        <span data-from="0" data-to="55" data-speed="5000">
                          55
                        </span>
                        +
                      </span>
                      <img src={choose} alt="" />
                    </span>
                    <h4>Types of Horoscopes</h4>
                  </div>
                </li>
                <li>
                  <div className="as_whychoose_box text-center">
                    <span className="as_number">
                      <span>
                        <span data-from="0" data-to="90" data-speed="5000">
                          90
                        </span>
                        +
                      </span>
                      <img src={choose} alt="" />
                    </span>
                    <h4>Qualified Astrologers</h4>
                  </div>
                </li>
                <li>
                  <div className="as_whychoose_box text-center">
                    <span className="as_number">
                      <span>
                        <span data-from="0" data-to="99" data-speed="5000">
                          99
                        </span>
                        +
                      </span>
                      <img src={choose} alt="" />
                    </span>
                    <h4>Success Horoscope</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whychoose;

import React from "react";
import logo1 from "../assets/images/logo1.svg";
const Footer = () => {
  return (
    <>
      <section className="as_footer_wrapper as_padderTop80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="as_footer_inner as_padderTop10 as_padderBottom40">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="as_footer_widget">
                      <div className="as_footer_logo">
                        <a href="index.html">
                          <img
                            src={logo1}
                            alt=""
                          />
                        </a>
                      </div>
                      <p>
                        There are many variations of this passages of Lorem
                        Ipsum.
                      </p>

                      <ul className="as_contact_list">
                        <li>
                        <i className="fa-solid fa-location-dot" style={{color: "#ffffff",marginRight:"10px"}}></i>
                          <p>NY 10018, California, USA</p>
                        </li>
                        <li>
                        <i className="fa-solid fa-phone" style={{color: "#ffffff",marginRight:"10px"}}></i>
                          <p>
                            <a href="#">+ (91) 1800-124-105</a>
                          </p>
                        </li>
                        <li>
                        <i className="fa-solid fa-envelope" style={{color: "#ffffff",marginRight:"10px"}}></i>
                          <p>
                            <a href="#">
                              <span
                                className="__cf_email__">
                                astro@gmail.com
                              </span>
                            </a>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="as_footer_widget">
                      <h3 className="as_footer_heading">Quick Links</h3>

                      <ul>
                        <li>
                          <a href="about.html"> About Us</a>
                        </li>
                        <li>
                          <a href="blog.html"> Blog</a>
                        </li>
                        <li>
                          <a href="astrologer.html"> Astrologers</a>
                        </li>
                        <li>
                          <a href="appointment.html"> Appointment</a>
                        </li>
                        <li>
                          <a href="contact.html"> Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="as_footer_widget">
                      <h3 className="as_footer_heading">Horoscope Forecasts</h3>

                      <ul>
                        <li>
                          <a href="service_single.html"> My Daily Horoscope</a>
                        </li>
                        <li>
                          <a href="service_single.html"> My Weekly Horoscope</a>
                        </li>
                        <li>
                          <a href="service_single.html">
                            {" "}
                            My Monthly Horoscope
                          </a>
                        </li>
                        <li>
                          <a href="service_single.html"> My Love Horoscope</a>
                        </li>
                        <li>
                          <a href="service_single.html"> My Career Horoscop</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="as_footer_widget">
                      <h3 className="as_footer_heading">Our Social Medias</h3>

                      <p>
                        Lorem ipsum dolor amet, consectetur adipiscing elit,sed
                        eiusmod tempor.
                      </p>

                      <ul className="as_contact_list">
                        <li>
                        <i className="fa-brands fa-instagram" style={{color: "#ffffff",marginRight:"10px"}}></i>
                          <p>Instagram</p>
                        </li>
                        <li>
                        <i className="fa-brands fa-facebook" style={{color: "#ffffff",marginRight:"10px"}}></i>
                          <p>
                            Facebook
                          </p>
                        </li>
                        <li>
                        <i className="fa-brands fa-twitter" style={{color: "#ffffff",marginRight:"10px"}}></i>
                          <p>
                            Twitter
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="as_copyright_wrapper text-center">
                <p>Copyright &copy; 2024 Astro. All Right Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

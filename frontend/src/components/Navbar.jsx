import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
const Navbar = () => {
  return (
    <>
      <div className="as_main_wrapper ">
        <section className="as_header_wrapper d-flex align-items-center py-2">
          <div className="border-end border-1 border-dark h-100">
            <NavLink className="navbar-brand as_logo" to="/">
              <img
                src="https://www.deepakjoshiastrology.com/assets/images/logos_58_original-2-1-1.png"
                alt=""
              />
            </NavLink>
          </div>
          <div >
            <div className="as_info_detail ">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <ul>
                      <li>
                        <NavLink to="tel:+91 9414446999">
                          <div className="as_infobox">
                            <span className="as_infoicon">
                              <i
                                className="fa-solid fa-phone"
                                style={{ color: "#ffffff" }}></i>
                            </span>
                            +91 9414446999
                          </div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="https://mail.google.com/mail/?view=cm&fs=1&to=vastu.kn@gmail.com"
                          rel="noopener noreferrer">
                          <div className="as_infobox">
                            <span className="as_infoicon">
                              <i
                                className="fa-solid fa-envelope"
                                style={{ color: "#ffffff" }}></i>
                            </span>
                            <span className="__cf_email__">
                              vastu.kn@gmail.com
                            </span>
                          </div>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-8 d-flex align-items-end justify-content-end gap-5 socials">
                    <i
                      className="fa-brands fa-youtube"
                      style={{ color: "#ffffff" }}></i>
                    <i
                      className="fa-brands fa-instagram"
                      style={{ color: "#ffffff" }}></i>

                    <i
                      className="fa-brands fa-facebook"
                      style={{ color: "#ffffff" }}></i>

                    <i
                      className="fa-brands fa-twitter"
                      style={{ color: "#ffffff" }}></i>
                    <i
                      className="fa-brands fa-whatsapp"
                      style={{ color: "#ffffff" }}></i>
                    <i
                      className="fa-brands fa-linkedin"
                      style={{ color: "#ffffff" }}></i>
                  </div>
                </div>
              </div>
            </div>
            <nav
              className="navbar navbar-expand-lg"
              style={{ padding: "0 9rem" }}>
              <div className="container-fluid">
                <NavLink className="navbar-brand as_logo" to="/">
                  {/* <img
                  src={logo}
                  alt=""
                /> */}
                  {/* <img
                  src="https://www.deepakjoshiastrology.com/assets/images/logos_58_original-2-1-1.png"
                  alt=""
                /> */}
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="offcanvas offcanvas-end bg-dark"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-header">
                    <h5
                      className="offcanvas-title as_logo"
                      id="offcanvasNavbarLabel">
                      <img src={logo} alt="" />
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item">
                        <NavLink
                          className="nav-link text-white"
                          aria-current="page"
                          to="/">
                          HOME
                        </NavLink>
                      </li>
                      <li className="nav-item text-white">
                        <NavLink className="nav-link" to="/about">
                          ABOUT US
                        </NavLink>
                      </li>
                      <li className="nav-item text-white">
                        <NavLink className="nav-link" to="/service">
                          SERVICES
                        </NavLink>
                      </li>
                      <li className="nav-item text-white">
                        <NavLink className="nav-link" to="/live">
                          LIVE
                        </NavLink>
                      </li>
                      <li className="nav-item text-white">
                        <NavLink className="nav-link" to="/contact">
                          CONTACT
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;

import React from 'react'
import Gallery from "./Gallery"
import Whychoose from "./Whychoose";
import Testimonial from "./Testimonial";
import { NavLink } from 'react-router-dom';
import hand_bg from "../assets/images/hand_bg.png";
import hand from "../assets/images/hand.png";
import about1 from "../assets/images/abiout1.png";
import about from "../assets/images/svg/about.svg";


const Hero = () => {
  return (
    <>
    <section className="as_banner_wrapper" id='hero'>
        <div className="container">
          <div className="row as_verticle_center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="3000">
                    <div className="as_banner_detail">
                      <h5>Want a Better Living ?</h5>
                      <h1>
                        Start control of your <br /> professional destiny
                      </h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum.
                      </p>
                      <NavLink to="/contact" className="as_btn">
                        Appointment
                      </NavLink>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <div className="as_banner_detail">
                      <h5>What’s Your Sign ?</h5>
                      <h1>
                        Read Your Daily <br /> Horoscope Today
                      </h1>
                      <p>
                        Consectetur adipiscing elit, sed do eiusmod tempor
                        incididuesdeentiut labore etesde dolore magna
                        aliquapspendisse and the gravida.
                      </p>
                      <a href="#" className="as_btn">
                        Appointment
                      </a>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <div className="as_banner_detail">
                      <h5>What’s Your Sign ?</h5>
                      <h1>
                        Read Your Daily <br /> Horoscope Today
                      </h1>
                      <p>
                        Consectetur adipiscing elit, sed do eiusmod tempor
                        incididuesdeentiut labore etesde dolore magna
                        aliquapspendisse and the gravida.
                      </p>
                      <a href="#" className="as_btn">
                        Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="as_banner_img text-center">
                <img
                  src={hand_bg}
                  alt=""
                  className="img-responsive as_hand_bg"
                />
                <img
                  src={hand}
                  alt=""
                  className="img-responsive as_hand"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
   
    </>
  )
}

export default Hero
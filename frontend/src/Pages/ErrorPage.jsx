import React from "react";
import { NavLink } from "react-router-dom";
import circle from "../assets/images/circle.png";
import error from "../assets/images/error.png";

const ErrorPage = () => {
  return (
    <section className="as_error_wrapper ">
        <div className="as_error_detail_box text-center ">
          <img
            src={circle}
            alt=""
            className="as_circle"
          />{" "}
          <img
            src={error}
            alt=""
            className="img-responsive"
          />
          <p>Oops... Page Not Found</p>
          <div className="as_padderBottom40">
            Do not Worry. Back To Previous Pages
          </div>
          <NavLink to="/" className="as_btn mb-5">
            back to home
          </NavLink>
        </div>
      </section>
  )
}

export default ErrorPage
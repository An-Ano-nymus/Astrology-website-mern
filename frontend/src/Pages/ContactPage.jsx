import React from "react";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Breadcrumb from "../components/Breadcrumb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          errorMsg = "Name cannot be empty";
        } else if (value.trim().length < 2) {
          errorMsg = "Name should be at least 2 characters long";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
          errorMsg = "Name should only contain letters and spaces";
        } else if (value.length > 50) {
          errorMsg = "Name should not exceed 50 characters";
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          errorMsg = "Invalid email address";
        }
        break;
      case "subject":
        if (!value.trim()) {
          errorMsg = "Subject name cannot be empty";
        }
        break;
      case "message":
        if (!value.trim()) {
          errorMsg = "Message is required";
        }
        break;
      default:
        break;
    }

    return errorMsg;
  };

  const validate = () => {
    const newErrors = {};

    Object.keys(user).forEach((field) => {
      const error = validateField(field, user[field]);
      if (error) {
        newErrors[field] = error;
        toast.error(error);
      }
    });

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      axios
        .post(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, user)
        .then((res) => {
          toast.success("Message sent successfully");
          setUser({ name: "", email: "", subject: "", message: "" });
          setErrors({});
        })
        .catch((error) => {
          toast.error("There was an error sending the message!");
        });
    }
  };
  return (
    <>
    <Navbar />
    <Toaster />
      <Breadcrumb heading={"Contact Us"} link={"Contact"}/>
      <section className="as_contact_wrapper as_padderBottom40 as_padderTop50" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="as_heading as_heading_center">
                get in touch with us!
              </h1>
              <span>
                <img
                  src="data:img/png;base64,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"
                  alt=""
                />
              </span>
              <p className="as_font14 as_padderBottom50 as_padderTop20">
                Consectetur adipiscing elit, sed do eiusmod tempor
                incididuesdeentiut labore <br />
                etesde dolore magna aliquapspendisse and the gravida.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="as_contact_detail">
                <ul>
                  <li className="as_info_box">
                    <span className="as_icon">
                      <i
                        className="fa-solid fa-location-dot"
                        style={{ color: "#f4a636" }}></i>
                    </span>
                    <p>113, JA Street, United States of America</p>
                  </li>
                  <li className="as_info_box">
                    <span className="as_icon">
                      <i
                        className="fa-solid fa-phone"
                        style={{ color: "#f4a636" }}></i>
                    </span>
                    <p>+1-121-235-6245 , +1-121-235-7856</p>
                  </li>
                  <li className="as_info_box">
                    <span className="as_icon">
                      <i
                        className="fa-solid fa-envelope"
                        style={{ color: "#f4a636" }}></i>
                    </span>
                    <p>
                      <a href="#">
                        <span className="__cf_email__">astro@gmail.com</span> ,{" "}
                        <span className="__cf_email__">astro@gmail.com</span>
                      </a>
                    </p>
                  </li>
                </ul>
                <div className="as_map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.0532105637!2d75.62574614670942!3d26.88511514479519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1716967213999!5m2!1sen!2sin"
                    width="100%"
                    height="318px"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <form className="as_appointment_form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="form-control"
                    value={user.name}
                    onChange={handleChange}
                    style={{
                      border: errors.name ? "3px solid red" : "",
                      boxShadow: errors.name ? "0 0 2px 2px red" : "",
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control"
                    value={user.email}
                    onChange={handleChange}
                    style={{
                      border: errors.email ? "3px solid red" : "",
                      boxShadow: errors.email ? "0 0 2px 2px red" : "",
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="form-control"
                    value={user.subject}
                  onChange={handleChange}
                  style={{
                    border: errors.subject ? "3px solid red" : "",
                    boxShadow: errors.subject ? "0 0 2px 2px red" : "",
                  }}
                  />
                </div>
                <div className="form-group as_padderBottom10">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Message"
                    value={user.message}
                    onChange={handleChange}
                    style={{
                      border: errors.message ? "3px solid red" : "",
                      boxShadow: errors.message ? "0 0 2px 2px red" : "",
                    }}
                    ></textarea>
                </div>
                <button className="as_btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;

import React from "react";
import { useParams } from "react-router-dom";
import service1 from "../assets/images/blog_single1.jpg"
import Breadcrumb from "./Breadcrumb";

const SubServiceDetail = () => {
  const { id, index } = useParams();

  const cardData = {
    1: {
      serviceName: "Our Vastu Services",
      subCards: [
        {
          index:1,
          img: service1,
          title: "Residential Vastu",
          description:
            "Vastu for basement, kitchen, bathroom, bedroom, dinning room, pooja room etc..",
        },
        {
          index:2,
          img: service1,
          title: "Industrial Vastu",
          description:
            "Vastu for Factory Setup, Godown Area, Production, Offices, Main Gate Etc..",
        },
        {
          index:3,
          img: service1,
          title: "Land Vastu",
          description:
            "Vastu for land area, land direction, Surrounding view etc..",
        },
        {
          index:4,
          img: service1,
          title: "Reiki & Healing",
          description:
            "Reiki to help with relaxation, anxiety, pain management, depression etc..",
        },
      ],
    },
    2: {
      serviceName: "Our Astrology Services",
      subCards: [
        {
          index:1,
          img: service1,
          title: "Vedic Astrology",
          description:
            "Astrology For Health, Wealth, Marriage, Business, Education, career etc..",
        },
        {
          index:2,
          img: service1,
          title: "Horoscope",
          description:
            "Horoscope for future prediction, future plan, health problem, money problem etc..",
        },
        {
          index:3,
          img: service1,
          title: "Numerology",
          description:
            "Belief in divine or mystical relationship between a number and coinciding events.",
        },
        {
          index:4,
          img: service1,
          title: "Tarot Reading",
          description:
            "Use tarot cards to purportedly gain insight into the past, present or future.",
        },
      ],
    },
    3: {
      serviceName: "Our Vedic Services",
      subCards: [
        {
          index:1,
          img: service1,
          title: "Astrology Course",
          description:
            "This type of course teaches techniques to make predictions about future events and trends in a person's life, including career changes, and major life transitions.",
        },
        {
          index:2,
          img: service1,
          title: "Vastu Course",
          description:
            "These courses combine astrology with Vastu Shastra principles to offer guidance on architectural and spatial design for harmonious living and working environments.",
        },
        {
          index:3,
          img: service1,
          title: "Spirituality Course",
          description:
            "These courses is an educational program that focuses on the exploration of spiritual concepts, practices, and personal growth.",
        },
        {
          index:4,
          img: service1,
          title: "Numerology",
          description:
            "These course is an educational program that focuses on the study of numbers and their significance in relation to personal characteristics, life events, and destiny.",
        },
      ],
    },
    4: {
      serviceName: "Our Gems Stone Services",
      subCards: [
        {
          index:1,
          img: service1,
          title: "Gems Stone Consultation",
          description:
            "Vastu for basement, kitchen, bathroom, bedroom, dinning room, pooja room etc..",
        },
        {
          index:2,
          img: service1,
          title: "Birthstone as per Rashi",
          description:
            "Vastu for basement, kitchen, bathroom, bedroom, dinning room, pooja room etc..",
        },
        {
          index:3,
          img: service1,
          title: "Gemstones based on Horoscope",
          description:
            "Vastu for basement, kitchen, bathroom, bedroom, dinning room, pooja room etc..",
        },
        {
          index:4,
          img: service1,
          title: "Gemstones as per Problem",
          description:
            "Vastu for basement, kitchen, bathroom, bedroom, dinning room, pooja room etc..",
        },
      ],
    },
    
  };
  const cardDetails = cardData[id].subCards[index];
  return (
    <>
      <Breadcrumb heading={"Sub Service Details"} link={"Sub Service Details"}/>
      <section className="as_blog_wrapper as_padderBottom90 as_padderTop80">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12 col-md-4 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-8 col-sm-12 col-xs-12">
                <div className="as_service_single">
                  <div className="as_service_img">
                    <img
                      src={cardDetails.img}
                      alt=""
                      className="img-responsive"
                    />
                  </div>
                  <h3 className="mt-5">{cardDetails.title}</h3>
                  <div className="text-center">{cardDetails.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default SubServiceDetail;

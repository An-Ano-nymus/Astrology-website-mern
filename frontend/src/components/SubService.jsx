import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const SubService = () => {
  const { id } = useParams();
  const cardData = {
    1: {
      serviceName: "Our Vastu Services",
      subCards: [
        {
          index:1,
          img: "https://www.deepakjoshiastrology.com/assets/images/Residential.png",
          title: "Residential Vastu",
          description:
            "Vastu for basement, kitchen, bathroom, bedroom, dinning room, pooja room etc..",
        },
        {
          index:2,
          img: "https://www.deepakjoshiastrology.com/assets/images/industrial-vastu.png",
          title: "Industrial Vastu",
          description:
            "Vastu for Factory Setup, Godown Area, Production, Offices, Main Gate Etc..",
        },
        {
          index:3,
          img: "https://www.deepakjoshiastrology.com/assets/images/land.png",
          title: "Land Vastu",
          description:
            "Vastu for land area, land direction, Surrounding view etc..",
        },
        {
          index:4,
          img: "https://www.deepakjoshiastrology.com/assets/images/Reiki-hands.png",
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
          img: "https://www.deepakjoshiastrology.com/assets/images/vadic-12.48.20-PM.png",
          title: "Vedic Astrology",
          description:
            "Astrology For Health, Wealth, Marriage, Business, Education, career etc..",
        },
        {
          index:2,
          img: "https://www.deepakjoshiastrology.com/assets/images/Horoscope.png",
          title: "Horoscope",
          description:
            "Horoscope for future prediction, future plan, health problem, money problem etc..",
        },
        {
          index:3,
          img: "https://www.deepakjoshiastrology.com/assets/images/Numerology.png",
          title: "Numerology",
          description:
            "Belief in divine or mystical relationship between a number and coinciding events.",
        },
        {
          index:4,
          img: "https://www.deepakjoshiastrology.com/assets/images/Tarot-Reading.png",
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
          img: "https://www.deepakjoshiastrology.com/assets/images/Astrology-Course.png",
          title: "Astrology Course",
          description:
            "This type of course teaches techniques to make predictions about future events and trends in a person's life, including career changes, and major life transitions.",
        },
        {
          index:2,
          img: "https://www.deepakjoshiastrology.com/assets/images/Vastu-Course.png",
          title: "Vastu Course",
          description:
            "These courses combine astrology with Vastu Shastra principles to offer guidance on architectural and spatial design for harmonious living and working environments.",
        },
        {
          index:3,
          img: "https://www.deepakjoshiastrology.com/assets/images/Spirituality-Course.png",
          title: "Spirituality Course",
          description:
            "These courses is an educational program that focuses on the exploration of spiritual concepts, practices, and personal growth.",
        },
        {
          index:4,
          img: "https://www.deepakjoshiastrology.com/assets/images/Numerology.png",
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
          img: "https://www.deepakjoshiastrology.com/assets/images/gems.png",
          title: "Gems Stone Consultation",
          description:
            "Vastu for basement, kitchen, bathroom, bedroom, dinning room, pooja room etc..",
        },
        {
          index:2,
          img: "https://www.deepakjoshiastrology.com/assets/images/gems.png",
          title: "Birthstone as per Rashi",
          description:
            "Vastu for basement, kitchen, bathroom, bedroom, dinning room, pooja room etc..",
        },
        {
          index:3,
          img: "https://www.deepakjoshiastrology.com/assets/images/gems.png",
          title: "Gemstones based on Horoscope",
          description:
            "Vastu for basement, kitchen, bathroom, bedroom, dinning room, pooja room etc..",
        },
        {
          index:4,
          img: "https://www.deepakjoshiastrology.com/assets/images/gems.png",
          title: "Gemstones as per Problem",
          description:
            "Vastu for basement, kitchen, bathroom, bedroom, dinning room, pooja room etc..",
        },
      ],
    },
    
  };


  return (
    <>
      <Breadcrumb heading={"Sub Service"} link={"Sub Service"}/>
      <section
        className="as_service_wrapper as_padderTop80 as_padderBottom80"
        id="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="as_heading as_heading_center">
                {cardData[id].serviceName}
              </h1>
              <span>
                <img
                  src="data:img/png;base64,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"
                  alt=""
                />
              </span>
              <p className="as_font14 as_padderTop20 as_padderBottom20">
                Consectetur adipiscing elit, sed do eiusmod tempor
                incididuesdeentiut labore <br />
                etesde dolore magna aliquapspendisse and the gravida.
              </p>
            </div>
          </div>

          <div className="row as_verticle_center">
            {cardData[id].subCards.map((subCard, index) => (
              <div key={index} className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="as_service_box text-center">
                  <span className="as_icon">
                    <img src={subCard.img} alt="" width={90} height={80} />
                  </span>
                  <h4 className="as_subheading">{subCard.title}</h4>
                  <p className="as_paddingBottom10">{subCard.description}</p>
                  <NavLink to={`/subdetail/${id}/${index}`} className="as_link">
                    Read more{" "}
                    <i
                      className="fa-solid fa-arrow-right mx-2"
                      style={{ marginTop: "6px" }}></i>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
};

export default SubService;

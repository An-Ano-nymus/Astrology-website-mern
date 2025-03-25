import React from "react";
import Breadcrumb from "./Breadcrumb";
import { useParams } from "react-router-dom";
const CourseDetail = () => {
  const { id } = useParams();
  const subCards = {
    1: {
      img: "http://localhost:5173/src/assets/images/blog_single1.jpg",
      price: 1000,
      courseName: "Course Name1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste repellendus itaque quam doloribus dolores velit, quo quae earum nobis! Adipisci, vel provident! Quasi autem, beatae perferendis nisi placeat ea facilis!",
    },

    2: {
      img: "http://localhost:5173/src/assets/images/blog_single1.jpg",
      price: 4500,
      courseName: "Course Name2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste repellendus itaque quam doloribus dolores velit, quo quae earum nobis! Adipisci, vel provident! Quasi autem, beatae perferendis nisi placeat ea facilis!",
    },

    3: {
      img: "http://localhost:5173/src/assets/images/blog_single1.jpg",
      price: 8000,
      courseName: "Course Name3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste repellendus itaque quam doloribus dolores velit, quo quae earum nobis! Adipisci, vel provident! Quasi autem, beatae perferendis nisi placeat ea facilis!",
    },
  };
  const cardDetails = subCards[id];
  return (
    <>
      <Breadcrumb heading={"Course Detail"} link={"Course Detail"} />
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
                  <h3 className="mt-5">{cardDetails.courseName}</h3>
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

export default CourseDetail;

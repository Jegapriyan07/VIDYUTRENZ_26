import React from "react";
import "./About.css";
import AboutImage1 from "../../assets/about_img_1.png";

const About = () => {
  return (
    <div
      className="about-section"
      id="about"
    >
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <h2 className="about-title">About Us</h2>
            <div className="title-underline"></div>
          </div>

          <h3 className="about-description">
            At Vidyutrenz, we are at the forefront of electronics engineering and technology,
            delivering innovative, scalable, and efficient solutions that drive system performance
            and operational efficiency.
            <br /><br />
            Our mission is to advance the industry through intelligent products and services
            built on precision design, robust architecture, and reliable implementation,
            ensuring high standards of performance and dependability.
          </h3>
        </div>

        <div className="about-slider">
          <div className="slider-container">
            <img
              src={AboutImage1}
              alt="About us"
              className="slider-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
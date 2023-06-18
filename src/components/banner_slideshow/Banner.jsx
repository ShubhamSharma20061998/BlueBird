import React from "react";
import Carousel from "react-bootstrap/Carousel";
import raditionSafety from "../../assets/3rd-slider-desktop.jpg";
import growingUp from "../../assets/banner-1.jpg";
import futureReadySaftey from "../../assets/slider-2.1-red.jpg";
import "./banner.css";

const Banner = () => {
  const slideshow = [
    {
      image: growingUp,
      heading: "Welcome to Blue Bird The Way we growing up",
      text_content:
        "Blue Bird is one of the world’s top-notch radiation & safety protection Organization. We are recognized as the global benchmark in the arena of verification, inspection, non-destructive testing, nuclear safety, testing and measurement etc.",
    },
    {
      image: raditionSafety,
      heading: "Radition Safety is a Mandatory key for the future",
      text_content:
        "Radiation Safety is a shielding applied to all activities involving ionizing radiation or radioactive materials. It is beneficial for providing occupational safety and protecting the environment from undue radiation hazards.",
    },
    {
      image: futureReadySaftey,
      heading: "Ensure Safety and Be ready for the Future.",
      text_content:
        "QADR stands for Quality Assurance in Diagnostic Radiology. It ensures radiation safety and protection at diagnostic and health care centers. Quality Assurance is the need of the hour.",
    },
  ];
  return (
    <div className="container-fluid slideShowContainer">
      <Carousel variant="dark">
        {slideshow?.map(({ image, heading, text_content }) => {
          return (
            <Carousel.Item key={image} interval={8000}>
              <img
                className="d-block w-100 slideImage"
                src={image}
                alt="First slide"
              />
              <div className="textContainer row">
                <div className="col-md-4 col-11">
                  <h2>{heading}</h2>
                  <p>{text_content}</p>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;

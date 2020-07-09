import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 40
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{ overflow: "hidden", height: `${window.innerHeight}px` }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`
            }}
          >
            {" "}
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;

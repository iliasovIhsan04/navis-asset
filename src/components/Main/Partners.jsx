import React from "react";
import Slider from "react-slick";
import manas from "../../assets/img/manas-img.svg";
import gasprom from "../../assets/img/gasprom-img.svg";
import kyrgyzAero from "../../assets/img/kyrgys-aero.svg";
import mmc from "../../assets/img/mmc-img.svg";
import kyrgysAvias from "../../assets/img/kyrgys-avias.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Partners = () => {
  const settingsLeft = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="partners">
      <div className="slider-auto-play">
        <Slider {...settingsLeft}>
          <div>
            <img src={manas} alt="" />
          </div>
          <div>
            <img src={gasprom} alt="" />
          </div>
          <div>
            <img src={kyrgyzAero} alt="" />
          </div>
          <div>
            <img src={mmc} alt="" />
          </div>
          <div>
            <img src={kyrgysAvias} alt="" />
          </div>
          <div>
            <img src={manas} alt="" />
          </div>
          <div>
            <img src={kyrgyzAero} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Partners;

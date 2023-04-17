import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import uiux from "../../img/uiux.png";
import portpholio from "../../img/portpholio.png";
import JumpGame from "../../img/jumpGame.png";
import TripForm from "../../img/tripform.png";
import Ecommerce from "../../img/ecommerce.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={uiux} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portpholio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={JumpGame} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TripForm} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

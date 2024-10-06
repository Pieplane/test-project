import React, { useState } from "react";
import Slider from "react-slick";
import '../styles/components/slider.css';

// Импорт CSS для слайдера
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { src: "/images/10.png", width: "146px", height: "44px" },
    { src: "/images/11.png", width: "171px", height: "47px" },
    { src: "/images/12.png", width: "131px", height: "42px" },
    { src: "/images/13.png", width: "171px", height: "40px" },
    { src: "/images/14.png", width: "102.08px", height: "57px" },
  ];

  const settings = {
    centerMode: true,
    centerPadding: "100px", // Оставим отступ для центрирования
    slidesToShow: 1, // Один слайд на экране
    infinite: true,
    focusOnSelect: true,
    speed: 500, // Плавное переключение
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="slide-container"
          style={{ width: `${parseFloat(slide.width)}`, height: `${parseFloat(slide.height)}` }} // Уникальный размер для каждого контейнера
        >
          <img src={slide.src} alt={`slide-${index}`} className={index===activeSlide ? "slide-image-active" : "slide-image-inactive" } />
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
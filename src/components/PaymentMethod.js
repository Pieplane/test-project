import React from "react";
import Slider from "react-slick";
import '../styles/components/paymentMethod.css';

// Импорт CSS для слайдера
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PaymentSlider = () => {
    const slides = [
        { src: "/images/pmx-logo-amex.png" },
        { src: "/images/pmx-logo-paywithgoogle 1.png" },
        { src: "/images/pmx-logo-sofort.png" },
        { src: "/images/pmx-logo-union-pay 1.png" },
        { src: "/images/pmx-logo-visa.png" },
        { src: "/images/pmx-logo-mastercard.png" },
    ];

    const settings = {
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 1,
        infinity: true,
        focusOnSelect: true,
        speed: 500,
    }

    return (
        <div className="paymentBox">
            <div className="paymentText">
            Payment method
            </div>
            <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index} className="slide-container-payment">
                    <img src={slide.src} alt={`slide-${index}`} className="slide-image-payment" />
                </div>
            ))}
        </Slider>
        <div className="payment-sepline">
            <img src="images/Sepline.png" alt="Sepline" />  
        </div>
        </div>
        
    )
}

export default PaymentSlider;
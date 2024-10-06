import React from "react";
import '../styles/components/partners.css';
import CustomSlider from "./Slider";

const Partners = () => {
    return (
        <div className="partnersBox">
            <div className="letsCollaborate">
                <img src="images/Let's collaborate.png" alt="Let's collaborate" />
            </div>
            <div className="ourPartnersText">
                Our Partners
            </div>
            <CustomSlider />
        </div>
    );
}

export default Partners;
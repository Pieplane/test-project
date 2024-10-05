
import '../styles/components/tabs.css';
import React, { useState } from 'react';

const Tabs = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const toggleImage = (index) => {
    setActiveImageIndex(prevIndex => (prevIndex === index ? null : index))
  }

  return (
    <div>
      <div className="tab-content">
        <img src="/images/On foot.png" alt="frame" className="tab-onFoot"  onClick={() => toggleImage(0)} style={{ cursor: 'pointer' }} />
        <img src="/images/Car.png" alt="frame" className="tab-car"  onClick={() => toggleImage(1)} style={{ cursor: 'pointer' }} />
        <img src="/images/Truck.png" alt="frame" className="tab-truck"  onClick={() => toggleImage(2)} style={{ cursor: 'pointer' }} />
            {activeImageIndex === 0 && (
                <div>
                    <img src="/images/btn1.png" alt="frame" className="tab-choice1"/> 
                    <img src="/images/On foot.png" alt="frame" className="tab-onFoot"/>
                </div>)}
            {activeImageIndex === 1 && (
                <div>
                    <img src="/images/btn1.png" alt="frame" className="tab-choice2"/> 
                    <img src="/images/Car.png" alt="frame" className="tab-car"/>
                </div>)}
            {activeImageIndex === 2 && (
                <div>
                    <img src="/images/btn1.png" alt="frame" className="tab-choice3"/> 
                    <img src="/images/Truck.png" alt="frame" className="tab-truck"/>
                </div>)}
            {activeImageIndex === null && (
                <div>
                    <img src="/images/btn1.png" alt="frame" className="tab-choice1"/> 
                    <img src="/images/On foot.png" alt="frame" className="tab-onFoot"/>
                </div>
            )}
      </div>
    </div>
  );
};

export default Tabs;
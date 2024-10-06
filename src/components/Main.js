import '../styles/components/main.css';
import Tabs from './tabs';
import Form from './Form';
import React, {useEffect, useState, useRef} from 'react';

const GetStarted = () =>{
    const [isExpanded, setIsExpanded] = useState(false);
  const [textHeight, setTextHeight] = useState(0);
  const textRef = useRef(null); // Ссылка на текстовый блок

  useEffect(() => {
    // Обновляем высоту блока с текстом при изменении состояния
    if (textRef.current) {
      setTextHeight(textRef.current.scrollHeight);
    }
  }, [isExpanded]);

    return(
    <div className='main'>
        <div className='main__pad'>
            <div className='getStarted'>
                <div className='lets'>
                    Send a Parcel
                </div>
                <div className='i'>
                    <div class="tooltip-container-i">
                    <img src="images/i.png" alt="i" style={{ cursor: 'pointer' }}/>
                        <div class="tooltip-i">A commission is a piece of work that someone is asked to do and is paid for.</div>
                    </div>
                    
                </div>
                <div className='pin'>
                <img src="images/Pin.png" alt="Pin" />
                    </div>
                    <div className='pin1'>
                <img src="images/Pin1.png" alt="Pin1" />
                    </div>
                    <div className='vector'>
                <img src="images/Vector.png" alt="Vector" />
                    </div>
            <div className='pad'></div>
            <Tabs />
            <Form />

            </div>
            <img src="images/Track.png" alt="Track" className='track' />
            <div className='info'>
                <div className='expressText'>
                    Our service started work in New York
                </div>
                <div className='deliveryText'>
                We make delivery exactly at the time you need - we can start to fulfill the order a few minutes after it arrives, or we can deliver on a specific day and hour.
                </div>
                <div className='readMoreText'>
                    Read more
                </div>
                <div className='vectorReadMore'>
                    <img src="images/VectorReadMore.png" alt="Vector" />
                </div>
            </div>
            <div className='city'>
                <img src="images/city1.png" alt="city" />
            </div> 
            <div className='howItWorksText'>
                How it works
            </div>
            <div className='video'>
                <img src="images/video.png" alt="video" />
            </div>
            <div className='pagging'>
                <img src="images/Pagging.png" alt="pagging" />
            </div>
        </div>
        


        <div className='aboutUs'>
        <div className="text-toggle-container">
      <div
        ref={textRef}
        className={`text-content ${isExpanded ? 'expanded' : 'collapsed'}`}
        style={{ maxHeight: isExpanded ? `${textHeight}px` : '100px' }} // Изменяем высоту блока
      >
        {isExpanded ? "Since 2019, LibertyWalk has successfully provided express courier delivery services in the city for both individuals and legal entities, and is also a reliable logistics partner for delivery services for online stores and restaurants! Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases, flowers, food, gifts and goods up to 1.5 tons - the most frequent orders in our company. But at the same time, we do not limit the range of courier services and without problems we can buy and bring goods and products from the online store, arrange delivery for the online store, cafe, supermarket, restaurant or any other business. Around the clock on our website you can call a courier in just a minute and arrange an express courier delivery without unnecessary bureaucracy, negotiations and calls to the call center." : "Since 2019, LibertyWalk has successfully provided express courier delivery services in the city for both individuals and legal entities, and is also a reliable logistics partner for delivery services for online stores and restaurants! Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases, flowers, food, gifts and goods up to 1.5 tons - the most frequent orders in our company."}
      </div>
      <div
        className="toggle-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        
        <img src="images/ETC.png" alt="ETC" />
      </div>
    </div>
        </div>

        
    </div>
)}

export default GetStarted;
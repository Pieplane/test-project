import '../styles/components/main.css';
import Tabs from './tabs';
import Form from './Form';

const GetStarted = () =>(
    <div className='main'>
        <div className='main__pad'>
            <div className='getStarted'>
                <div className='lets'>
                    Send a Parcel
                </div>
                <div className='i'>
                    <img src="images/i.png" alt="i" />
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
        
    </div>
)

export default GetStarted;
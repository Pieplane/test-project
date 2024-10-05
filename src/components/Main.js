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
            
        </div>
        
    </div>
)

export default GetStarted;
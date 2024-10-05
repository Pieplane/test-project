import '../styles/components/main.css';
import Tabs from './tabs';

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
            <div className='pad'></div>
            <Tabs />
            </div>
            
        </div>
        
    </div>
)

export default GetStarted;
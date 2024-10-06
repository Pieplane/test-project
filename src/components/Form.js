import React, {useState} from "react";
import '../styles/components/form.css';

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleInputChange1 = (e) => {
        setInputValue1(e.target.value);
    };

    const clearInput = () => {
        setInputValue('');
        setInputValue1('');
    };

    return (
        <div>
        <div className="from">
            <div className="pickUpLocation">
                PICKUP LOCATION
            </div>
            <div className="input1" img src="/images/input.png" alt="input" />
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter value"
                className="inputPickUp"
                />
        </div>

        <div className="to">
            <div className="dropLocation">
                DROP LOCATION
            </div>
            <div className="input1" img src="/images/input.png" alt="input" />
            <input
                type="text"
                value={inputValue1}
                onChange={handleInputChange1}
                placeholder="Enter value"
                className="inputDrop"
                />
        </div>
        <div className="btn_order" style={{ cursor: 'pointer' }}>
            <div className="btn_request"> 
                Order
            </div>
            <div className="btn_fill" >
            </div>
        </div>
        <div className="clearAll">
            
        </div>
        <div className="vectorClear" img src="/images/Vector1.png" alt="clear" />
        <div className="clearAllText" onClick={clearInput} style={{ cursor: 'pointer' }}>
            Clear All
        </div>
        </div>
    );
};

export default Form;
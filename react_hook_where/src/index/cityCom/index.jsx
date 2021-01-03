import React from 'react';
import './index.css'
import switchImg from '../img/switch.svg'
const City = (props) => {
    const { from, to, exchangeFromTo, showCitySelector } = props;
    return (
        <div className='journey'>
            <div className='journey' onClick={() => { showCitySelector(true) }} >
                <input
                    name="from"
                    type="text"
                    readOnly
                    value={from}
                    className='journey-input journey-from'
                />
            </div>
            <div className='journey-switch' onClick={() => { exchangeFromTo() }}>
                <img src={switchImg} width="70" height="40" alt="switch" />
            </div>
            <div className="journey-station" onClick={() => { showCitySelector(false) }}>
                <input type="text"
                    readOnly
                    name='to'
                    value={to}
                    className="journey-input journey-to" />
            </div>
        </div>
    );
}

export default City;
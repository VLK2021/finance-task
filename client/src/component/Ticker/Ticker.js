import React, {useEffect, useState} from 'react';

import './TickerStyle.css';


const Ticker = ({tick}) => {
    const [lastChange, setLastChange] = useState(tick.change);
    const [percent, setPercent] = useState(tick.change_percent);
    const [colorChange, setColorChange] = useState('');
    const [operation, setOperation] = useState('');

    useEffect(() => {
        if (tick.change > lastChange) {
            setColorChange('green');
            setOperation('+');
        } else {
            setColorChange('red');
            setOperation('-');
        }
        setLastChange(tick.change);
    }, [tick.change]);

    useEffect(() => {
        if (tick.change_percent > percent) {
            setColorChange('green');
            setOperation('+');
        } else {
            setColorChange('red');
            setOperation('-');
        }
        setLastChange(tick.change_percent);
    }, [tick.change_percent]);


    const changeName = (ticker) => {
        switch (ticker) {
            case 'AAPL':
                return 'Apple';
            case 'GOOGL':
                return 'Google';
            case 'MSFT':
                return 'Microsoft';
            case 'AMZN':
                return 'Amazon';
            case 'FB':
                return 'Facebook';
            case 'TSLA':
                return 'Tesla';
            default:
                return '';
        }
    };


    return (
        <div className={'ticker'}>
            <h4>{tick.ticker} </h4>
            <h4>{tick.exchange} </h4>
            <h4>{changeName(tick.ticker)}</h4>
            <h4>{tick.price} $</h4>
            <h4 className={colorChange}>{operation + tick.change} $</h4>
            <h4 className={colorChange}>{operation + tick.change_percent} %</h4>
            <h4>{tick.dividend}</h4>
            <h4>{tick.yield}</h4>
            <h4>{tick.last_trade_time}</h4>
        </div>
    );
};

export default Ticker;
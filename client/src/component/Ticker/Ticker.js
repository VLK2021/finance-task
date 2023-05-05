import React from 'react';

import './TickerStyle.css';


const Ticker = ({tick}) => {

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
            <h4>{tick.change} $</h4>
            <h4>{tick.change_percent} %</h4>
            <h4>{tick.dividend}</h4>
            <h4>{tick.yield}</h4>
            <h4>{tick.last_trade_time}</h4>
        </div>
    );
};

export default Ticker;
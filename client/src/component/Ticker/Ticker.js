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
            <h2>{changeName(tick.ticker)}</h2>
            <h3>{tick.ticker} </h3>
            <div>Price: {tick.price} $</div>
            <div>Change %: {tick.change_percent}</div>
            <div>Dividend: {tick.dividend}</div>
            <div>Date and time: {tick.last_trade_time}</div>
        </div>
    );
};

export default Ticker;
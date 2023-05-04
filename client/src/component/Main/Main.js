import React, {useEffect} from 'react';
import {io} from "socket.io-client";
import {useDispatch, useSelector} from "react-redux";

import {getTickers} from "../../store/tickerSlice";


const Main = () => {
    const dispatch = useDispatch();
    const {tickers} = useSelector(store => store.tickers);
    console.log(tickers, 'tickers');

    useEffect(() => {
        const socket = io('http://localhost:4000/');
        socket.on('connect', () => console.log(socket.connected));
        socket.emit('start')
        socket.on('ticker', function (data) {
            console.log(data);
            dispatch(getTickers(data));
        });
    }, []);

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
        <div className={'main'}>
            <h1>finance test task</h1>
            {
                tickers && tickers.map(tick => {
                    return (
                        <div>{changeName(tick.ticker)}</div>
                    )
                })
            }
        </div>
    );
};

export default Main;
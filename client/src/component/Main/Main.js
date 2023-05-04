import React, {useEffect} from 'react';
import {io} from "socket.io-client";
import {useDispatch, useSelector} from "react-redux";

import {getTickers} from "../../store/tickerSlice";
import './MainStyle.css';
import Ticker from "../Ticker/Ticker";


const Main = () => {
    const dispatch = useDispatch();
    const {tickers} = useSelector(store => store.tickers);

    useEffect(() => {
        const socket = io('http://localhost:4000/');
        socket.on('connect', () => console.log(socket.connected));
        socket.emit('start')
        socket.on('ticker', function (data) {
            dispatch(getTickers(data));
        });
    }, []);


    return (
        <div className={'main'}>
            <h1>finance test task</h1>

            <div className={'block'}>{
                tickers && tickers.map(tick => <Ticker tick={tick}/>)
            }</div>
        </div>
    );
};

export default Main;
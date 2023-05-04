import {configureStore} from "@reduxjs/toolkit";

import tickerReducer from "./tickerSlice";


const store = configureStore({
    reducer: {
        tickers: tickerReducer
    }
})

export default store;
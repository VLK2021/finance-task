import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    tickers: []
}


const tickerSlice = createSlice({
    name: 'tickerSlice',
    initialState,
    reducers: {
        getTickers: (state, action) => {
            state.tickers = action.payload;
        }
    }
});

export const {getTickers} = tickerSlice.actions;
const tickerReducer = tickerSlice.reducer;
export default tickerReducer;
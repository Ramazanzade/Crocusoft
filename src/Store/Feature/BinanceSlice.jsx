import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, END_POINT } from '../../Service/constant';
export const fetchBinanceData = createAsyncThunk(
  'binance/fetchData',
  async (symbol) => {
    const response = await axios.get(`${BASE_URL}${END_POINT.limit}${symbol}&limit=100`);
    return response.data;
  }
);

const initialState = {
  data: [],
  status: 'idle',
  error: null
};

const binanceSlice = createSlice({
  name: 'binance',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBinanceData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBinanceData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchBinanceData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const binanceReducer = binanceSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, END_POINT } from '../../Service/constant';
export const fetchSelectData = createAsyncThunk(
  'Select/fetchData',
  async () => {
    const response = await axios.get(`${BASE_URL}${END_POINT.symbol}`);
    return response.data.symbols;
  }
);

const initialState = {
  data: [],
  status: 'idle',
  error: null
};

const SelectSlice = createSlice({
  name: 'Select',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelectData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSelectData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSelectData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const SelectReducer = SelectSlice.reducer;

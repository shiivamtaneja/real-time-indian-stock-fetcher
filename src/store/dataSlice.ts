import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StockData {
  _id: string;
  symbol: string;
  price: number;
  timestamp: string;
}

interface DataState {
  data: StockData[];
}

const initialState: DataState = {
  data: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<StockData[]>) {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
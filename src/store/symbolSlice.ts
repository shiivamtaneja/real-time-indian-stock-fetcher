import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Symbols } from '@/lib/types';

interface SymbolData {
  symbol: Symbols;
}

interface DataState {
  data: SymbolData;
}

const initialState: DataState = {
  data: {
    symbol: 'TCS'
  },
};

const symbolSlice = createSlice({
  name: 'symbol',
  initialState,
  reducers: {
    setSymbol(state, action: PayloadAction<SymbolData>) {
      state.data = action.payload
    }
  }
})

export const { setSymbol } = symbolSlice.actions;

export default symbolSlice.reducer;
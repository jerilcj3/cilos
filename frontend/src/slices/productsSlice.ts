import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface productState {
  enterprise_id: number;
}

const initialState: productState = {
  enterprise_id: 36165,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    saveEnterpriseID: (state, action: PayloadAction<number>) => {
      state.enterprise_id = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveEnterpriseID } = productsSlice.actions;

export default productsSlice.reducer;

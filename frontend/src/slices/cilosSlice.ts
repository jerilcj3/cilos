import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface cilosState {
  country: string;
  enterprise_type: string;
  executive: string;
  status: string;
  //from_date: Date;
  //to_date: Date;
}

const initialState: cilosState = {
  country: 'india',
  enterprise_type: 'sme',
  executive: 'test',
  status: 'closed lost',
  //from_date: new Date(2021, 9, 11),
  //to_date: new Date(2021, 9, 11),
};

export const cilosSlice = createSlice({
  name: 'cilos',
  initialState,
  reducers: {
    saveFormValues: (state, action: PayloadAction<cilosState>) => {
      state.country = action.payload.country;
      state.enterprise_type = action.payload.enterprise_type;
      state.executive = action.payload.executive;
      state.status = action.payload.status;
      //state.from_date = action.payload.from_date;
      //state.to_date = action.payload.to_date;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveFormValues } = cilosSlice.actions;

export default cilosSlice.reducer;

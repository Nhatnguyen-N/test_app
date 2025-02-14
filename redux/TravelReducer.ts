import { PayloadAction } from '@reduxjs/toolkit/src/createAction';
import { createSlice } from './../node_modules/@reduxjs/toolkit/src/createSlice';
import { TravelItem, travelItemParams } from '@/types/type';
export const TravelSlice = createSlice({
  name: "travel",
  initialState: {
    travel: {},
  },
  reducers: {
    setTravel: (state, action: PayloadAction<travelItemParams>) => {

      state.travel = action.payload
    }
  }
});
export const { setTravel } = TravelSlice.actions;
export default TravelSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timeZoneList: [],
  timeObj: {},
  time: ''
};

export const TimeZoneListingSlice = createSlice({
  name: 'Users Directory',
  initialState,
  reducers: {
    setTimeZoneList: (state, { payload }) => {
      return {
        ...state,
        timeZoneList: payload
      };
    },
    setTimeObj: (state, { payload }) => {
      return {
        ...state,
        timeObj: payload
      };
    },
    setTime: (state, { payload }) => {
      return {
        ...state,
        time: payload
      };
    }
  }
});

export const { setTimeZoneList, setTimeObj, setTime } = TimeZoneListingSlice.actions;
export default TimeZoneListingSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timeZoneList: [],
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
    setTime: (state, { payload }) => {
      return {
        ...state,
        time: payload
      };
    }
  }
});

export const { setTimeZoneList, setTime } = TimeZoneListingSlice.actions;
export default TimeZoneListingSlice.reducer;

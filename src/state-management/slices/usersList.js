import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usersListingData: [],
  UserDetails: {}
};

export const UsersListingSlice = createSlice({
  name: 'Users Directory',
  initialState,
  reducers: {
    setUsersList: (state, { payload }) => {
      return {
        ...state,
        usersListingData: payload
      };
    },
    setUserDetails: (state, { payload }) => {
      return {
        ...state,
        UserDetails: payload
      };
    }
  }
});

export const { setUsersList, setUserDetails } = UsersListingSlice.actions;
export default UsersListingSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postsListingData: [],
  postsDetails: []
};

export const PostsListingSlice = createSlice({
  name: 'Posts Directory',
  initialState,
  reducers: {
    setPostsList: (state, { payload }) => {
      return {
        ...state,
        postsListingData: payload
      };
    },
    setPostsDetails: (state, { payload }) => {
      return {
        ...state,
        postsDetails: payload
      };
    }
  }
});

export const { setPostsList, setPostsDetails } = PostsListingSlice.actions;
export default PostsListingSlice.reducer;

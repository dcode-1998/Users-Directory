import axios from 'axios';
import { setPostsList } from '../slices/postsList';

import ErrorHandler from '../../utils/error_handler';

export const postList = input => async dispatch => {
  try {
    for (let key in input) {
      if (input[key] === '' || input[key] === undefined || input[key] === null) {
        delete input[key];
      }
    }

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPostsList(response.data));
  } catch (err) {
    ErrorHandler(err);
  }
};

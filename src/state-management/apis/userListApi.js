import axios from 'axios';
import { setUsersList } from '../slices/usersList';

import ErrorHandler from '../../utils/error_handler';

export const usersList = input => async dispatch => {
  try {
    for (let key in input) {
      if (input[key] === '' || input[key] === undefined || input[key] === null) {
        delete input[key];
      }
    }

    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(setUsersList(response.data));
  } catch (err) {
    ErrorHandler(err);
  }
};

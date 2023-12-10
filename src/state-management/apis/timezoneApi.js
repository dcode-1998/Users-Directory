import ErrorHandler from '../../utils/error_handler';
import { setTime, setTimeObj, setTimeZoneList } from '../slices/timeZoneList';

export const timeZoneList = () => async dispatch => {
  try {
    fetch('http://worldtimeapi.org/api/timezone')
      .then(res => res.json())
      .then(item => dispatch(setTimeZoneList(item)));
  } catch (err) {
    ErrorHandler(err);
  }
};

export const getTime = input => async dispatch => {
  try {
    fetch(`http://worldtimeapi.org/api/timezone/${input}`)
      .then(res => res.json())
      .then(item => {
        dispatch(setTimeObj(item));

        console.log('itemTImw', item.datetime);
        let date = item.datetime.split('T')[0];
        let time = item.datetime.split('T')[1].split('.')[0];
        dispatch(setTime(time));
      });
  } catch (err) {
    ErrorHandler(err);
  }
};

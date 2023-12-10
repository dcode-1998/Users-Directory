import moment from 'moment';
import ErrorHandler from '../../utils/error_handler';
import { setTime, setTimeZoneList } from '../slices/timeZoneList';

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
        let date = item.datetime.split('T')[0];
        let time = item.datetime.split('T')[1].split('.')[0];
        let newDate = `${date} ${time}`;
        let unixTimeStamp = moment(newDate, 'YYYY-MM-DD HH:mm:ss').unix();
        dispatch(setTime(unixTimeStamp));
      });
  } catch (err) {
    ErrorHandler(err);
  }
};

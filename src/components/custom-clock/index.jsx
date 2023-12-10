import { useEffect, useReducer } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTime, timeZoneList } from '../../state-management/apis/timezoneApi';
import { setTime } from '../../state-management/slices/timeZoneList';

const CustomClock = props => {
  const dispatch = useDispatch();
  const timeZoneListData = useSelector(state => state.timeZoneList.timeZoneList);
  const cTime = useSelector(state => state.timeZoneList.time);
  const initialState = {
    isPlay: true,
    timeZones: [],
    selectedTimeZone: 'Africa/Abidjan',
    time: '',
    count: 1
  };

  const [state, updateState] = useReducer((prev, next) => {
    let updateState = { ...prev, ...next };
    return updateState;
  }, initialState);

  useEffect(() => {
    dispatch(timeZoneList());
  }, []);

  useEffect(() => {
    updateState({ timeZones: timeZoneListData });
  }, [timeZoneListData]);

  useEffect(() => {
    dispatch(getTime(state.selectedTimeZone));
  }, [state.selectedTimeZone]);

  const clockPlay = () => {
    updateState({ isPlay: !state.isPlay });
    dispatch(setTime(state.time));
  };

  useEffect(() => {
    console.log('time', state.time, new Date((cTime + state.count) * 1000).toLocaleTimeString());
    if (state.isPlay) {
      const id = setInterval(() => {
        // setTime(() => new Date().toLocaleTimeString());
        updateState({
          time: new Date((cTime + state.count) * 1000).toLocaleTimeString(),
          count: state.count + 1
        });
      }, 1000);
      return () => clearInterval(id);
    }
  }, [state.isPlay, state.time]);

  // const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect(() => {}, []);

  useEffect(() => {
    console.log('time123', cTime);
    updateState({ time: cTime });
  }, [cTime]);

  return (
    <div className='clock-content'>
      <div style={{ display: 'flex' }}>
        <select
          value={state.selectedTimeZone}
          onChange={e => {
            updateState({ selectedTimeZone: e.target.value });
          }}
        >
          {state.timeZones.map(item => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div style={{ display: 'flex' }}>{state.time}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => clockPlay()}>{state.isPlay ? 'Pause' : 'Play'}</button>
      </div>
    </div>
  );
};
export default CustomClock;

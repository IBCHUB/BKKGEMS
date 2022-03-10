import {combineReducers} from 'redux';

const LoadingCounters = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.score;
    case 'DECREMENT':
      return state - action.score;
    default:
      return state;
  }
};

export default combineReducers({
  LoadingCounters,
});

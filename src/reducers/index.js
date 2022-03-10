import {combineReducers} from 'redux';
import authReducer from './auth.reducer';
import dataReducer from './data.reducer';

const AppReducer = combineReducers({
  authReducer,
  dataReducer,
});
export default AppReducer;

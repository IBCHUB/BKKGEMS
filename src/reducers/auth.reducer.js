import {combineReducers} from 'redux';

const authData = (state = {}, action) => {
  switch (action.type) {
    case 'AUTH_USER_SUCCESS':
      return {
        token: action.token,
        isLoggedIn: true,
      };

    case 'AUTH_USER_FAIL':
      return {
        token: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default combineReducers({
  authData,
});

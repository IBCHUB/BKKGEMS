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

const authSso = (state = {}, action) => {
  switch (action.type) {
    case 'AUTH_USER_SSO':
      return {
        token: action.token,
        isLoggedIn: true,
      };
    case 'AUTH_USER_SSOFAIL':
      return {
        token: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
console.log('111', authSso);

const authUser = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return {
        token: action.token,
        isLoggedIn: true,
      };

    case 'GET_USER_FAIL':
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
  authUser,
});

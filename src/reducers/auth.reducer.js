import {combineReducers} from 'redux';

const authData = (state = {}, action) => {
  switch (action.type) {
    case 'AUTH_USER_SUCCESS':
      return {
        token: action.token,
        isLoggedIn: true,
        isSkip: false,
      };
    case 'AUTH_USER_SKIP':
      return {
        token: null,
        isLoggedIn: false,
        isSkip: true,
      };
    case 'AUTH_USER_FAIL':
      return {
        token: null,
        isLoggedIn: false,
        isSkip: false,
      };
    default:
      return state;
  }
};

// const authSso = (state = {}, action) => {
//   switch (action.type) {
//     case 'AUTH_USER_SSO':
//       return {
//         token: action.token,
//         isLoggedIn: true,
//       };
//     case 'AUTH_USER_SSOFAIL':
//       return {
//         token: null,
//         isLoggedIn: false,
//       };

//     default:
//       return state;
//   }
// };

const authUser = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return {
        token: action.token,
        isLoggedIn: true,
        isSkip: false,
      };
    case 'GET_USER_SKIP':
      return {
        token: null,
        isLoggedIn: false,
        isSkip: true,
      };

    case 'GET_USER_FAIL':
      return {
        token: null,
        isLoggedIn: false,
        isSkip: false,
      };

    default:
      return state;
  }
};
const authChat = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CHAT_SUCCESS':
      return {
        token: action.token,
        isLoggedIn: true,
      };
    case 'GET_CHAT_FAIL':
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
  authChat,
});

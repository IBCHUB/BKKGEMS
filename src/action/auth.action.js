import {fetchApi} from '../service/api';

export const loginUser = payload => {
  return async dispatch => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/login',
        'POST',
        dispatch,
        payload,
      );

      if (response.res_code === '00') {
        const response2 = await fetchApi(
          'backoffice/API/v1_app/getUserInfo',
          'POST',
          dispatch,
          ' ',
          response.res_result,
        );
        await dispatch({
          type: 'AUTH_USER_SUCCESS',
          token: response.res_result,
        });
        dispatch({
          type: 'GET_USER_SUCCESS',
          token: response2.res_result,
        });

        return response2;
      } else {
        // dispatch({
        //   type: 'AUTH_USER_FAIL',
        // });
        dispatch({
          type: 'GET_USER_FAIL',
        });
        return response;
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const registerUser = payload => {
  return async dispatch => {
    try {
      const response = await fetchApi(
        'api/add_member',
        'POST',
        dispatch,
        payload,
      );
      if (response.res_code === '00') {
        return response;
      } else {
        return response;
      }
    } catch (e) {
      console.log(e);
    }
  };
};

//test
export const getUser = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/getUserInfo',
        'POST',
        dispatch,
        payload,
        getState().authReducer.authData.token,
      );
      console.log(response);
      if (response.res_code === '00') {
        return response;
      } else {
        return response;
      }
    } catch (e) {
      console.log(e);
    }
  };
};
//test

export const logoutUser = payload => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: 'AUTH_USER_FAIL',
      });
      dispatch({
        type: 'GET_USER_FAIL',
      });
      return '';
    } catch (e) {
      console.log(e);
    }
  };
};

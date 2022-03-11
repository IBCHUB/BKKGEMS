import {fetchApi} from '../service/api';

export const loginUser = payload => {
  return async dispatch => {
    try {
      const response = await fetchApi('/login', 'POST', dispatch, payload);
      if (response.res_code === '00') {
        await dispatch({
          type: 'AUTH_USER_SUCCESS',
          token: response.res_result[0].member_api_key,
        });

        return response;
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
      const response = await fetchApi('/add_member', 'POST', dispatch, payload);
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

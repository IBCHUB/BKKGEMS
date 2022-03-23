import {fetchApi} from '../service/api';

export const Country = payload => {
  return async dispatch => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/country',
        'POST',
        dispatch,
        payload,
      );
      //   console.log(response);
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

export const Faq = payload => {
  return async dispatch => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/faq',
        'POST',
        dispatch,
        payload,
      );
      // console.log(response);
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

export const New = payload => {
  return async dispatch => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/news',
        'POST',
        dispatch,
        payload,
      );
      // console.log(response);
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

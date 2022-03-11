import metrics from 'config/metrics';
const BASE_API = metrics.BASE_URL + 'api';

export const api = async (url, method, body = null, headers = {}) => {
  try {
    const endPoint = BASE_API.concat(url);
    const reqBody = body ? JSON.stringify(body) : null;
    const fetchParams = {method, headers};

    // if ((method === 'POST' || method === 'PUT') && !reqBody) {
    //   throw new Error('Request body required');
    // }
    if (reqBody) {
      fetchParams.headers['Content-type'] = 'application/x-www-form-urlencoded';
      fetchParams.body = body;
    }

    const fetchPromise = fetch(endPoint, fetchParams);
    const timeOutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Request Timeout');
      }, 60000);
    });

    const response = await Promise.race([fetchPromise, timeOutPromise]);

    return response;
  } catch (e) {
    return e;
  }
};

export const fetchApi = async (
  url,
  method,
  dispatch,
  body,
  token = null,
  loader = true,
) => {
  try {
    const headers = {};
    const result = {
      token: null,
      success: false,
      responseBody: null,
    };
    // console.log(token);
    if (token) {
      headers['Authorization'] = token;
    }
    if (loader) {
      dispatch({
        type: 'INCREMENT',
        score: 1,
      });
    }
    // console.log(headers);

    const response = await api(url, method, body, headers);
    if (loader) {
      setTimeout(() => {
        dispatch({
          type: 'DECREMENT',
          score: 1,
        });
      }, 100);
    }

    if (response.status === 200) {
      let responseBody;
      const responseText = await response.text();

      const bodynew = body ? body.replace('&', ' | ') : '';

      try {
        responseBody = JSON.parse(responseText);
      } catch (e) {
        responseBody = responseText;
      }
      return responseBody;
    } else {
      // Alert.alert('ไม่สามารถเข้าระบบในตอนนี้ได้');
    }

    let errorBody;
    const errorText = await response.text();

    try {
      errorBody = JSON.parse(errorText);
    } catch (e) {
      errorBody = errorText;
    }

    result.responseBody = errorBody;

    throw result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

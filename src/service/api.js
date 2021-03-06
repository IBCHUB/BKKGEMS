import metrics from 'config/metrics';
const BASE_API = metrics.BASE_URL;
const SSO_API = 'https://prod-mojito-gateway.socialenable.co';

let URLLode = '';
export const api = async (
  url,
  method,
  body = null,
  headers = {},
  typeurl = '',
) => {
  try {
    if (typeurl === 'BASE') {
      URLLode = BASE_API;
    } else if (typeurl === 'SSO') {
      URLLode = SSO_API;
    }
    const endPoint = URLLode.concat(url);
    const reqBody = body ? JSON.stringify(body) : null;
    const fetchParams = {method, headers};

    // if ((method === 'POST' || method === 'PUT') && !reqBody) {
    //   throw new Error('Request body required');
    // }
    if (reqBody) {
      if (typeurl === 'BASE') {
        fetchParams.headers['Content-type'] =
          'application/x-www-form-urlencoded';
        fetchParams.body = body;
      } else {
        fetchParams.headers['Content-Type'] = 'application/json';
        fetchParams.body = reqBody;
      }
    }
    // console.log(fetchParams);
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
  typeurl,
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
      // console.log(token);
      headers['token'] = token;
      headers['code'] = 'Bearer ' + token;
      if (typeurl === 'BASE') {
        headers['Authorization'] = token;
      } else {
        // headers['code'] = 'Bearer ' + token;
        headers['Authorization'] = 'Bearer ' + token;
      }
      headers['client_id'] = 'SS0047423';
    }
    if (loader) {
      dispatch({
        type: 'INCREMENT',
        score: 1,
      });
    }
    // console.log(headers);

    const response = await api(url, method, body, headers, typeurl);

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
      //const bodynew = body ? body.replace('&', ' | ') : '';
      // const reqBody = body ? JSON.stringify(body) : null;
      try {
        responseBody = JSON.parse(responseText);
      } catch (e) {
        responseBody = responseText;
      }
      return responseBody;
    } else {
      // Alert.alert('????????????????????????????????????????????????????????????????????????????????????');
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

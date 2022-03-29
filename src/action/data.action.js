import {fetchApi} from '../service/api';
// Country
export const Country = payload => {
  return async dispatch => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/country',
        'POST',
        dispatch,
        payload,
        'BASE',
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
// Country

// Faq
export const Faq = payload => {
  return async dispatch => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/faq',
        'POST',
        dispatch,
        payload,
        'BASE',
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
// Faq

// New
export const New = payload => {
  return async dispatch => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/news',
        'POST',
        dispatch,
        payload,
        'BASE',
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
// New

// mylist
export const MyLists = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/mylist',
        'POST',
        dispatch,
        payload,
        'BASE',
        getState().authReducer.authData.token,
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
export const AddnameList = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/add_listname',
        'POST',
        dispatch,
        payload,
        'BASE',
        getState().authReducer.authData.token,
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
export const RemoveLists = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/remove_listname',
        'POST',
        dispatch,
        payload,
        'BASE',
        getState().authReducer.authData.token,
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
export const ItemList = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/mylistitem',
        'POST',
        dispatch,
        payload,
        'BASE',
        getState().authReducer.authData.token,
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
export const RemoveformList = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/remove_list_product',
        'POST',
        dispatch,
        payload,
        'BASE',
        getState().authReducer.authData.token,
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
// mylist

export const Exhibitor_List = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/exhibitor_list_search',
        'POST',
        dispatch,
        payload,
        'BASE',
        getState().authReducer.authData.token,
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

// Highlight
export const Product_Highlight = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/product_highlight',
        'POST',
        dispatch,
        payload,
        'BASE',
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
// Highlight

// myfev
export const MyFav = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/myFavorite',
        'GET',
        dispatch,
        payload,
        'BASE',
        getState().authReducer.authData.token,
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
// myfev

// tags
export const Tags = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchApi(
        'backoffice/API/v1_app/tags',
        'POST',
        dispatch,
        payload,
        'BASE',
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
// tags

//chat
export const GetallChat = payload => {
  console.log(payload);
  return async (dispatch, getState) => {
    try {
      const response = await fetchApi(
        'backoffice/API/v2_app/get_chat_room',
        'POST',
        dispatch,
        payload,
        'BASE',
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
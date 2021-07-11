import instance from "./instance";

import * as actionTypes from "./types";

export const fetchShops = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/shops");
      dispatch({
        type: actionTypes.FETCH_SHOPS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

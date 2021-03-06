import * as actionTypes from "./types";
import instance from "./instance";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/products");
      dispatch({
        type: actionTypes.FETCH_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

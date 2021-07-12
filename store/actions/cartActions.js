import * as actionTypes from "./types";
import instance from "./instance";

export const fetchCartItems = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/cart");
      dispatch({
        type: actionTypes.FETCH_CART_ITEMS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

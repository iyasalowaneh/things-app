import * as actionTypes from "./types";
import instance from "./instance";

export const createProduct = (newProduct) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newProduct) {
        formData.append(key, newProduct[key]);
      }
      const res = await instance.post(
        `/shops/${newProduct.shopId}/products`,
        formData
      );
      dispatch({
        type: actionTypes.CREATE_PRODUCT,
        payload: {
          newProduct: res.data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

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

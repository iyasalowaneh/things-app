//actions
import * as actionTypes from "../actions/types";

const initialState = {
  products: [],
  loading: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productReducer;

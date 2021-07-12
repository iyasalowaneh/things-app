//actions
import * as actionTypes from "../actions/types";

const initialState = {
  items: [{ id: [], quantity: 0 }],
  loading: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CART_ITEMS:
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

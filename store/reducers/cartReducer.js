//actions
import * as actionTypes from "../actions/types";

const initialState = {
  items: [{ productId: [], quantity: 0 }],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCH_CART_ITEMS:
    //   return {
    //     ...state,
    //     products: action.payload,
    //     loading: false,
    //   };
    case actionTypes.ADD_ITEM:
      const newItem = action.payload;
      const foundItem = state.items.find(
        (item) => item.productId === newItem.productId
      );
      if (foundItem)
        return {
          ...state,
          items: state.items.map((item) =>
            item === foundItem ? newItem : item
          ),
        };
      else
        return {
          ...state,
          items: [...state.items, { ...newItem }],
        };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(
          (item) => item.productId !== action.payload.itemId
        ),
      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default cartReducer;

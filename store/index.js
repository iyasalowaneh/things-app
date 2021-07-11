import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { fetchProducts } from "./actions/productActions";
import { fetchShops } from "./actions/shopActions";
import rootReducer from "./reducers/index";

const store = createStore(
  rootReducer, // reducer function
  applyMiddleware(thunk)
);
store.dispatch(fetchProducts());
store.dispatch(fetchShops());

export default store;

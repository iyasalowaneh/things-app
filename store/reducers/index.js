import { combineReducers } from "redux";
import productReducer from "./productReducer";
import shopReduser from "./shopReduser";
import cartReducer from "./cartReducer";
const rootReducer = combineReducers({
  shops: shopReduser,
  products: productReducer,
  items: cartReducer,
});
export default rootReducer;

import { combineReducers } from "redux";
import productReducer from "./productReducer";
import shopReduser from "./shopReduser";
import cartReducer from "./cartReducer";
import authReduser from "./authReduser";
const rootReducer = combineReducers({
  shops: shopReduser,
  products: productReducer,
  items: cartReducer,
  users: authReduser,
});
export default rootReducer;

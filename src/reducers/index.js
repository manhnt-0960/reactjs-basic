import { combineReducers } from "redux";
import menuReducer from "../features/menuSlice";
import headerReducer from "../features/headerSlice";
import mainReducer from "../features/mainSlice";


const appReducer = combineReducers({
  menu: menuReducer,
  header: headerReducer,
  main: mainReducer,
});

export default appReducer;

import { combineReducers } from "redux";
import menu from "./menu";
import header from "./header";
import main from "./main";


const appReducer = combineReducers({
  menu,
  header,
  main,
});

export default appReducer;

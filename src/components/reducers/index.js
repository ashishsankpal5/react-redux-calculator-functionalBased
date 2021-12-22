import { calculatorReducer, unique_key } from "./CalReducer";
import { combineReducers } from "redux";

let rootReducer = combineReducers({
  [unique_key]: calculatorReducer,
});
export { rootReducer };

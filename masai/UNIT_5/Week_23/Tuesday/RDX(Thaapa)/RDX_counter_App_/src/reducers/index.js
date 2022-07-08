import changeTheNumber from "./calc";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber: changeTheNumber,
});

export default rootReducer;

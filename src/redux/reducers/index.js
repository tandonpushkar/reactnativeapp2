import { combineReducers } from "redux";

import loader from "./loader";
import myUsers from "./myUsers";




const appReducer = combineReducers({
  loader,
  myUsers
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;

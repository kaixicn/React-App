import { createStore, combineReducers } from "redux";
// reducer
import loading from "./reducers/employeeList";

const allReducer = combineReducers({
        loadingFlg: loading
})

export default createStore(allReducer);


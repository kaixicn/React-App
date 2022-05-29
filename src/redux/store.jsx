import { createStore, combineReducers } from "redux";
// reducer
import {reducer_loading, 
        reducer_employeeId, 
        reducer_employeeNameKanji,
        reducer_employeeNameKatakana,
        reducer_subdivision,
} from "./reducers/employeeList";

const allReducer = combineReducers({
        store_loading: reducer_loading,
        store_employeeId: reducer_employeeId,
        store_employeeNameKanji: reducer_employeeNameKanji,
        store_employeeNameKatakana: reducer_employeeNameKatakana,
        store_subdivision: reducer_subdivision,
})

export default createStore(allReducer);


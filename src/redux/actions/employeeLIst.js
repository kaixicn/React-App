import { 
    IS_LOADING, 
    CHANGE_INPUT_EMPLOYEEID, 
    CHANGE_INPUT_EMPLOYEENAMEKANJI, 
    CHANGE_INPUT_EMPLOYEENAMEKATAKANA, 
    CHANGE_INPUT_SUBDIVISION, 
} from "../container";

export const action_loading = (data) => ({ type:IS_LOADING, data })
export const action_onChange_employeeId = (data) => ({type:CHANGE_INPUT_EMPLOYEEID, data})
export const action_onChange_employeeNameKanji = (data) => ({type:CHANGE_INPUT_EMPLOYEENAMEKANJI, data})
export const action_onChange_employeeNameKatakana = (data) => ({type:CHANGE_INPUT_EMPLOYEENAMEKATAKANA, data})
export const action_onChange_subdivistion = (data) => ({type:CHANGE_INPUT_SUBDIVISION, data})


import { 
    IS_LOADING, 
    CHANGE_INPUT_EMPLOYEEID, 
    CHANGE_INPUT_EMPLOYEENAMEKANJI, 
    CHANGE_INPUT_EMPLOYEENAMEKATAKANA, 
    CHANGE_INPUT_SUBDIVISION, 
} from "../container"

export function reducer_loading(preState=false, action){
    const { type, data } = action
    switch(type) {
        case IS_LOADING:
            return data
        default:
            return false
    }
}

export function reducer_employeeId(preState="", action){
    const { type, data } = action
    switch(type) {
        case CHANGE_INPUT_EMPLOYEEID:
            return data
        default:
            return preState
    }
}

export function reducer_employeeNameKanji(preState="", action){
    const { type, data } = action
    switch(type) {
        case CHANGE_INPUT_EMPLOYEENAMEKANJI:
            return data
        default:
            return preState
    }
}

export function reducer_employeeNameKatakana(preState="", action){
 
    const { type, data } = action
    switch(type) {
        case CHANGE_INPUT_EMPLOYEENAMEKATAKANA:
            return data
        default:
            return preState
    }
}

export function reducer_subdivision(preState=[1,2,3], action){
    const { type, data } = action
    switch(type) {
        case CHANGE_INPUT_SUBDIVISION:
            return [...data]
        default:
            return preState
    }
}

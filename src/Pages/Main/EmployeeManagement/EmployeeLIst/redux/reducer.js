import { ADDEMPLOYEEDATA } from './constant'

export default function employeeList(preState, action){
    const  {type,data} = action
    switch (type) {
        case ADDEMPLOYEEDATA:
            return [...data]
        default:
            return [] 
    }
}
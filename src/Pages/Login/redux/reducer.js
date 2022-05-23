import { LOGIN } from './constant'

export default function login(preState, action){
    const { type, data } = action
    if(preState === undefined){
        return false
    }
    
    if(type === LOGIN){
        return data
    }else{ 
        return false
    }
}
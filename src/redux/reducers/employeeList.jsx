import { SETLOADING } from "../container"

export default function setLoading(preState=false, action){
    const { type, data } = action
    switch(type) {
        case SETLOADING:
            return data
        default:
            return false
    }
}

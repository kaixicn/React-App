import cookie from 'react-cookies'

export function isLogin(){
    const employeeId = cookie.load("Employee_ID")
    const token = cookie.load(employeeId)
    const result = employeeId && token
    if (result === undefined || result === null){
        return false
    }else{
        return true
    }
}

export function saveLoginInfo(loginId,saveContent){
    if (loginId === undefined || loginId === null){
        const errorMessage = { message : "[LoginUtils.jsx]下的[saveLoginInfo]方法参数不可为[undefined]或者[null]"};
        throw errorMessage
    }
    const cookieValue = saveContent
    cookie.save(loginId, cookieValue, {path:"/"});
    return cookieValue
}

export function removeLoginInfo(loginId){
    if (loginId === undefined || loginId === null){
        const errorMessage = { message : "[LoginUtils.jsx]下的[removeLoginInfo]方法参数不可为[undefined]或者[null]"};
        throw errorMessage
    }
    cookie.remove(loginId)
}






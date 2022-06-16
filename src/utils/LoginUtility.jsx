import cookie from 'react-cookies'

export function isLogin(){
    const employeeId = cookie.load("Employee_ID")
    const token = cookie.load(employeeId)

    console.log("employeeId", employeeId)
    console.log("token", token)

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
    const cookieValue = saveContent;
    console.log("cookieValue: " + cookieValue);
    cookie.save(loginId, cookieValue, {path:"/"});
    console.log("cookieValue222: " + cookie.load("token"))
    return cookieValue
}

export function removeLoginInfo(){
    const loginId = cookie.load("Employee_ID")
    if (loginId === undefined || loginId === null){
        const errorMessage = { message : "[LoginUtils.jsx]下的[removeLoginInfo]方法参数不可为[undefined]或者[null]"};
        throw errorMessage
    }
    cookie.remove(loginId);
    cookie.remove("Employee_ID");

}

export function getToken(){
    
    return cookie.load(cookie.load("Employee_ID"));
}






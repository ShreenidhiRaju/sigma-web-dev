//The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token){
    let expTime=Date.now()+60*60*1000
    let obj={
        "token":token,
        "expiration time":expTime
    }
    localStorage.setItem("eets",JSON.stringify(obj))
}

setAuthToken("s124rghb")
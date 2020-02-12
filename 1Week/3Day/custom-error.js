class LoginError extends Error {

}

function LoginError(){
    Object.setPrototypeOf(this, Error)
}
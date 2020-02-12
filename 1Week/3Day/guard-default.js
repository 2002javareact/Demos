//these are the logical short circuit operators
// they are traditionally used in boolean expressions

if(true && false){

}else if (false || true){

}

//we can also use them in other places
// that is when the become the guard and default operator
let user = {
    username:null,
    password:'password'
}

//user = undefined
//I want to get the password to do something with it
//but I'm not sure the user object actually exists

let password = user && user.password
// this is my guard op, it will make sure user exists, before trying to access the password
console.log(password);

user = null


let loginMessage = (user && user.username) || 'Username or Password is wrong' 

console.log(loginMessage);

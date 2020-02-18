import * as session from 'express-session'


const sessionConfig = {
    secret: 'secret',
    cookie: {secure:false},
    resave:false,
    saveUninitialized:false
}

//this pattern of writing code
// where I provide a config to some function
// and based on that config it builds a functionfor me to use
// is called the factory pattern
export const sessionMiddleware = session(sessionConfig)//return
// a function that looks like (req, res, next) => {
// it somehow attaches an object to the request
// and then
// next()
//}
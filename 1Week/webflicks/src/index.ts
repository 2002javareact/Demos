import * as express from 'express'
import * as bodyparser from 'body-parser'
import { loggingMiddleware } from './middleware/logging-middleware'
import { userRouter } from './routers/user-router'
// I call this express function, and it returns an object I can use to build my api
const app = express()

// we are setting up our first piece of middleware, body parser
app.use('/', bodyparser.json())
//this endpoint matches every single request
// but it doesn't send a response, all it does is process the body of the request
// and then allow the next endpoint to recieve the request
// thats why this is called middleware, is does some work in the middle, and then pass the request to an endpoint

app.use(loggingMiddleware)

// this will register all http requests that match /users
// and redirect them to the userRouter
app.use('/users', userRouter)

//I can change the order of my endpoints
// and express will run a request through all matching endpoints in the order they were declared
app.use('/', (req,res)=>{
    res.send('Hello World')
})

app.listen(2002, ()=>{
    console.log('app has started on port 2002');
})
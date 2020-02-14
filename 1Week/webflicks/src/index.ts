import * as express from 'express'
import * as bodyparser from 'body-parser'
import { users } from './database'
import { User } from './models/User'
// I call this express function, and it returns an object I can use to build my api
const app = express()

// we are setting up our first piece of middleware, body parser
app.use('/', bodyparser.json())
//this endpoint matches every single request
// but it doesn't send a response, all it does is process the body of the request
// and then allow the next endpoint to recieve the request
// thats why this is called middleware, is does some work in the middle, and then pass the request to an endpoint

//generally a get request to the root of a path
//will give you every single one of those resources
app.get('/users', (req,res)=>{
    //get all of our users
    //format them to json
    //use the response obj to send them back
    res.json(users)// this will format the object into json and send it back
    
})

// generally in rest convention
// a post request to the root of a resource will make one new of that resource
app.post('/users', (req,res)=>{
    let { username, password, 
    emailAdddress, id,
    firstName, lastName,
    role } = req.body// this will be where the data the sent me is
    // the downside is this is by default just a string of json, not a js object
    if(username && password && emailAdddress && id && firstName && lastName && role){
        users.push(new User(username,password,emailAdddress,id,firstName,lastName,role))
        // this would be some function for adding a new user to a db
        res.sendStatus(201)// if I don't need to seend a body
    } else {
        res.status(400).send('Please include all user fields')
        // for setting a status and a body
    }

})

//I can change the order of my endpoints
// and express will run a request through all matching endpoints in the order they were declared
app.use('/', (req,res)=>{
    res.send('Hello World')
})

app.listen(2002, ()=>{
    console.log('app has started on port 2002');
})
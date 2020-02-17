import * as express from 'express'
import { users } from '../database'
import { User } from '../models/User'


export const userRouter = express.Router()
// this will work almost exactly like it does with userRouter up in index

//generally a get request to the root of a path
//will give you every single one of those resources
userRouter.get('', (req,res)=>{
    //get all of our users
    //format them to json
    //use the response obj to send them back
    res.json(users)// this will format the object into json and send it back
    
})

// generally in rest convention
// a post request to the root of a resource will make one new of that resource
userRouter.post('', (req,res)=>{
    let { username, password, 
    emailAddress, id,
    firstName, lastName,
    role } = req.body// this will be where the data the sent me is
    // the downside is this is by default just a string of json, not a js object
    if(username && password && emailAddress && id && firstName && lastName && role){
        users.push(new User(username,password,emailAddress,id,firstName,lastName,role))
        // this would be some function for adding a new user to a db
        res.sendStatus(201)// if I don't need to seend a body
    } else {
        res.status(400).send('Please include all user fields')
        // for setting a status and a body
    }

})

// in express we can add a path variable by using a colon in the path
// this will add it to the request object and the colon makes it match anything
userRouter.get('/:id', (req,res)=>{
    const id = +req.params.id// the plus sign is to type coerce into a number
    if(isNaN(id)){
        res.sendStatus(400)
    }else {
        // look through the "database"
        let found = false
        for(let user of users){
            //find the matching id
            if(user.id === id){
                //return the user
                found=true
                res.status(200).json(user)
            }
        }
        //return a 404 not found
        if(!found){
            res.sendStatus(404)
        }
        
    }
})
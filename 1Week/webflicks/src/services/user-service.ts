import { daoFindUserByUsernameAndPassword, daoFindAllUsers, daoSaveOneUser, daoFindUserById } from "../repositories/user-dao";
import { User } from "../models/User";
import { UserDTO } from "../dtos/UserDTO";

// we seperated out the concern of finding the appropriate user from our controller
// this means in the future, when we rewrite this method, we shouldn't have to change the function that is calling it
// by seperating these concerns we are loosly coupling our code
export async function findUserByUsernameAndPassword(username:string, password:string): Promise<User>{
   
   // keep track of number of login attempts for a username
   // check to see if 5 or more unseccessful in a row
   // time out logins for that user
   return await daoFindUserByUsernameAndPassword(username,password)
}


export async function findAllUsers():Promise<User[]>{
   // I write to a different table, who just sent this request
   // know what time of day, these requests get most sent
   return await daoFindAllUsers()
}


export async function saveOneUser(newUser:UserDTO):Promise<User>{
   return await daoSaveOneUser(newUser)
}



export async function findUserById(id:number):Promise<User>{
   return await daoFindUserById(id)
}
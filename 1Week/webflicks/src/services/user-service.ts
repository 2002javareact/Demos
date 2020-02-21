import { daoFindUserByUsernameAndPassword } from "../repositories/user-dao";
import { User } from "../models/User";

// we seperated out the concern of finding the appropriate user from our controller
// this means in the future, when we rewrite this method, we shouldn't have to change the function that is calling it
// by seperating these concerns we are loosly coupling our code
export async function findUserByUsernameAndPassword(username:string, password:string): Promise<User>{
   return await daoFindUserByUsernameAndPassword(username,password)
}

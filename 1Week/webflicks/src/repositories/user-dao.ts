import { PoolClient } from "pg";
import { connectionPool } from ".";
import { User } from "../models/User";
import { BadCredentialsError} from '../errors/BadCredentialsError'
import { InternalServerError } from "../errors/InternalServerError";


export async function daoFindUserByUsernameAndPassword(username:string,password:string):Promise<User>{
    let client:PoolClient// our potential connection to db
    try {
        client = await connectionPool.connect()
        let results = await client.query(`SELECT * FROM public.users U inner join public.roles R on U."role" = R.role_id  WHERE username = '${username}' and "password" = '${password}'`)
        if(results.rowCount === 0){
            throw new Error('User Not Found')
        }
        return new User(results.rows[0].username, 
                        results.rows[0].password, 
                        results.rows[0].email, 
                        results.rows[0].user_id, 
                        results.rows[0].first_name, 
                        results.rows[0].last_name, 
                        results.rows[0].role_name );
    } catch(e){
        console.log(e);
        if(e.message === 'User Not Found'){
            throw new BadCredentialsError()
        }else {
            throw new InternalServerError()
        }
    } finally {
        client && client.release()
    }
}
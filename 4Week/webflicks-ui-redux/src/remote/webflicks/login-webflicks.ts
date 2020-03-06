import { User } from "../../models/User";
import { BadCredentialsError } from "../../errors/BadCredentialsError";
import { InternalServerError } from "../../errors/InternalServerError";
import { webflicksClient } from "./webflicks-client";



export async function webflicksLogin(username: string, password: string): Promise<User> {
    let credentials = {
        username,
        password
    }
    try {
        let response = await webflicksClient.post('/login', credentials)
        console.log(response);
        if(response.status === 404){
            throw new BadCredentialsError()
        }

        return response.data
    } catch (e) {
        if(e.status === 404){
            throw e
        } else{
            throw new InternalServerError()
        }
    }
}
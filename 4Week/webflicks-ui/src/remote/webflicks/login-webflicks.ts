import { User } from "../../models/User";
import { BadCredentialsError } from "../../errors/BadCredentialsError";
import { InternalServerError } from "../../errors/InternalServerError";



export async function webflicksLogin(username: string, password: string): Promise<User> {
    let credentials = {
        username,
        password
    }
    try {


        let response = await fetch('http://ec2-52-91-202-52.compute-1.amazonaws.com:2002/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)

        })
        console.log(response);

        if(response.status === 404){
            throw new BadCredentialsError()
        }

        return await response.json()
    } catch (e) {
        if(e.status === 404){
            throw e
        } else{
            throw new InternalServerError()
        }
    }
}
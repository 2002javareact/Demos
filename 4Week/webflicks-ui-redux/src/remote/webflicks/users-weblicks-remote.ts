import { InternalServerError } from "../../errors/InternalServerError"


export const webflicksGetAllUsers = async () => {
    try {
        let response = await fetch('http://ec2-52-91-202-52.compute-1.amazonaws.com:2002/users')
        if(response.status === 200){
            return response.json()
        }else {
            throw new InternalServerError()
        }
    } catch (e){
        throw new InternalServerError()
    }
}



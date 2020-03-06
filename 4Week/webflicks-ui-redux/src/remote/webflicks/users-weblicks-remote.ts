import { InternalServerError } from "../../errors/InternalServerError"
import { webflicksClient } from "./webflicks-client"


export const webflicksGetAllUsers = async () => {
    try {
        let response = await webflicksClient.get('/users')
        if(response.status === 200){
            return response.data
        }else {
            throw new InternalServerError()
        }
    } catch (e){
        throw new InternalServerError()
    }
}



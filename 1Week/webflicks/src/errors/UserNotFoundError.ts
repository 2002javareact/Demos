import { HttpError } from "./HttpError";


export class UserNotFoundError extends HttpError {
    constructor(){
        super('User Not Found', 404)
    }
}
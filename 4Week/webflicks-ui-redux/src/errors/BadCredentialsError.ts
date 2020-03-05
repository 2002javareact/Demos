import { HttpError } from "./HttpError";


export class BadCredentialsError extends HttpError{
    constructor(){
        super('Invalid Credentials', 400)
    }
}
import { HttpError } from "./HttpError"

export class InternalServerError extends HttpError{
    constructor(){
        super('Internal Server Error', 500)
    }
}
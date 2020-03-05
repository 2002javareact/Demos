// this is a little custom error object
// it works just like the normal one, but it has one additional field
// called status for an http status code

export class HttpError extends Error{
    status:number|undefined
    constructor(message?:string, status?:number){
        super(message)
        this.status = status
    }
}
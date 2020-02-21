// this is what the field names from the database are
export class UserDTO {
    username:string
    password:string
    email:string
    user_id:number// a unique number for identification
    first_name:string
    last_name:string
    role_name:string // their user permissions
    // user - for you can use the service
    // admin - you can ban people or add/remove movies
    constructor(username:string,
        password:string,
        email:string,
        user_id:number,
        first_name:string,
        last_name:string,
        role_name:string){
            this.username = username
            this.password = password
            this.email = email
            this.user_id = user_id
            this.first_name = first_name
            this.last_name = last_name
            this.role_name = role_name
        }
}
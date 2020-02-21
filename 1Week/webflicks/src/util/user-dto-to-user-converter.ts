import { UserDTO } from "../dtos/UserDTO";
import { User } from "../models/User";


export function userDTOToUserConverter(userDTO:UserDTO):User{
    return new User(
        userDTO.username,
        //userDTO.password,
        userDTO.email,
        userDTO.user_id,
        userDTO.first_name,
        userDTO.last_name,
        userDTO.role_name
    )
}
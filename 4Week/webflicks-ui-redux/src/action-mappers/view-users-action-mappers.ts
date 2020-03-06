import { Dispatch } from "redux";
import { User } from "../models/User";
import { webflicksGetAllUsers } from "../remote/webflicks/users-weblicks-remote";

export const usersTypes = {
    GET_ALL_USERS: 'WEBFLICKS_GET_ALL_USERS',
    FAILED_TO_RETRIEVE_USERS:'WEBFLICKS_FAILED_TO_RETRIEVE_USERS'
}



export const getAllUsersActionMapper = () => async (dispatch:Dispatch) => {
    // try to get all users from a remote function
    try{
        let allUsers:User[] = await webflicksGetAllUsers()
        //if we do call dispatch with those users
        dispatch({
            type: usersTypes.GET_ALL_USERS,
            payload:{
                allUsers
            }
        })
    } catch (e){
            //catch any errors and dispatch a bad action
        dispatch({
            type:usersTypes.FAILED_TO_RETRIEVE_USERS
        })
    }
    //function completes
}
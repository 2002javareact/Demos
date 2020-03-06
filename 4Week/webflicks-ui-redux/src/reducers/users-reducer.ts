import { IUsersState } from ".";
import { AnyAction } from "redux";
import { usersTypes } from "../action-mappers/view-users-action-mappers";


const initialState:IUsersState = {
    allUsers:[],
    errorMessage:''
}

export const usersReducer = (state = initialState, action:AnyAction ) =>{
    switch (action.type) {
        case usersTypes.GET_ALL_USERS:{
            return {
                ...state,
                allUsers:action.payload.allUsers
            }
        }  
        case usersTypes.FAILED_TO_RETRIEVE_USERS:{
            return {
                ...state,
                errorMessage:'Failed to Retrieve Users'
            }
        } 
        default:
            return state;
    }
}
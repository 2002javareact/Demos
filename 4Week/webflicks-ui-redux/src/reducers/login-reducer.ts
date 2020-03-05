import { ILoginState } from "."
import { User } from "../models/User"
import { loginTypes } from "../action-mappers/login-action-mapper"
import { AnyAction } from "redux"

// we set the initial state for the "piece"
const initialState:ILoginState = {
    user: new User('','',0,'','',''),
    errorMessage:'This is a Test'
}

//we make a reduce for updating this piece of state
export const loginReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case loginTypes.SUCCESSFUL_LOGIN:{
            // if you do not return a new object
            //react will not trigger a render
            return {
                ...state,
                user:action.payload.user
            }
        }
        case loginTypes.INVALID_CREDENTIALS:{
            return {
                ...state,
                errorMessage:'Username or Password Incorrect'
            }
        }
        case loginTypes.INTERNAL_SERVER:{
            return {
                ...state,
                errorMessage:'Something went wrong. Oops!'
            }
        }
        default:
            return state;
    }
}
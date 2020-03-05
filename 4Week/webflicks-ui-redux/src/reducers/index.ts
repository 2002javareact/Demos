import { combineReducers } from "redux";
import { User } from "../models/User";
import { loginReducer } from "./login-reducer";

//make interfaces for each "piece" of state
export interface ILoginState{
    user:User
    errorMessage:string
}

//define all of the pieces of state
export interface IState{
    login:ILoginState
}

//turn all individual pieces of state into a single state
export const state = combineReducers<IState>({
    login:loginReducer,
})
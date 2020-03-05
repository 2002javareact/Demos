import { compose, applyMiddleware, Store, createStore } from "redux"
import reduxThunk from 'redux-thunk'
import { state } from "./reducers"

// this is where we use the redux libraries to actually buil the store
// you shouldn't ever have to change this file, just have it

//this is the window of their broswer
const a:any = window

//allow them to use redux dev tools
const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//apply redux thunk 
const enhancer = composeEnhancers(
    applyMiddleware(reduxThunk)
)

//actually build the store
export const store:Store<any> = createStore(
    state,
    enhancer
)
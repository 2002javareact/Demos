import { IState } from "../../reducers";
import { connect } from "react-redux";
import { LoginComponent } from "./LoginComponent";
import { webflicksLoginActionMapper } from '../../action-mappers/login-action-mapper'

// this is the file to connects login Component to redux
// we define to config objects
// the first attachs data to Login Comp
// the second attachs action mappers to Login Comp

// this is how we choose what data to pass into a component
const mapStateToProps = (state:IState) =>{
    return {
        user:state.login.user,
        errorMessage:state.login.errorMessage
    }
}

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    webflicksLoginActionMapper
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent)
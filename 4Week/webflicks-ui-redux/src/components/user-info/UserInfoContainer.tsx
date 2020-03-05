import { connect } from "react-redux";
import { UserInfoComponent } from "./UserInfoComponent";
import { IState } from "../../reducers";



const mapStateToProps = (state:IState) => {
    return {
        currentUser: state.login.user
    }
}

export default connect(mapStateToProps)(UserInfoComponent)
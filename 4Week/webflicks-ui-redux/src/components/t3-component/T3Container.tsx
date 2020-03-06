import { IState } from "../../reducers";
import {resetGameActionMapper, cellClickActionMapper} from '../../action-mappers/t3-action-mapper'
import { connect } from "react-redux";
import { T3Component } from "./T3Component";

const mapStateToProps = (state:IState) => {
    return {
        ...state.t3
    }
}

const mapDispatchToProps = {
    cellClickActionMapper,
    resetGameActionMapper
}
export default connect(mapStateToProps,mapDispatchToProps)(T3Component)
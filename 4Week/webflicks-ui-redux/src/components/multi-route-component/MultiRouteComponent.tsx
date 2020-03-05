import React from 'react'
import { Switch, Route } from 'react-router'
import { ClickerComponent } from '../clicker-component/ClickerComponent'


export class MultiRouteComponent extends React.Component<any,any>{
    render(){
        return(
            <Switch>
                <Route path={`${this.props.match.path}/first`} component={ClickerComponent}/>
                <Route path={`${this.props.match.path}/second`} component={ClickerComponent}/>
            </Switch>
        )
    }
}
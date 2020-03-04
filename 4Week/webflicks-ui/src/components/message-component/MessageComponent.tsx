import React from 'react';
import {  RouteComponentProps } from 'react-router-dom';

//to make a class component, we extend React.component

//what are props? props are data we pass in to a component
// it is data that is immutable - we cannot change the props passed to us
// we can use them, generally they are used for config or data display



// the two generics in react.component are for setting types of props and state
// we generally give them an interface that defines what must be passed in
interface IMessageComponentProps extends RouteComponentProps{
    message:string
}

export class MessageComponent extends React.Component<IMessageComponentProps,any>{

    render(){
        return(//denote that it will contain html
        <p className="message-display">{this.props.message}</p>
        )
    }
}


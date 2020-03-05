import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'
import { User } from '../../models/User'
import { Redirect } from 'react-router'

interface IUserInfoProps{
    currentUser:User
}

export class UserInfoComponent extends React.Component<IUserInfoProps,any>{


    render(){
        return(
            this.props.currentUser.id ? 
            <Card>
                <CardTitle>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</CardTitle>
                <CardText>{`Username: ${this.props.currentUser.username}`}</CardText>
                <CardText>{`Role: ${this.props.currentUser.role}`}</CardText>
            </Card>
            :
            <Redirect to='/login'/>
        )
    }
}
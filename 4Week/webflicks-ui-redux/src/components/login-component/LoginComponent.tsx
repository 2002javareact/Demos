import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap'
import { webflicksLogin } from '../../remote/webflicks/login-webflicks'
import { User } from '../../models/User'
import { Redirect } from 'react-router'


interface ILoginProps{
    user:User
    errorMessage:string
    webflicksLoginActionMapper:(u:string,p:string)=>void
}

interface ILoginState {
    username: string
    password: string
}

export class LoginComponent extends React.Component<ILoginProps, ILoginState>{
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }


    submitLogin = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.webflicksLoginActionMapper(this.state.username, this.state.password)
        // when we reach this point we don;t get that return value from the mapper
        // that value got hijacked and was sent to dispatch
        this.setState({
            password:''
        })
    }


    updateUser = (e: any) => {

        this.setState({
            username: e.currentTarget.value
        })
    }
    updatePassword = (e: any) => {

        this.setState({
            password: e.currentTarget.value
        })
    }

    render() {
        return (
            this.props.user.id ? 
            <Redirect to='/clicker'/>
            :
            <> 
            {/* a react Fragment, disappears on render */}
                <Form onSubmit={this.submitLogin}>
                    <FormGroup row>
                        <Label for="username" sm={2}>Email</Label>
                        <Col sm={6}>
                            <Input onChange={this.updateUser} value={this.state.username} type="text" name="username" id="username" placeholder="your username" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={2}>Password</Label>
                        <Col sm={6}>
                            <Input onChange={this.updatePassword} value={this.state.password} type="password" name="password" id="password" placeholder="your password" required />
                        </Col>
                    </FormGroup>
                    <Button color='info'>Submit</Button>
                </Form>
                <p>{this.props.errorMessage}</p>
            </>
        )
    }
}
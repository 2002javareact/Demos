import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap'
import { webflicksLogin } from '../../remote/webflicks/login-webflicks'
import { User } from '../../models/User'
import { Redirect } from 'react-router'

interface ILoginState {
    username: string
    password: string
    errorMessage: string
    user: User | undefined
}

export class LoginComponent extends React.Component<any, ILoginState>{
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            user: undefined
        }
    }


    submitLogin = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let user = await webflicksLogin(this.state.username, this.state.password)
           // this.props.history.push('/clicker') // if we run this, it takes them to that path
            this.setState({
                user: user,
                username: '',
                password: ''
            })
        } catch (e) {
            if (e.status === 404) {
                this.setState({
                    password: '',
                    errorMessage: e.message
                })
            } else {
                this.setState({
                    password: '',
                    errorMessage: 'Something Went Wrong. Oops!'
                })
            }
        }
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
            this.state.user ? 
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
                <p>{this.state.errorMessage}</p>
            </>
        )
    }
}
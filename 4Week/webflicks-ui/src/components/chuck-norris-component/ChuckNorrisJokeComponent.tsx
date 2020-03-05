import React from 'react'
import { Jumbotron, Button, Card, CardImg, CardBody, CardTitle, CardText, Row, Col, Toast, ToastHeader, ToastBody } from 'reactstrap'
import CNJPG from '../../assets/CN.jpg'
import { getApiJokeFetch } from '../../remote/chuck-norris/chuck-norris-joke'

interface ICNJokeState {
    joke: string
    error:boolean
    errorMessage:string
}


export class ChuckNorrisJokeComponent extends React.Component<any, ICNJokeState>{
    constructor(props: any) {
        super(props)
        this.state = {
            joke: 'Chuck Norris built the hospital he was born in',
            error:false,
            errorMessage:''
        }
    }


    getJoke = async ()=>{
        try{
            let joke = await getApiJokeFetch()
            this.setState({
                joke:joke
            })
        } catch (e){
            this.setState({
                error:true,
                errorMessage: e.message
            })
        }
    }

    clearError = ()=>{
        this.setState({
            error:false,
            errorMessage:''
        })
    }


    render() {
        return (
            <div id='chuck-norris-component'>
                <Jumbotron>
                    <h1 className="display-3">Chuck Norris Jokes</h1>
                    <p>This website will allow you to get Chuck Norris jokes that are nerdy and SFW</p>
                    <p className="lead">
                        <Button onClick={this.getJoke} color="dark">BuyJoke</Button>
                    </p>
                </Jumbotron>
                <Row>
                    <Col sm="3">
                        <Card>
                            <CardImg top width="100%" src={CNJPG} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Joke</CardTitle>
                                <CardText>{this.state.joke}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Toast isOpen={this.state.error}>
                    <ToastHeader icon={'danger'} toggle={this.clearError}>
                        Error!
                    </ToastHeader>
                    <ToastBody>
                        {this.state.errorMessage}
                    </ToastBody>
                </Toast>
            </div>
        )
    }





}
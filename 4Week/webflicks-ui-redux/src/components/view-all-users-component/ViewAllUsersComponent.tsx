import React from 'react'
import { User } from '../../models/User';
import { CardDeck } from '../general-components/card-deck-component/CardDeckComponent';
import { UserInfoComponent } from '../user-info/UserInfoComponent';
import { Redirect } from 'react-router';

interface IViewAllUsersProps {
    currentUser:User
    allUsers:User[]
    errorMessage:string
    getAllUsersActionMapper: ()=>void
}


export class ViewAllUsersComponent extends React.Component<IViewAllUsersProps,any>{

    // runs when component starts to exist
    componentDidMount(){
        // check to see if we already have users (redux store)
        if(this.props.allUsers.length !== 0){
            //return
            //make sure they are admin
        }else if(this.props.currentUser.role === 'Admin'){
            console.log('call getAll users mapper?');
            
            this.props.getAllUsersActionMapper()
        }else {
            //they weren't admin so do nothing
            //return
        }
    }

    render(){
        //turn array of users into display components
        let userDisplay = this.props.allUsers.map((ele)=>{
            return <UserInfoComponent currentUser={ele} key={ele.id}/>
        })
        console.log(this.props.currentUser.role)
        return(
            // check for role or redirect
            this.props.currentUser.role === 'Admin'?
            <CardDeck elementsPerRow={4}>
                {userDisplay}
            </CardDeck>
            :
            <Redirect to='/'/>
        )
    }
}
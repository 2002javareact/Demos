import React from 'react'


interface IAddingComponentProps{
    x:number
    y:number
}

export class AddingComponent extends React.Component<IAddingComponentProps, any>{
    render(){
        let {x,y} = this.props
        return(
        <p>{`${x} + ${y} = ${x + y}`}</p>
        )
    }
}
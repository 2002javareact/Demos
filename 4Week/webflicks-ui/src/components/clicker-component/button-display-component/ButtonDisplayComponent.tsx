import React from 'react'


interface IButtonDisplayProps{
    name:string
    incrementClick:()=>void
}


export class ButtonDisplayComponent extends React.Component<IButtonDisplayProps,any>{

    render(){
        return(
            <button onClick={this.props.incrementClick}>{this.props.name}</button>
        )
    }
}
import React from 'react'


interface IButtonDisplayProps{
    name:string
    incrementClick:()=>void
}


export class ButtonDisplayComponent extends React.PureComponent<IButtonDisplayProps>{

    render(){
        return(
            <button onClick={this.props.incrementClick}>{this.props.name}</button>
        )
    }
}
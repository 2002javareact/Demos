import React from 'react'
import { Row } from 'reactstrap'

interface ICardDeckProps{
    elementsPerRow:number
}

export class CardDeck extends React.Component<ICardDeckProps,any>{
    render(){
        //final displaye array
        let displayArray = []
        //turn all of the children to an array
        let children = React.Children.toArray(this.props.children)
        //get length of full array because we will be slicing it
        let length = children.length
        //loop through and build rows with elements per row in each
        for(let i = 0; i < length; i+=this.props.elementsPerRow){
            displayArray.push(<Row key={'cards' + i} children={
                children.splice(0,this.props.elementsPerRow)
            }/>)
        }
        
        return (
            <div>
                {displayArray}
            </div>
        )
    }
}
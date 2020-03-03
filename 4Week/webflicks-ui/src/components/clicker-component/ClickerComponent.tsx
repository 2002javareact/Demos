import React from 'react';
import { ButtonDisplayComponent } from './button-display-component/ButtonDisplayComponent';

export class ClickerComponent extends React.Component<any,any>{

    //how many times they've clicked
    //Stretch goal, total time played
    constructor(props:any){
        super(props)
        this.state = {
            clicks:0
        }
    }


    incrementClicks = (numClicks:number)=>{
        this.setState({
            clicks:this.state.clicks + numClicks
        })
    }

    render() {
        //build button components
        let buttons = [
            <ButtonDisplayComponent incrementClick={()=>this.incrementClicks(1)} name={'Click +1'}/>,
            <ButtonDisplayComponent incrementClick={()=>this.incrementClicks(10)} name={'Click +10'}/>
        ]

        return(
            <div style={{border:"2px solid black"}}>
                <p>You have {this.state.clicks} number of clicks</p>
                {buttons}
            </div>
        )
    }
}



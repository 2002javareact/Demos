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
        // when we hit 1,000 clicks add a button for +10
        // when we hit 10,000 clicks add a button for +100
        // 100,000 add a button for +1000
        // do this forever
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



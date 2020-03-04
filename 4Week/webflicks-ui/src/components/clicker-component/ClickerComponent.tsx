import React from 'react';
import { ButtonDisplayComponent } from './button-display-component/ButtonDisplayComponent';

export class ClickerComponent extends React.Component<any,any>{

    //how many times they've clicked
    //Stretch goal, total time played
    constructor(props:any){
        super(props)
        this.state = {
            clicks:1000
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
        let buttons = []

        for(let i = 1; i < Math.floor(this.state.clicks/100); i*=10){
            console.log(i)
            buttons.push(
                <ButtonDisplayComponent 
                    key={"key" + i}
                    incrementClick={()=>this.incrementClicks(i)}
                    name={`Click +${Math.floor(i)}`}
                />
            )
        }

        

        return(
            <div style={{border:"2px solid black"}}>
                <p>You have {this.state.clicks} number of clicks</p>
                {buttons}
            </div>
        )
    }
}



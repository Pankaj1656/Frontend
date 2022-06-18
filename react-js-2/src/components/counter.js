import React ,{Component} from "react";

class Counter extends Component {
    constructor(props){
        super(props)

        this.state={
            count:0,
        }
    }
    incrementCounter =()=>{
        this.setState((prevState) => ({
            count:prevState.count+1,
        }))
    }

    incrementCounterBy5 =()=>{
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        
    }
    render (){
        let {count}=this.state;
        return (
            <div>
                <p > {count}</p>
                <button onClick={this.incrementCounter}>increment </button>
                <br/>

                <button onClick={this.incrementCounterBy5} >increment 5</button>
            </div>
        )
    }
}
export default Counter
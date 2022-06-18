import React,{Component} from "react";

class OnOff extends Component{
    constructor(props){
        super(props)
        
        this.state={
            bulbStatus:false
        }
    }
    toggleBulb =()=>{
        this.setState((prevState)=>({
            bulbStatus:!prevState.bulbStatus,
        }))
    }
    render(){
        let {bulbStatus}=this.state;
        return(
            <>
            <img src={bulbStatus?'https://www.w3schools.com/js/pic_bulbon.gif':'https://www.w3schools.com/js/pic_bulboff.gif'} alt='bulb' style={{margin:'20px'}}></img>
            <button onClick={this.toggleBulb}>Toggle Bulb</button>

           </>
        )
    }
}
export default OnOff;
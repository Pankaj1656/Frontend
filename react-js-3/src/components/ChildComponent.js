import React, { Component } from 'react';

class ChildComponent extends Component {
    constructor(props){
        super(props)
        console.log("[Child] Inside contructor");
    }
    componentDidMount(){
        console.log("[Child] Inside ComponentDidMount");
        console.log("[Child] Mounting Finished")

    }
    componentWillUnmount(){
        console.log("[Child] Inside Will Unmount")
    }
    render() {
        console.log("[Child] Inside Render")
        return (
            <div>
                ChildComponent
            </div>
        );
    }
}

export default ChildComponent;
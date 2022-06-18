import React, { Component } from "react";

class HelloClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batchNO: 12,
    };
  }
  changeBatchNo = () => {
    this.setState({
      batchNO: 9,
    });
  };
  render() {
    const { Student1, Student2 } = this.props; //Destructure of props
    return (
      <>
        <h1>
          Hello {Student1} {Student2 && `and ${Student2}`}
        </h1>
        <h2>Current Batch :{this.state.batchNO}</h2>
        <button onClick={this.changeBatchNo}>Change Batch No.</button>
      </>
    );
  }
}
export default HelloClass;

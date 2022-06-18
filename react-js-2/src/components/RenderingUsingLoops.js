import React, { Component } from "react";

export class RenderingUsingLoops extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        {
          name: "Pankaj",
          batch: 10,
          country: "India",
        },
        {
          name: "Shubham",
          batch: 10,
          country: "Australia",
        },
        {
          name: "Aman",
          batch: 11,
          country: "USA",
        },
        {
          name: "Raman",
          batch: 9,
          country: "Canada",
        },
      ],
    };
  }
  render() {
    let { students } = this.state;
    return (
      <>
      {students.map((student,index)=>(
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            border: "1px solid black",
            margin: "10px",
          }}
          key={index}
        >
          <h1>{student.name}</h1>
          <h1>{student.batch}</h1>
          <h1>{student.country}</h1>
        </div>
        ))}
      </>
    );
  }
}
export default RenderingUsingLoops;



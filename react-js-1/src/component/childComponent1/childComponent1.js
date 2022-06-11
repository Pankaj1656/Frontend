import React from "react";
import GrandChildComponent1 from "./grandChildComponent1";
import "./childComponent1.css";

const ChildComponent1 = () => {
  return (
    <div className="ChildComponent1">
      <h1>Child Component 1</h1>

      <GrandChildComponent1
        title="Heading1"
        backgroundColor="red"
        textColor='white'
        margin= '10px auto'
        padding='10px'
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
      />

      <GrandChildComponent1
        title="Heading2"
        backgroundColor="yellow"
        margin= '10px auto'
        padding='10px'
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
      />

      
    </div>
  );
};
// we can use imported child component n number of times

export default ChildComponent1;

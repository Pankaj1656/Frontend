import React from "react";

const GrandChildComponent1 = ({ title, backgroundColor,description ,textColor ,margin,padding}) => {
  const mystyle={
    color:textColor ,
    backgroundColor:backgroundColor,
    margin:margin,
    padding:padding,
    width:'50%'
  }
  return (
    
    <div className="GrandChildComponent1" style={mystyle }>
     
      <h4 style={mystyle}>{title}</h4>
      
       <p> {description}</p>
      
    </div>
  );
};

export default GrandChildComponent1;

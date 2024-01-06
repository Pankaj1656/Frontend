import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import ChildComponent from "./components/ChildComponent";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Inside constructor");
    this.state = {
      count: 0,
      show:true,
    };
  }
  componentDidMount() {
    console.log("Inside component did mount");
  }
  componentDidUpdate() {
    console.log("Inside componentDidUpdate");
  }
  
  render() {
    console.log("Inside Render");
    return (
      <div className="App">
        <h1>App</h1>
        <h2>{this.state.count}</h2>
        <button
          onClick={() =>
            this.setState((prevState) => ({ count: prevState.count + 1 }))
          }
        >
          Increment
        </button>
        {this.state.show && <ChildComponent/>}
        <button onClick={()=>this.setState((prevState)=>({show:!prevState.show}))}>
          Show/Hide
        </button>

      </div>
    );
  }
}

export default App;

/* 
   import Navbar2 from "./components/Navbar";
   import Products from "./components/Products";
   import AboutUs from "./components/AboutUs";   

   <Navbar2 />
   <h1 style={{margin:'30px 50px ',marginBottom:'30px', fontSize:'50px', fontFamily:'cursive'}}>Welcome to Shopping Ocean.</h1>
   <p style={{ marginBottom:'70px'}}>Your one stop Destination for all the products.</p>
   <Products />
   <AboutUs/> 
   
*/


/*
	Component LifeCyle Phases:
	1. Mounting 
		(constructor => render => componentDidMount)
	2. Updating 
		([Listens to props/state updates] render (re-render) => componentDidUpdate)
	3. Unmounting 
		([Just before unmounting] componentWillUnmount)

	Component LifeCyle Methods:
	1. componentDidMount
		- API Calls
	2. componentDidUpdate
		- Code that needs to be executed whenever the component has re-rendered
	3. componentWillUnmount
		- Reset states, reset form fields
*/

/*
	import Navbar from './components/Navbar'
	import Products from './components/Products'
	<Navbar />
	<Products />
*/

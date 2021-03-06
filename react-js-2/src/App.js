
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Hello from './components/Hello'
// import HelloClass from './components/HelloClass';
// import Counter from './components/counter';
// import RenderingUsingLoops from './components/RenderingUsingLoops';
// import OnOff from './components/BulbOnOff';
import Toggle from './components/toggle';
// import BootstrapBasics from './components/BootstrapBasics';
function App() {
  return (
    <div className="App">
      {/* <Hello Student1='Pankaj' Student2='Aman'/> */}
      {/* <Hello Student1='Raman' /> */}
      {/* <HelloClass Student1='lepta'/> */}
      {/* <Counter/> */}
      {/* <RenderingUsingLoops/> */}
      {/* <OnOff/> */}
      {/* <BootstrapBasics/> */}
      <Toggle/>
    </div>
  );
}

export default App;


/*
	Components 2 types:
	1. Function based components
	2. Class based components

	Class based components 
		- Previously - state and props
		- additional syntax
		- overhead of 'this' keyword
	Function based components 
		- Previously - props (couldn't have its own state, With the coming of 'Hooks' -> Create state in function based components)
		- simple syntax
		- No 'this' keyword dependency

	Component re-renders whenever there is a change in either 
	1. state (Data which is private/specific to a single component)
	2. props (Data sent from parent component to child component)

{/* <Hello student1='Rajesh' student2='Sunil' />
<Hello student1='Samaikhya' student2='Santhana' />
<HelloClass student1='Rajesh' student2='Sunil' /> }
{/* <Hello student1='Rajesh' student2='Sunil' />
<HelloClass student1='Samaikhya' />
*/

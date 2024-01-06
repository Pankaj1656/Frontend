import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Photo from "./components/Photos/photo";
import About from "./components/About";
import Error404 from "./components/Error404";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={ <Photo />}></Route>
        <Route path="/about" element={<About/> }></Route>
        <Route path="*" element={<Error404/> }></Route>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;

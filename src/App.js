
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDisplay from "./pages/ProjectDisplay.js";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";    //import the navbar here (every page will have the Navbar component)
import Footer from "./components/Footer";


function App() {    //the App component will generate and define the routes
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
        {/* //We add a path for the URL, and element to be sure the specific element will be rendered when this path is used */}
          <Route path= "/"           element = {<Home/>}/>
          <Route path= "/projects"   element = {<Projects/>} /> 
          <Route path= "/project/:id" element= {<ProjectDisplay/>}/>
          <Route path= "/experience" element = {<Experience/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

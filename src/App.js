//import './App.css';
import { Route } from "react-router-dom"
import Home from "./components/home";
import About from "./components/about"
import Projects from './components/projects';
import NavBar from './components/nav-bar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </div>
  );
}

export default App;


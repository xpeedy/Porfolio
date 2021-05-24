import './App.css';
import { Link, Route } from "react-router-dom"
import Home from "./components/home";
import About from "./components/about"
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">projects</Link>
      </nav>
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


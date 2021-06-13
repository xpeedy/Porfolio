import Styled from "styled-components";
import { Route } from "react-router-dom"
import Home from "./components/home";
import About from "./components/about"
import Projects from './components/projects';
import NavBar from './components/nav-bar';

function App() {
  return (
    <StyledDiv className="App">
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
    </StyledDiv>
  );
}

export default App;

const StyledDiv = Styled.div`
background-image: url("./feather.jpg");
`

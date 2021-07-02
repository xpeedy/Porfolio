import "./App.css"
import { Route } from "react-router-dom"
import Home from "./components/home";
import About from "./components/about"
import Projects from './components/projects';
import NavBar from './components/nav-bar';
import Footer from "./components/footer";

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
      {/* <SocialFollow /> */}
      <Footer />
    </div>
  );
}

export default App;

// const StyledDiv = Styled.div`
// background-image: url("./feather.jpg");
// `

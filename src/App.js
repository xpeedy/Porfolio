import "./App.css"
import { Route } from "react-router-dom"
import Home from "./components/home";
import Projects from './components/projects';
import NavBar from './components/nav-bar';
import Footer from "./components/footer";
import ContactForm from "./components/contactMeForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/contact">
        <ContactForm />
      </Route>
      <Footer />
    </div>
  );
}

export default App;

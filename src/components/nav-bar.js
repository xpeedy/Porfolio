import { Link } from "react-router-dom";
import "./nav-bar.css";


const NavBar = () => {
    
    return(
        <div className="nav-container">
            <div className="nav-wrapper">
            <img className="profile-pic" src="./mypic.jpg" alt="profile"/>
            <div className="nav-bar">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact Me</Link>
            </div>
            </div>
        </div>
    )
}

export default NavBar;



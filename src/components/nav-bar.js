import React,{ useState } from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";

const navLinks = [
{
    id:0,
    name: "Home",
    link: "/" 
},
{
    id:1,
    name: "Projects",
    link: "/projects"
},
{
    id:3,
    name: "Contact",
    link: "/contact"
}
]

const NavBar = () => {
    const [links, setLinks] = useState(navLinks)
    const [active, setActive] = useState(null)

    const getClassName = id => {
        return id === active ? ' active':""
      };

    const markActive = id => {
        active === id ? setActive(null) : setActive(id)
        console.log(active)
    }

    return(
        <div className="nav-container">
            <div className="nav-wrapper">
            <img className="profile-pic" src="./mypic.jpg" alt="profile"/>
            <div className="nav-bar">
            {links.map(navItem => (
                <Link
                id={navItem.id}
                key={navItem.id} 
                className={`nav-link ${getClassName(navItem.id)}`}
                to={navItem.link}
                onClick={(e) => markActive(e.target.id)}
                >{navItem.name}</Link>
            ))}
            </div>
            {/* <div className="nav-bar">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact Me</Link>
            </div> */}
            </div>
        </div>
    )
}

export default NavBar;



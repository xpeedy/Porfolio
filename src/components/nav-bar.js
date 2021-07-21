import React,{ useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav-bar.css";

const navLinks = [
{
    name: "Home",
    link: "/" 
},
{
    name: "Projects",
    link: "/projects"
},
{
    name: "Contact",
    link: "/contact"
}
]

const NavBar = () => {
    const [links, setLinks] = useState(navLinks)
    const [active, setActive] = useState(0)

    const getClassName = (link) => {
        return splitLocation[1] === link ? "nav-link active":"nav-link"
      };

    // const markActive = id => {
    //     active === id ? setActive(null) : setActive(id)
    // }

     //assigning location variable
     const location = useLocation();

     //destructuring pathname from location
     const { pathname } = location;
 
     //Javascript split method to get the name of the path in array
     const splitLocation = pathname.split("/");

    return(
        <div className="nav-container">
            <div className="nav-wrapper">
            <img className="profile-pic" src="./mypic.jpg" alt="profile"/>
            {/* <div className="nav-bar">
            {links.map((navItem, index) => (
                <Link
                id={index}
                key={index} 
                className={getClassName(navItem.link)}
                to={navItem.link}
                // onClick={(e) => markActive(e.target.id)}
                >{navItem.name}</Link>
            ))}
            </div> */}
            <div className="nav-bar">
                <Link className={splitLocation[1] === "" ? "nav-link active" : "nav-link"} to="/">Home</Link>
                <Link className={splitLocation[1] === "projects" ? "nav-link active" : "nav-link"} to="/projects">Projects</Link>
                <Link className={splitLocation[1] === "contact" ? "nav-link active" : "nav-link"} to="/contact">Contact Me</Link>
            </div>
            </div>
        </div>
    )
}

export default NavBar;



import React,{ useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons"
import "./nav-bar.css";

const navLinks = [
{
    name: "Home",
    src: "/" 
},
{
    name: "Projects",
    src: "/projects"
},
{
    name: "Contact",
    src: "/contact"
}
]

const NavBar = () => {
    // const [links, setLinks] = useState(navLinks)
    // const [active, setActive] = useState(0)
    const [ open, setOpen ] = useState(false);

    const display = () => {
        setOpen(!open)
    }


    // const getClassName = (link) => {
    //     return splitLocation[1] === link ? "nav-link active":"nav-link"
    //   };

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

            <MenuOutlined className="burger-menu-icon" onClick={display} style={{"color": "white"}}/>
            { open ? <div className="burger-menu" onClick={display}>
                <div className="burger-content">
                {navLinks.map(link => (
                        <Link className="burger-link" to={link.src}>{link.name}</Link>
                ))}
                </div>
            </div> : ""}
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



import { Link } from "react-router-dom";
import Styled from "styled-components";
import "./nav-bar.css";


const NavBar = () => {
    
    return(
        <div className="nav-container">
            <div className="nav-wrapper">
            <img className="profile-pic" src="./mypic.jpg" alt="profile"/>
            <div className="nav-bar">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact Me</Link>
            </div>
            </div>
        </div>
    )
}

export default NavBar;

// const Sdiv = Styled.div`
//     display: flex;
//     justify-content: space-evenly;
//     //border: solid white;
//     .nav-wrapper {
//         display: flex;
//         width: 83%;
//         //border:solid red;
//         margin-top: 1%;
//     }
//     .profile-pic {
//         border-radius:50%;
//         width: 4%;
//     }
// `
// const Nav = Styled.nav`
//     display: flex;
//     justify-content: space-evenly;
//     width: 40%;
//     padding: 0%;
//     margin-left: 60%;
//     //border: solid white;
//     .nav-link {
//         display: flex;
//         text-decoration: none;
//         font-size: 170%;
//         color: white;
//         //border: solid red;
//         align-self: center;
//     }
// `;


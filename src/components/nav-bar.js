import { Link } from "react-router-dom";
import Styled from "styled-components";


const NavBar = () => {
    
    return(
        <Sdiv>
            <img className="profile-pic" src="https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" alt="profile"/>
            <Nav className="nav-bar">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/contact">Contact Me</Link>
            </Nav>
        </Sdiv>
    )
}

export default NavBar;

const Sdiv = Styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 1%;
    border: solid black;
    .profile-pic {
        border-radius:50%;
        //border: solid red;
        width: 3%;
        //margin-right: 0%;
    }
`
const Nav = Styled.nav`
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    padding: 0%;
    margin-left: 10%;
    margin-right: -3%;
    //border: solid black;
    .nav-link {
        text-decoration: none;
        font-size: 170%;
        //border: solid red;
        margin-right:-30%;
        align-self: center;
    }
`;


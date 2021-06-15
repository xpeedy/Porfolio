import "./footer.css";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGoogle,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {

    return(
        <div className="footer-container">
            <a className="social-media" 
                href="https://www.linkedin.com/in/hairo-garcia/"> 
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
            <Link className="social-media" 
                to="https://github.com/xpeedy">
                <FontAwesomeIcon icon={faGithub}/></Link>
            <Link className="social-media" 
                to="#">
                <FontAwesomeIcon icon={faGoogle}/></Link>
        </div>
    )
}

export default Footer;


// const StyledDiv = Styled.div`
// display: flex;
// justify-content: space-evenly;
// /* background: solid 1px rgba(255, 255, 255, 0.3); */
// padding: 3%;
// .social-media {
//     text-decoration: none;
//     color: white;
// }
//`

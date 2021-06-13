import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";


const Footer = () => {

    return(
        <StyledDiv>
            <Link className="social-media" src="https://www.linkedin.com/in/hairo-garcia/">Linkedin</Link>
            <Link className="social-media" src="https://github.com/xpeedy">Github</Link>
            <Link className="social-media" src="https://twitter.com/Xpeediy">Twitter</Link>
        </StyledDiv>
    )
}

export default Footer;


const StyledDiv = Styled.div`
display: flex;
justify-content: space-evenly;
background: black;
padding: 3%;
.social-media {
    text-decoration: none;
    color: white;
}
`

import React from "react";
import ProjectsCards from "./projectsCards";
import "./home.css";
// import Styled from "styled-components";
// import {DownOutlined} from "@ant-design/icons"




const Home = () => {
    return(
        <div className="home">
            <div className="top">
                {/* <h1 className="hello">Hello</h1> */}
                <h1 className="name">Hairo Garcia </h1>
                <h3 className="role">Full Stack Web Developer</h3>
                <div className="links">
                    <h3>Linkedin</h3>
                    <h3>Github</h3>
                    <h3>Resume</h3>
                </div>
            </div>
            <a href="#som-home"
             className="btn-home">Take a look
            </a>
            <h2 id="som-home" className="som">Some Of My Work</h2>
            <ProjectsCards />
        </div>
        
    )
}

export default Home;



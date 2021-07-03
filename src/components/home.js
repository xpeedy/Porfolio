import React from "react";
import ProjectsCards from "./projectsCards";
import "./home.css";
// import Styled from "styled-components";
// import {DownOutlined} from "@ant-design/icons"




const Home = () => {
    return(
        <div className="home">
            <div className="top">
                <h1 className="name">Hairo Garcia </h1>
                <h3 className="role">Full Stack Web Developer</h3>
                <div className="links">
                    <a className="linkedin" href="">
                        <p>Linkedin</p>
                    </a>
                    <a className="Github" href="">
                        <p>github</p>
                    </a>
                    <a className="resume" href="">
                        <p>Resume</p>
                    </a>
                </div>
            </div>
            <a href="#som-home"
             className="btn-home">
                 <span className="visible">click here</span>
                 <span className="hidden">take a look</span>
            </a>
            <h2 id="som-home" className="som">Some Of My Work</h2>
            <ProjectsCards />
        </div>
        
    )
}

export default Home;



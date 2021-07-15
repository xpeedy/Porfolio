import React from "react";
import Carousel from "./carousel";
import "./home.css";




const Home = () => {
    return(
        <div className="home">
            <div className="top">
                <h1 className="name">Hairo Garcia </h1>
                <h3 className="role">Full Stack Web Developer</h3>
                <div className="links">
                    <a className="linkedin" href="https://www.linkedin.com/in/hairo-garcia/" target="_blank">
                        <p>Linkedin</p>
                    </a>
                    <a className="Github" href="https://github.com/xpeedy" target="_blank">
                        <p>Github</p>
                    </a>
                    <a className="resume" href="https://docs.google.com/document/d/1Jd8poScfz6GJB8Wv6MWA1H0Qkdz48QpHzM4zNvtTpnA/edit?usp=sharing" target="_blank">
                        <p>Resume</p>
                    </a>
                </div>
            </div>
            <div className="mid">
                <div className="about-me-conatiner">
                    <h2>About me</h2>
                    <p>I'm a passionate developer that is always looking to learn something new.
                        I finish the Full Stack Web Developer promgram at Lambda School. Check them
                        out <a href="" alt="" >here!</a>
                    </p>
                </div>
                <div className="carousel-container">
                    <h2>Skills</h2>
                    <Carousel />
                </div>
            </div>
            {/* <a href="#som-home"
             className="btn-home">
                 <span className="visible">click here</span>
                 <span className="hidden">take a look</span>
            </a> */}
        </div>
        
    )
}

export default Home;



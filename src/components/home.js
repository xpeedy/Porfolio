import React from "react";
import CarouselComp from "./carousel";
import "./home.css";




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
                        <p>Github</p>
                    </a>
                    <a className="resume" href="">
                        <p>Resume</p>
                    </a>
                </div>
            </div>
            <div className="som">
                <p>some other content</p>
            </div>
            <div className="carousel">
                
            </div>
            <CarouselComp />
            {/* <a href="#som-home"
             className="btn-home">
                 <span className="visible">click here</span>
                 <span className="hidden">take a look</span>
            </a> */}
        </div>
        
    )
}

export default Home;



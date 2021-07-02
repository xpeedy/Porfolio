import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";
import projectsData from "../assets/projectsData";
import "./projectsCards.css"




const ProjectsCards = () => {

 

    return(
        <div className="projects-container-home">
            <div className="project-1">
                <img className="project-img-1" src="https://www.humanesociety.org/sites/default/files/styles/768x326/public/2018/08/puppy-410265.jpg?h=0c7c9985&itok=cSH64A3X"></img>
                <div  className="project-info-1">
                <h2 className="title-project-1">Title</h2>
                <h3 className="description-project-1">descripton</h3>
                <p className="paragraph-project-1">paragraph asdlkd lkasjdlk aksjs kadjd a jalsjd lkasdlka asd asjld lkj sd dkasdlksd jdksaj a jsdl aj </p>
                </div>
            </div>
            <div className="project-2">
                <img className="project-img-2" src="https://www.humanesociety.org/sites/default/files/styles/768x326/public/2018/08/puppy-410265.jpg?h=0c7c9985&itok=cSH64A3X"></img>
                <div className="project-info-2">
                <h2 className="title-project-2">Title</h2>
                <h3 className="description-project-2">descripton</h3>
                <p className="paragraph-project-2">paragraph asdlkd lkasjdlk aksjs kadjd a jalsjd lkasdlka asd asjld lkj sd dkasdlksd jdksaj a jsdl aj </p>
                </div>
            </div>
            <div className="project-3">
                <img className="project-img-3" src="https://www.humanesociety.org/sites/default/files/styles/768x326/public/2018/08/puppy-410265.jpg?h=0c7c9985&itok=cSH64A3X"></img>
                <div className="project-info-3">
                <h2 className="title-project-3">Title</h2>
                <h3 className="description-project-3">descripton</h3>
                <p className="paragraph-project-3">paragraph asdlkd lkasjdlk aksjs kadjd a jalsjd lkasdlka asd asjld lkj sd dkasdlksd jdksaj a jsdl aj </p>
                </div>
            </div>
        </div> 
    )
}

export default ProjectsCards;
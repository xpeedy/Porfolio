import React from "react";
import projectsData from "../assets/projectsData";
import "./projectsCards.css"


const ProjectsCards = () => {

    return(
        <div className="projects-container-home">
            {projectsData.map((project) => (
                project.name === "" ? "" :
                <div className="project">
                    <img className="project-img" src={project.picture} alt={project.name}/>
                    <div className="project-info">
                        <h2 className="project-title">{project.name}</h2>
                        <p className="description">{project.description}</p>
                        {project.demo? <a href={project.demo}>Demo</a> : ""}
                        <a href={project.github}>Github |</a>
                    </div> 
                </div>
            ))}
        </div>
     
    )
}

export default ProjectsCards;
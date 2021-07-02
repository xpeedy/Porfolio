import React from "react";
import "./projects.css"
import Cards from "./Card";
import projectsData from "../assets/projectsData";

const Projects = () => {

    return(
        <>
        <h1>My Work</h1>
        <div className="projects-container">
            {projectsData.map(project => (
                <Cards 
                key={project.id}
                name={project.name}
                picture={project.picture}
                description={project.description}
                />
            ))}
        </div> 
        </>
    )
}

export default Projects;

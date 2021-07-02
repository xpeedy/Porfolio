import React, { useState } from "react";
import projectsData from "../assets/projectsData";
import "./projectsCards.css"




const ProjectsCards = () => {



    return(
        <div className="projects-container-home">
            <div className="project-1">
                <img className="project-img-1" src={projectsData[0].picture}></img>
                <div  className="project-info-1">
                <h2 className="title-project-1">{projectsData[0].name}</h2>
                <h3 className="description-project-1">description</h3>
                <p className="paragraph-project-1">{projectsData[0].description}</p>
                </div>
            </div>
            <div className="project-2">
                <img className="project-img-2" src={projectsData[1].name}></img>
                <div className="project-info-2">
                <h2 className="title-project-2">{projectsData[1].name}</h2>
                <h3 className="description-project-2">descripton</h3>
                <p className="paragraph-project-2">{projectsData[1].description}</p>
                </div>
            </div>
            <div className="project-3">
                <img className="project-img-3" src={projectsData[2].name}></img>
                <div className="project-info-3">
                <h2 className="title-project-3">{projectsData[2].name}</h2>
                <h3 className="description-project-3">descripton</h3>
                <p className="paragraph-project-3">{projectsData[2].description}</p>
                </div>
            </div>
        </div> 
    )
}

export default ProjectsCards;
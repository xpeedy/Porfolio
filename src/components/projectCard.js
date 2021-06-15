import React, { useState } from "react";
import {projectsData} from "../assets/projectsData"
import "antd/dist/antd.css";
import "./projectCard.css";
import { Card } from "antd";

const ProjectCard = () => {
    const [data] = useState(projectsData);

    console.log(data)

    return(
        <div className="card-cointainer" {...projectsData.map(project => {
            return (
                <Card className="card"
                 hoverable
                 style={{ width: 240 }}
                 cover={<img alt={project.name} src={project.pic}/>}    
                >{project.name}</Card>
            )
        })}></div>
        
        // <Card className="card"
        // hoverable
        // style={{ width: 240 }}
        // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
        // >example
        // </Card>
    )
}

export default ProjectCard;
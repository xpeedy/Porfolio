import React from "react";
import "antd/dist/antd.css";
import "./Card.css";
import { Card } from "antd";


const Cards = (prop) => {
    
    const {name,picture,description,id} = prop

    return(
        <a href="https://github.com/xpeedy">
        <Card 
        key={id}
        className="project-card"
        hoverable
        // style={{ width: 300 }}
        cover={<img alt={name} src={picture} /> }
        >
            
        <Card.Meta
            title={name}
            description={description}
        />
        </Card>
        </a>
    )
}

export default Cards;
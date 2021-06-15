import React from "react";
import Styled from "styled-components";




const Home = () => {
    return(
        <Stydiv>
            <div className="top">
            <h1 className="name">Hello I'm Hairo</h1>
            <div className="links">
                <h3>Linkedin</h3>
                <h3>Github</h3>
                <h3>something here</h3>
            </div>
            </div>
            <h2 className="som">Some Of My Work</h2>
            <div className="my-work">
                <img className="project" src="#" alt="project"/>
                <img className="project" src="#" alt="project"/>
                <img className="project" src="#" alt="project"/>
                <img className="project" src="#" alt="project"/>
            </div>
        </Stydiv>
        
    )
}

export default Home;

const Stydiv = Styled.div`
display: flex;
flex-wrap: wrap;
/* background-image: url("./feather.jpg"); */


.top {
    margin-top: 1%;
    display: flex;
    //border: solid red;
}

.name {
    display: flex;
    justify-content: right;
    text-align: start;
    font-size: 14rem;
    color: white;
    width: 70%;
    height: 88%;
    line-height: 1.1;
    margin: 3% 0% 0% 11%;
    //border: solid white;;
}

.links {
    text-align: start;
    font-size: 1.5rem;
    margin-top: 26.8%;
    height:17%;
    width: 15%;
    //border: solid white;;
}
h3 {
    color: white;
}

.som {
    display: flex;
    color: white;
    font-size: 2.5rem;
    //border: solid white;;
    margin: 10% 0% 0% 42%;
}

.my-work {
    display: flex;
    flex-wrap: wrap ;
    justify-content: space-evenly;
    width: 90%;
    margin: 5%;
    border: solid black;
}

.project {
    padding: 10%;
    width: .5%;
    border: white solid;
    border-radius: 20%;
}

`

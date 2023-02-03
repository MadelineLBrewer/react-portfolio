import React from "react";
import JCAA from "./PAGES/JCAA/Jcaa";
import "./Projects.css";

function Projects(){
    return <div>
    <h1>Projects</h1>
    <p>Check out my work!</p>

    <div className="project">
    <h2>Business/Portfolio website for JCAA Consulting Engineers, LLC</h2>
        <p>This site was made using HTML, SCSS, Javascript, and Bootstrap</p>
        <a href="https://jcaace.com">Visit jcaace.com</a>
    </div>

    <div className="project">
        <h2>Keeper App</h2>
        <p>A note-taking app built with a React front-end.</p>
    </div>
    </div>;
}

export default Projects;
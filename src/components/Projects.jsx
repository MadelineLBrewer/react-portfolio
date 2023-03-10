import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import JcaaLogo from "../LOGOS/JcaaLogo.png";
import "./Projects.css";

function Projects(){
     return (
        <section
        id="projects"
        className="hero flex-center bg-default"
        style={{ minHeight: "unset" }}
      >

        <section className="projects-section pb3 pb4">
                            <hr className="mb3" />

          <h3>My work:</h3>
          <p>My projects since 2022.</p>
          <div >

<Row>
           <div className="project col-md-3 col-sm-6">
           
           <Link to="/jcaa/">
              <img src={JcaaLogo} alt="JCAA"></img>
            </Link>
            </div>

            <div className="project col-md-3 col-sm-6">
         <h2>Keeper App</h2>
    </div>
            
    <div className="project col-md-3 col-sm-6">
         <h2>Keeper App</h2>
    </div>
</Row>
          </div>
        </section>
      </section>
     );






    //<div>
    // <h1>My Work:</h1>
    

    // <div className="project">
    // <h2>Business/Portfolio website for JCAA Consulting Engineers, LLC</h2>
    //     <p>This site was made using HTML, SCSS, Javascript, and Bootstrap</p>
    //     <a href="https://jcaace.com">Visit jcaace.com</a>
    // </div>

    // <div className="project">
    //     <h2>Keeper App</h2>
    //     <p>A note-taking app built with a React front-end.</p>
    // </div>
    // </div>;
}

export default Projects;
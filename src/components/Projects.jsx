import React from "react";
import { Link } from "react-router-dom";
// import JcaaLogo from './PAGES/JCAA/JcaaLogo.png';
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
          <div className="one-column sm-two-columns lg-four-columns gap2">

           <div className="project">
           <h2>JCAA Website</h2>
           <Link to="/jcaa/">
              {/* <JcaaLogo /> */}
              <img src="../PAGES/JCAA/JcaaLogo.png" alt="JCAA"></img>
            </Link>
            </div>

            {/* <div className="project">
         <h2>Keeper App</h2>
         <p>A note-taking app built with a React front-end.</p>
    </div> */}
            

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
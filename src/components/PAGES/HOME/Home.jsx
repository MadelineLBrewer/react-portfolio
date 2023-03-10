import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faWrench, faCode } from '@fortawesome/free-solid-svg-icons';
import SocialIcons from '../../SocialIcons';
import "./Home.css";
import { Helmet } from "react-helmet";
import CCBG from "./cross-campus-bg.png";
import Mel from "./madelinebrewblue.png";

const Home = () => {

  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });



  return (
    <div id="home">
<Helmet>
  <title>Madeline Brewer</title>
</Helmet>
<section
        className="hero flex-end"
        style={{
          minHeight: "calc(100vh - 63.19px)",
        }}
      >
        <section className="content-col flex md-two-columns">
          <div className="absolute md-relative md-order1 whole h100 flex-vertical relative bg-white">
            <img
              className="whole md-half"
              style={{
                objectFit: "cover",
                transform: `translateY(${-scrollY / 8}px)`,
                filter: `blur(${scrollY / 64}px) opacity(0.9)`,
                position: "fixed",
                bottom: 0,
                height: "100vh",
                right: 0,
                overflow: "hidden",
                alignSelf: "center",
                justifySelf: "center",
                transition: "width 0.5s ease",
                willChange: "width",
              }}
              alt="Hero Background"
              src={CCBG} //background image for pic
              width="100%"
              height="auto"
            />
            <img
              className="mel-img"
              src={Mel} //picture of me layered on top
              alt="madeline"
              style={{
                transform: `translateY(${-scrollY / 4}px)`,
                filter: `blur(${scrollY / 128}px) `,
              }}
            />
          </div>
          <div className="introduction">
            <div
              className="content-box flex-vertical"
              style={{
                textTransform: "none",
              }}
            >
              <h1 
              style={{ textTransform: "none", lineHeight: 1 }}
              >
                Madeline
                <br />
                Brewer
              </h1>
              <p>Web Developer</p>
              <div className="mb3">
                <small className="mb3" style={{ lineHeight: 1 }}>
                  <span className="mapPin">
                    <FontAwesomeIcon icon={faMapPin} />
                  </span>
                 Denver,&nbsp;CO
                </small>
              </div>
            </div>
            <div className='links'>
              <label>Links:</label>
              <br />
              <SocialIcons />
            </div>
          </div>
        </section>
      </section>
      
      <section>
          <div id="about">
          <h4>About Me:</h4>
            <p>
              I'm a <i>Front End Web Developer</i> with experience in{" "}
              <i> Development</i> and <i>Design</i> who can
            create and maintain websites and mobile applications, from conception, and on to deployment.
            
             I'm actively searching for full-time role with a progressive company where I can utilize my skills and experiences to contribute to the development of cutting-edge web applications.
            </p>

            {/* <div className='disciplines'>
            <div>
            <div className='discipline' style={{ background: "rgba(0, 206, 89, 0.30)" }}>
                <h4>
                  <FontAwesomeIcon icon={faCode} />
                  Technical Skills
                </h4>
                </div>
                <ul>
                  <li>HTML5, CSS3, JavaScript</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>SASS</li>
                  <li>jQuery</li>
                  <li>Git</li>
                  <li>DOM Manipulation</li>
                  <li>Node.js</li>
                </ul>
              </div>
              <div className="flex-center">
              <div className='discipline' style={{ background: "rgba(0, 206, 89, 0.30)" }}>
                <h4>
                  <FontAwesomeIcon icon={faWrench} />
                  Other Skills
                </h4>
                </div>
                <ul>
                  <li>Detail Oriented</li>
                  <li>Problem Solving</li>
                  <li>Teamwork</li>
                  <li>Communication</li>
                  <li>Time Management</li>
                </ul>
              </div>
            </div> */}

          



          <section className="one-column pb3">
          <div>
            <h4 className="mb0">Development Tools:</h4>
            <p>
              I use these tools to create design systems and reusable components
              so that I can quickly build prototypes at the highest fidelity.
            </p>
            <div className="development-tools py1">
              <small>HTML</small>
              <small>CSS</small>
              <small>Javascript</small>
              <small>Sass</small>
              <small>React</small>
              <small>Github</small>
            </div>
          </div>
          </section>
        </div>
        </section>
    </div>
  )
};

export default Home;
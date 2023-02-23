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
                  <span className="mr0 text-red0">
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
      <section className="hero bg-default">
      <section className="py4 one-column lg-two-columns gap3 xl-gap4">
          <div id="about">
          <label>About Me:</label>
            <h3 className="mb1">3x Impact</h3>
            <p>
              I'm a <i>Full Stack Web Developer</i> with experience in{" "}
              <i>Frontend Development</i> and <i>Backend Development</i> who can
            create and maintain websites and mobile applications, and on to deployment.
            </p>

            <div className='disciplines'>
            <div className="flex-center">
            <div className='discipline' style={{ background: "rgba(255, 96, 96, 0.30)" }}>
                <h6>
                  <FontAwesomeIcon icon={faCode} />
                  Front-end Development
                </h6>
                </div>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="flex-center">
              <div className='discipline' style={{ background: "rgba(0, 206, 89, 0.30)" }}>
                <h6>
                  <FontAwesomeIcon icon={faWrench} />
                  Back-end Development
                </h6>
                </div>
                <ul>
                  <li>SQL</li>
                  <li>NoSQL</li>
                  <li>REST APIs</li>
                </ul>
              </div>
            </div>

            <p>
             **edit**I'm actively searching for full-time role on a remote team in
              emerging technology with a small or medium sized company where I
              can collaborate with awesome people, combine my skills and make an
              impact.
            </p>

          </div>
        </section>
      </section>
    </div>
  )
};

export default Home;
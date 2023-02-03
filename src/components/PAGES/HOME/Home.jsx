import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
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
              <h1 style={{ textTransform: "none", lineHeight: 1 }}>
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
            <div>
              <label>Links:</label>
              <br />
              <a href="https://www.linkedin.com/in/madeline-brewer-7118a8240/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://github.com/MadelineLBrewer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://codepen.io/Mellybrew/">
                <FontAwesomeIcon icon={faCodepen} />
              </a>
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
              I'm a <i>Web Developer</i> with experience in{" "}
              <i>Frontend Development</i> and <i>Product Discovery</i> who can
              lead a product from the point of discovery, through the design
              phase, and on to deployment.
            </p>

          </div>
        </section>
      </section>
    </div>
  )
};

export default Home;
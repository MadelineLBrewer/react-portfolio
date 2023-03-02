import React from "react";
import {Helmet} from "react-helmet";
import { Row, Col } from 'react-bootstrap';
import "./Jcaa.css";
import JcaaLogo from "../../../LOGOS/JcaaLogo.png";

function JCAA(){
    return(
        <div id="jcaa">
        <Helmet>
            <title>JCAA Consulting Engineers. LLC</title>
        </Helmet>

        <Row>
        <Col className="col-md-6">
        <section>
        
        <label>Project:</label>
        <h1>JCAA Consulting Engineers, LLC</h1>
        <div>
                <p>JCAA Consulting Engineers, LLC is a full service Mechanical, Electrical, Plumbing, and Structural Engineering firm offering design and consulting services.</p>
            </div>
        </section>
        </Col>

      <Col className="col-md-6">
        <section className="princess">
            <div>
            <div className="cinderella">
              <label>Title:</label>
              <h5>Frontend Web Developer</h5>
            </div>
            <div className="cinderella">
              <label>City:</label>
              <h5>Wheat Ridge, CO (Remote)</h5>
            </div>
            <div className="cinderella">
              <label>When:</label>
              <h5>2022 - Present Day</h5>
            </div>
            <div className="cinderella">
              <label>Country:</label>
              <h5>USA</h5>
            </div>
            
          </div>
        </section>
        </Col>

        <Col className="col-md-6">
        <div>
            <div className="jcaalogo">
              <img src={JcaaLogo} alt="JCAA"></img>
            </div>
          </div>
          </Col>
          <Col className="col-md-6">
          <section>
            <div>
                <label>Responsibilities:</label>
                <h2>What Do I Do Here?</h2>
                <p>Lead the design and development of their company website.</p>
            </div>
            <div>
            <div className="rapunzel">
                <h5>Product:</h5>
                <small>
                  Understand business objectives and architect solutions based
                  on input from company manager and business partners.
                </small>
              </div>
              <div className="rapunzel">
                <h5>Web and Mobile Development:</h5>
                <small>
                  I take a hands-on approach to custom development to insure the design and feasibility of the website.
                </small>
              </div>
            </div>
            </section>
            </Col>
        

        <section>
            <div>
            <div>
                <label>Story:</label>
                <h2>How I started here.</h2>
                </div>
                <p>In Spring of 2022, I was chatting with Nick, a partner at JCAA about my web development journey. He expressed to me that their company needed a complete overhaul of their website, as it had become outdated, and some of the links had broken. It needed a total facelift. After discussing what exactly he wanted out of the website, we set up a meeting to discuss a plan for a totally new face for the website with all the company partners. I remain attentive to the needs of JCAA for keeping their website polished and informative.</p>
            </div>
        </section>

        <section>
<div>
    <div>
        <label>Challenge #1:</label>
        <h2>***Determine The Company's Vision</h2>
        <p>This website serves as a company portfolio, brochure, and job posting. I sat down with the partners to determine what they wanted to see, what they wanted the site to do, and determine what kind of style they want. Their original site was not device responsive, and many of the links and formatting of the pages had broken. I offered them a prototype for the design and funtionality I had in mind, and we all developed a vision for the website together.</p>
    </div>
    <div>
        <label>Challenge #2:</label>
        <h2>Redesign The Website </h2>
        {/* add some screenshot images from the site i.e. desktop vs mobile, clean design */}
        <p>The company's logo includes a very bright green that they wanted to keep. I needed to find a way to implement that intense green without being too distracting, and keeping a sharp professional feel across the website. Also making sure that the design would be device responsive.</p>
        <p>I used HTML, CSS, SCSS, Bootstrap, and Javascript to develop the website.</p>
    </div>
    <div>
        <label>Challenge #3:</label>
        <h2>Launch The Website.</h2>
        <p>The website was deployed in January 2023. I remain attentive to the needs of the company, and we are planning for future updates and features.</p>
    </div>
</div>

        </section>
        </Row>
        </div>
    );
}

export default JCAA;
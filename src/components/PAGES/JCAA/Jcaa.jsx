import React from "react";
import {Helmet} from "react-helmet";
// import JcaaLogo from "./JcaaLogo.png";

function JCAA(){
    return(
        <div id="jcaa">
        <Helmet>
            <title>JCAA Consulting Engineers. LLC</title>
        </Helmet>
        <section>
        <label>Project:</label>
        <h1>JCAA Consulting Engineers. LLC</h1>
        </section>

        <section>
            <div>
                <p>JCAA Consulting Engineers, LLC is a full service Mechanical, Electrical, Plumbing, and Structural Engineering firm offering design and consulting services.</p>
            </div>
            <div className="two-columns gap2">
            <div>
              <label>Title:</label>
              <h5>Frontend Web Developer</h5>
            </div>
            <div>
              <label>City:</label>
              <h5>Wheat Ridge, CO (Remote)</h5>
            </div>
            <div>
              <label>When:</label>
              <h5>2022 - Present Day</h5>
            </div>
            <div>
              <label>Country:</label>
              <h5>USA</h5>
            </div>
          </div>
        </section>

        <section>
        <div className="flex-center">
            <div className="half md-third lg-whole xl-half">
              {/* <JcaaLogo /> */}
            </div>
          </div>
            <div>
                <label>Responsibilities:</label>
                <h2>What Do I Do Here?</h2>
                <p>Lead the design and development of their company website.</p>
            </div>
            <div>
            <div>
                <h5>Product:</h5>
                <small>
                  Understand business objectives and architect solutions based
                  on input from CEO, CTO, and internal data, and maintain our
                  product pipeline.
                </small>
              </div>
              <div>
                <h5>Web and Mobile Development:</h5>
                <small>
                  Work along side devs with a very hands-on approach, insuring
                  the design and feasability of our products.
                </small>
              </div>
            </div>
        </section>

        <section>
            <div>
            <div>
                <label>Story:</label>
                <h2>How I started here.</h2>
                </div>
                <p>In Spring of 2022, I was chatting with Nicholas Rohr, a partner at JCAA about my web development journey. They needed a complete overhaul of their website, as it had become outdated, and smoe of the links had broken. It needed a total facelift. After discussing what exactly he wanted out of the website, we set up a meeting to discuss a plan for a totally new face for the website with all the company partners. </p>
            </div>
        </section>

        <section>
<div>
    <div>
        <label>Challenge #1:</label>
        <h2>Determine the purpose and function of the site</h2>
        <p>This website serves as a company portfolio, brochure, and job posting. I sat down with the partners to determine what they wanted to see, what they wanted the site to do, and determine what kind of style they want.</p>
    </div>
    <div>
        <label>Challenge #2:</label>
        <h2>Decide on a look and feel for the site. </h2>
        <p>The company's logo includes a very bright green that they wanted to keep. I needed to find a way to implement that intense green without being too distracting, and keeping a sharp professional feel across the website. Also making ure that the design would be mobile responsive.</p>
    </div>
    <div>
        <label>Challenge #3:</label>
        <h2>Launching the website.</h2>
        <p>The company's logo includes a very bright green that they wanted to keep. I needed to find a way to implement that intense green without being too distracting, and keeping a sharp professional feel across the website.</p>
    </div>
</div>

        </section>
        
        </div>
    );
}

export default JCAA;
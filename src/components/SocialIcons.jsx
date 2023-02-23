import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faCodepen, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import "./SocialIcons.css";

class SocialIcons extends Component {
  render() {
    return (
      <div className="social-icons text-white" style={{ gap: "var(--unit2)" }}>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/madeline-brewer-7118a8240/">
          <FontAwesomeIcon icon={faLinkedinIn} alt="LinkedIn"/>
        </a>
        <a target="_blank" rel="noreferrer" href="https://codepen.io/Mellybrew">
          <FontAwesomeIcon icon={faCodepen} alt="Codepen" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://stackoverflow.com/users/19140387/madeline-brewer"
        >
          <FontAwesomeIcon icon={faStackOverflow} alt="StackOverflow"/>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/MadelineLBrewer">
          <FontAwesomeIcon icon={faGithub} alt="Github" />
        </a>
      </div>
    );
  }
}

export default SocialIcons;
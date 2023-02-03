import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';

function Contact(){
    return <div>
    <h1>Let's Connect!</h1>
    <FontAwesomeIcon icon={faLinkedinIn} />
    <p>linked in</p>
    <FontAwesomeIcon icon={faGithub} />
    <p>github</p>
    <FontAwesomeIcon icon={faCodepen} />
    <p>phone</p>
    <p>email</p>
    </div>;
}

export default Contact;
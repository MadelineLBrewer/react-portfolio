import React from "react";

function Navbar(){
    return <nav className="nav">
    <h1>
    <a href="/">MB</a>
        </h1>
        <ul>
            <li>
            <a href="/projects">Projects</a>
            </li>
            <li>
            <a href="/experience">Experience</a>
            </li>
            <li>
            <a href="/contact">Contact</a>
            </li>
        </ul>

    </nav>
}

export default Navbar;
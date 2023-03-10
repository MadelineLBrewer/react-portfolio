import React from "react";
import "./nav.css";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavLogo from "../../../LOGOS/MBLOGO.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faCalendar } from '@fortawesome/free-solid-svg-icons';

function NavContent() {
  return (
    <ul className="flex-center flex-vertical md-flex-horizontal">

      <li>
        <a href="#projects">Projects</a>
      </li>

      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://resume.io/r/unpd5I2cB"
        >
          Resumé
        </a>
      </li>

      <li>
        <a
          href="https://calendly.com/madelinebrewer/30min"
          target="_blank"
          rel="noreferrer"
        >

          <Button variant="success">
            <FontAwesomeIcon icon={faCalendar} />
            &nbsp;&nbsp;Schedule Interview
          </Button>
        </a>
      </li>
    </ul>
  );
}
class Nav extends React.Component {
  state = {
    displaySideNav: false,
  };
  render() {
    return (
      <nav className="floating-nav">

        <div
          style={{
            background: "var(--transWhite-75)",
            borderRadius: "var(--unit3)",
            gap: "var(--unit0)",
          }}
          className="d-flex"
        >
          <Link to="/" className="">
          <img 
          className="header-logo"
          src={NavLogo} 
          alt="MB-logo"  
          />
          </Link>

          {/* <div
            className="mt-2"
            style={{ color: "var(--transBlueC-50)" }}
          >
            <label>Status:</label>
            <div
              className="status"
              style={{
                borderRadius: "12px",
                color: "var(--transBlueC-75)",
              }}
            >
              <span style={{ color: "var(--green0)" }} className="mr0">
              <FontAwesomeIcon icon={faUserTie} />
              </span>
              Interviewing&nbsp;now
            </div>
          </div> */}
        </div>

        {/* button */}


        {/* desktop */}
        <span
          className="ghost md-flex"
          style={{
            background: "var(--transWhite-75)",
            borderRadius: "var(--unit3) 0 0 var(--unit3)",
          }}
        >
          <NavContent />
        </span>

        {/* mobile */}
        <div
          id="mobile-nav-links"
          className={
            this.state.displaySideNav
              ? "sidenav sidenav-show"
              : "sidenav sidenav-hide"
          }
        >
          <div className="overlay">
            <NavContent />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
import React from "react";
import "./nav.css";
import NavLogo from "../../../LOGO/MB-logo.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faCalendar } from '@fortawesome/free-solid-svg-icons';

function NavContent() {
  return (
    <ul className="flex-center flex-vertical md-flex-horizontal">
      <li className="md-ghost">
      </li>

      <li>
        <a href="#projects">Projects</a>
      </li>

      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://resume.io/r/gEFMf2bm4"
        >
          Resumé
        </a>
      </li>

      <li>
        <a
          href="https://calendly.com/interview-chuck-howard/30-minutes"
          target="_blank"
          rel="noreferrer"
        >

          <button className="green">
            <FontAwesomeIcon icon={faCalendar} />
            &nbsp;&nbsp;Schedule Interview
          </button>
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
          className="flex-center-y"
        >
          <Link to="/" className="flex flex-center-y">
          <img 
          className="header-logo"
          src={NavLogo} 
          alt="MB-logo"  
          />
          </Link>

          <div
            className="flex-vertical"
            style={{ color: "var(--transBlueC-50)" }}
          >
            <label>Status:</label>
            <small
              className="status px1"
              style={{
                borderRadius: "var(--unit1)",
                color: "var(--transBlueC-75)",
              }}
            >
              <span style={{ color: "var(--green0)" }} className="mr0">
              <FontAwesomeIcon icon={faUserTie} />
              </span>
              Interviewing&nbsp;now
            </small>
          </div>
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
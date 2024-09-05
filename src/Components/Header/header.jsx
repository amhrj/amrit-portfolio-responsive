import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        <span>Amrit Maharjan</span>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <FontAwesomeIcon icon={faBars} id="menu-icon" />

      <button className="visit-btn">Visit Github</button>
    </header>
  );
}

export default header;

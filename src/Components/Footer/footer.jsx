import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function footer() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="input-box">
          <h2 className="section-title">Contact Me</h2>
          <div className="input">
            <input type="text" placeholder="example@email.com" />
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
          </div>
          <div className="btn">Sumbit</div>
        </div>
      </section>
      <footer>
        <ul>
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
        <p className="copyright">&copy; All Rights Reserverd | Amrit Maharjan</p>
      </footer>
    </>
  );
}

export default footer;

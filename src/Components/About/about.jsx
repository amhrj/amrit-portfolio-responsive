import React from "react";
import profilePhoto from "../../img/ProfilePhoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faFileCode,
  faLaptop,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import Project1 from "../../img/Project1.jpg";
import Project2 from "../../img/Project2.png";
import Project3 from "../../img/Project3.png";

function about() {
  return (
    <>
      <section id="about" className="about">
        <div className="about-container">
          <img src={profilePhoto} alt="profilePhoto" />
          <div className="info-box">
            <div className="text">
              <h3>Hi, I'm</h3>
              <h1>Amrit Maharjan</h1>
              <span>Full Stack Developer</span>
            </div>

            <div className="btn-group">
              <div className="btn">Download CV</div>
              <div className="btn">Contact</div>
            </div>

            <div className="socials">
              <FontAwesomeIcon icon={faGithub} className="social-icons" />
              <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="experience">
        <h2 className="section-title">Experience</h2>

        <div className="experience-info">
          <div className="grid">
            <div className="grid-card">
              <FontAwesomeIcon icon={faCode} className="experience-icons" />
              <span> Frontend Development</span>
              <h3>2020 - Present</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
                quia!
              </p>
            </div>
            <div className="grid-card">
              <FontAwesomeIcon icon={faFileCode} className="experience-icons" />
              <span> Frontend Development</span>
              <h3>2020 - Present</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
                quia!
              </p>
            </div>
            <div className="grid-card">
              <FontAwesomeIcon icon={faLaptop} className="experience-icons" />
              <span> Frontend Development</span>
              <h3>2020 - Present</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
                quia!
              </p>
            </div>
            <div className="grid-card">
              <FontAwesomeIcon icon={faList} className="experience-icons" />
              <span> Frontend Development</span>
              <h3>2020 - Present</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
                quia!
              </p>
            </div>
          </div>
          <img src={profilePhoto} alt="profilePhoto" />
        </div>
      </section>

      <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <img src={Project1} alt="ProjectImage" />
            <h3>Project X</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, odio?
            </p>
            <div className="btn-group">
              <div className="btn">Live Demo</div>
              <div className="btn">Github Repo</div>
            </div>
          </div>
          <div className="project-card">
            <img src={Project2} alt="ProjectImage" />
            <h3>Project Y</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, odio?
            </p>
            <div className="btn-group">
              <div className="btn">Live Demo</div>
              <div className="btn">Github Repo</div>
            </div>
          </div>
          <div className="project-card">
            <img src={Project3} alt="ProjectImage" />
            <h3>Project Z</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, odio?
            </p>
            <div className="btn-group">
              <div className="btn">Live Demo</div>
              <div className="btn">Github Repo</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;

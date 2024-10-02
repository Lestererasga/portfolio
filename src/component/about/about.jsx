import React from "react";
import "./about.css";
import ME from "../../assets/lester3.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" size={30} />
              <h5>Experience</h5>
              <small>7+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" size={30} />
              <h5>Clients</h5>
              <small>5 Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" size={30} />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>

          <p>
            A dynamic web developer with a passion for technology, I thrive on
            creating seamless digital experiences that captivate users. By
            merging analytical problem-solving with innovative design, I deliver
            robust, scalable websites tailored to meet diverse client needs.
            Always eager to embrace new challenges, I continuously seek
            opportunities to expand my skill set and enhance my craft, ensuring
            every project reflects the ultimate in quality and functionality.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;

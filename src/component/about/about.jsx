import React from 'react'
import './about.css'
import ME from '../../assets/lester3.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
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
              <FaAward className='about__icon' size={30}/>
              <h5>Experience</h5>
              <small>6+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' size={30}/>
              <h5>Clients</h5>
              <small>3 Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' size={30}/>
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>

          <p>
          A tech-savvy professional who pursues a deeper understanding of all things technology. With all of the skills needed in the world of development such as problem solving, analysis and creative thinking. Always being up for any challenge, there is no task that can't be done for a true professional. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Lester2.png'
import SOCIAL from './headerSocial'

const header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Lester Erasga</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <SOCIAL />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header
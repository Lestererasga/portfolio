import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'

const headerSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/lester-erasga-b08101145/" target="_blank" rel="noreferrer"><BsLinkedin size={35}/></a>
        <a href="https://github.com/deathnoteoO6" target="_blank" rel="noreferrer"><BsGithub size={35}/></a>
        <a href="https://www.facebook.com/deathnoteoO6" target="_blank" rel="noreferrer"><FaFacebookSquare size={35}/></a>
    </div>
  )
}

export default headerSocial
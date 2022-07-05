import React from 'react'
import './porfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https//github.com',
    preview: 'https//github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Chart Template',
    github: 'https//github.com',
    preview: 'https//github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https//github.com',
    preview: 'https//github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https//github.com',
    preview: 'https//github.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https//github.com',
    preview: 'https//github.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https//github.com',
    preview: 'https//github.com'
  }
]

const porfolio = () => {
  return (
    <section id='porfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, preview}) => {
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn'>Github</a>
          <a href={preview} className='btn btn-primary'>Preview</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default porfolio
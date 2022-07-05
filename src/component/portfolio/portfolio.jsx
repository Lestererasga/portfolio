import React from 'react'
import './portfolio.css'
import Sites from '../sites/sites'
import { products } from '../../data'

const portfolio = () => {
  return (
    <section id='porfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
        <div className="pl-list">
        {products.map((item) => (
          <Sites key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default portfolio
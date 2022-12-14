import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port.png'
import IMG2 from '../../assets/cv.png'
import IMG3 from '../../assets/snake.png'
import IMG4 from '../../assets/brick.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       <article className='portfolio__item'>
         <div className="portfolio_item-image">
           <img src={IMG1} alt="" />
         </div>
         <h3>Personal Portfolio </h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/MoteneJan/" className='btn' target='_blank'>Github</a>
         <a href="https://github.com/MoteneJan/Web-Personal-Portfolio" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>         
       </article>

       <article className='portfolio__item'>
         <div className="portfolio_item-image">
           <img src={IMG2} alt="" />
         </div>
         <h3>Web CV </h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/MoteneJan/" className='btn' target='_blank'>Github</a>
         <a href="https://github.com/MoteneJan/Web-Personal-Portfolio" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
       </article>

       <article className='portfolio__item'>
         <div className="portfolio_item-image">
           <img src={IMG3} alt="" />
         </div>
         <h3>Snake Game </h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/MoteneJan/" className='btn' target='_blank'>Github</a>
         <a href="https://github.com/MoteneJan/Web-Personal-Portfolio" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
       </article>

       <article className='portfolio__item'>
         <div className="portfolio_item-image">
           <img src={IMG4} alt="" />
         </div>
         <h3>Brick Breaker Game </h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/MoteneJan/" className='btn' target='_blank'>Github</a>
         <a href="https://github.com/MoteneJan/Web-Personal-Portfolio" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
       </article>
      </div>      
    </section>
  )
}

export default Portfolio
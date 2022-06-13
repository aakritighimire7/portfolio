import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Sudoku.jpg'
import IMG2 from '../../assets/Paint.jpg'
import IMG3 from '../../assets/po.PNG'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Sudoku Solver App',
    github: 'https://github.com/aakritighimire7/Sudoku-Solver',
    demo: 'https://drive.google.com/file/d/13ldeWoj_A5EPUr-78Z1tGBzNPRe5ktk4/view?usp=sharing'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Paint App',
    github: 'https://github.com/aakritighimire7/Paint-App',
    demo: 'https://drive.google.com/file/d/14-VMYiwod-dwZM9wYruJxRHSmqim7-2j/view?usp=sharing'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio Website',
    github: 'https:/github.com',
    demo: 'https:/github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
      {
        data.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
          )
        })
        }
      </div>
    </section>
  )
}

export default Portfolio
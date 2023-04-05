import React from 'react'
import "./Card.scss"

const Card = ({ name, image, tagline, first_brewed, description, }) => {
    
  return (
    <div className='beer-card'>
      <img src={image} alt={name} className="beer-card__image" />
      <section className='beer-card__conent'>
      <h2>{name}</h2>
      <h3>{tagline}</h3>
      <p>First brewed: {first_brewed}</p>
      <article>
        <p>Description: <br/> {description}</p>
      </article>
      </section>       
    </div>
  )
}

export default Card
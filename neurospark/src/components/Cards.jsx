import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <>
      <div className="cards">
        <h1>Check out our projects</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem 
                src='images/img-1.jpg'
                text='Check out our project at obeid house'
                label='Projects'
                path='/projects'
              />
              <CardItem 
                src='images/img-2.jpg'
                text='Check out our project at walid house'
                label='Projects'
                path='/projects'
              />
            </ul>
            <ul className="cards__items">
              <CardItem 
                src='images/img-9.jpg'
                text='Check out our project at firdaus house'
                label='Projects'
                path='/projects'
              />
              <CardItem 
                src='images/img-1.jpg'
                text='Check out our project at obeid house'
                label='Projects'
                path='/projects'
              />
              <CardItem 
                src='images/img-2.jpg'
                text='Check out our project at walid house'
                label='Projects'
                path='/projects'
              />
            </ul>
          </div>
          {/* add another card container displaying important services informations, FAQ and pricing */}
        </div>
      </div>
    </>
  )
}

export default Cards
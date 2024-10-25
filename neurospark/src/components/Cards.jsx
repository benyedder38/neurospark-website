import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import { Button } from './Button'

function Cards() {
  return (
    <>
      <div className="cards" id='info-card'>
        <div className="cards__container">
          <h1>About Us</h1>
          <h2>Electrician services in Sydney</h2>
          <p>The Local Electrician is one of the most trusted providers of electrical services in Sydney. We offer a vast array of electrician services, such as installation, servicing and maintenance, to residential, commercial and industrial clients in the area. Our experienced team of qualified electricians can handle any job, from minor repairs to large-scale projects. You can count on us 24/7 to work on your electrical issue, and we don’t overcharge or perform unnecessary services. Call us today and get 15% off on your first service from us!</p>
          <div className="cards__wrapper">
            
          </div>
        </div>
        <div className="cards__container">
          <h1>Why We Stand Out</h1>
          <p>The Local Electrician has been helping clients in Sydney for over 25 years and would love to use our expertise to help you with your electrical needs!</p>
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem 
                src='images/img-1.jpg'
                text='Licensed & Insured Electricians'
                label='Projects'
                path='/projects'
              />
              <CardItem 
                src='images/img-2.jpg'
                text='On-time Electrician Or Its Free!'
                label='Projects'
                path='/projects'
              />
            </ul>
            <ul className="cards__items">
              <CardItem 
                src='images/img-9.jpg'
                text='Same Day Services'
                label='Projects'
                path='/projects'
              />
              <CardItem 
                src='images/img-1.jpg'
                text='Free Safety Inspection'
                label='Projects'
                path='/projects'
              />
              <CardItem 
                src='images/img-2.jpg'
                text='5 Year Warranty On All Materials'
                label='Projects'
                path='/projects'
              />
            </ul>
          </div>
        <h1>Lifetime warranty on labour</h1>
        <p>We know that you will be living with the results of our work for a long time, so you can count on us to perform excellently. Our electricians stand behind their work with a lifetime workmanship guarantee.</p>
        <Button buttonStyle='btn--outline'>MORE ABOUT US</Button>
        </div>
      </div>
      <div className="cards" id='services-card'>
        <h1>Check out our services</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem 
                src='images/img-1.jpg'
                text='Licensed & Insured Electricians'
                label='Electrical Services'
                path='/services'
              />
              <CardItem 
                src='images/img-2.jpg'
                text='On-time Electrician Or Its Free!'
                label='Electrical Services'
                path='/services'
              />
              <CardItem 
                src='images/img-3.jpg'
                text='Electrical Maintenance'
                label='Services'
                path='/services#maintenance'
              />
            </ul>
            <ul className="cards__items">
              <CardItem 
                src='images/img-4.jpg'
                text='Electrical Safety Inspection'
                label='Services'
                path='/services#safety-inspection'
              />
              <CardItem 
                src='images/img-5.jpg'
                text='Light and Power Repairs'
                label='Services'
                path='/services#light-power-repairs'
              />
              <CardItem 
                src='images/img-6.jpg'
                text='Safety Switches Installation'
                label='Services'
                path='/services#safety-switches'
              />
            </ul>
            <ul className="cards__items">
              <CardItem 
                src='images/img-7.jpg'
                text='Power Outlets Installation'
                label='Services'
                path='/services#power-outlets'
              />
              <CardItem 
                src='images/img-8.jpg'
                text='Switchboard Upgrades'
                label='Services'
                path='/services#switchboard-upgrades'
              />
              <CardItem 
                src='images/img-9.jpg'
                text='Fault Finding & Diagnostics'
                label='Services'
                path='/services#fault-finding'
              />
            </ul>
            <ul className="cards__items">
              <CardItem 
                src='images/img-10.jpg'
                text='Home Re-wiring'
                label='Services'
                path='/services#home-rewiring'
              />
              <CardItem 
                src='images/img-11.jpg'
                text='Smoke Alarm Installation'
                label='Services'
                path='/services#smoke-alarms'
              />
              <CardItem 
                src='images/img-12.jpg'
                text='Outdoor & Landscape Lighting'
                label='Services'
                path='/services#outdoor-lighting'
              />
            </ul>
            <ul className="cards__items">
              <CardItem 
                src='images/img-13.jpg'
                text='Home Automation & Smart Wiring'
                label='Services'
                path='/services#home-automation'
              />
              <CardItem 
                src='images/img-14.jpg'
                text='Data and Phone Outlets'
                label='Services'
                path='/services#data-phone-outlets'
              />
              <CardItem 
                src='images/img-15.jpg'
                text='Test and Tag Services'
                label='Services'
                path='/services#test-and-tag'
              />
            </ul>
            <ul className="cards__items">
              <CardItem 
                src='images/img-16.jpg'
                text='Ceiling Fans Installation'
                label='Services'
                path='/services#ceiling-fans'
              />
              <CardItem 
                src='images/img-17.jpg'
                text='Water Heater Installation'
                label='Services'
                path='/services#water-heater'
              />
              <CardItem 
                src='images/img-17.jpg'
                text='Water Heater Installation'
                label='Services'
                path='/services#water-heater'
              />
            </ul>
          </div>
          <Button buttonStyle='btn--outline'>MORE ABOUT OUR SERVICES</Button>
        </div>
      </div>
      <div className="cards" id='projects-card'>
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
        </div>
      </div>
    </>
  )
}

export default Cards
import React from 'react'
import './DanceTour.css'
import DanceTourCard from './DanceTourCard'
import Card from "../images/dance_tour1.png"
import Card1 from "../images/dance_tour2.png"
import Card2 from "../images/dance_tour3.png"


function DanceTour() {

  const cards = [
    {
      title: 'america',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: Card
    },
    {
      title: 'asia',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: Card1
    },
    {
      title: 'australia',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: Card2
    }
  ]

  return (
      <>
        <div className="container-fluid" id='dance-tour'>
          <div className="row">
            <div className='text-center text-white mt-5 mb-5'>
                <h1>DANCE TOUR</h1>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia<br/> odio vitae vestibulum vestibulum. </h5>
              </div>
              <div className='row justify-content-center mx-0 mb-5 pb-2'> 
                  <DanceTourCard items = {cards} />
              </div>
          </div>
        </div>
      </>
  )
}

export default DanceTour
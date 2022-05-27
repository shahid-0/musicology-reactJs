import React from 'react'
import './DanceTourCard.css'

function DanceTourCard(props) {
  return (
    <>
          {
            props.items.map(
              card => (
                <div className='col-12 col-md-3'>
                  <a href='#'>
                    <div className="card text-white" id='dancetour-card'>
                        <img src={card.img} className="card-img-top" id='card-img' alt="..." />
                        <div className="card-body text-center bg-dark" id='card-bottom'>
                            <h5 className="card-title text-uppercase">{card.title}</h5>
                            <p className="card-text">{card.text}</p>
                        </div>
                    </div>
                  </a>
                </div>
              )
            )
          }
            
    </>
  )
}

export default DanceTourCard
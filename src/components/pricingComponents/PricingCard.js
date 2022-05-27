import React from 'react'
import './PricingCard.css'

function PricingCard(props) {
  return (
    <>
        {
            props.items.map(
            card => (
                <div className='col-12 col-md-3 mb-1'>
                    <a href='#'>
                        <div className="card text-white" id='pricing-card'>
                            <img src={card.img} className="card-img-top justif-content-center" id='pricing-card-img' alt="..." />
                            <div className="card-body text-center" id='pricing-card-bottom'>
                                <h5 className="card-title text-uppercase">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                            <div className='row justify-content-center mb-5 pb-2 bg-dark' id='card-price'>
                                ${card.price}
                            </div>
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

export default PricingCard
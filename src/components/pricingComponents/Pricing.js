import React from 'react'
import './Pricing.css'
import PricingCard from './PricingCard'
import Img from '../../images/pricingCardImg.png'

const cards = [
  {
    title: 'Basic',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 150.00,
    img: Img
  },
  {
    title: 'Standard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 200.00,
    img: Img
  },
  {
    title: 'Ultimate',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 250.00,
    img: Img
  }
]

function Pricing() {
  return (
    <>
        <div className='container-fluid' id='pricing_card'>
          <div className='row justify-content-center'>
            <div className='text-center text-white mt-5 mb-5'>
                  <h1>PRICING</h1>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia<br/> odio vitae vestibulum vestibulum. </h5>
            </div>
            <div className='row justify-content-center mb-5 pb-2'>
            <PricingCard items = {cards} />
            </div>
          </div>
        </div>
    </>
  )
}

export default Pricing
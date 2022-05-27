import React from 'react'
import './BestDance.css'
import Img from '../../images/amazing-dance2.png'

function BestDance() {
  return (
    <>
        <div className="container-fluid" id='best-dance'>
            <div className="row mx-0">
                <div className="col-12 col-md-6 d-flex align-items-center">
                    <div className='text-white mx-auto' id='best-dance__text'>
                        <h1>Best Dance</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
                        <button type='button' className='btn btn-lg btn-dark' id='best-dance-btn'>Read More</button>
                    </div>
                </div>
                <div className="col-12 col-md-6 px-0">
                    <img src={Img} alt='...' className="img-fluid"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default BestDance
import React from 'react'
import './AmazingDance.css'
import Img from '../../images/amazing-dance.png'

function AmazingDance() {
  return (
    <>
        <div className="container-fluid" id='amazing-dance'>
            <div className="row mx-0">
                <div className="col-12 col-md-6 px-0">
                    <img src={Img} alt='...' className="img-fluid w-100 h-100"/>
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <div className='text-white' id='amazing-dance__text'>
                        <h1>Amazing Dance</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
                        <button type='button' className='btn btn-lg btn-dark'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AmazingDance
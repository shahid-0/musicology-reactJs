import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className="container-fluid" id='main-banner'>
        <div className='row' id='banner'>
          <div className='col-sm-6 justify-content-center' id='banner-text'>
            <h1>Title Here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Vivamus lacinia odio vitae<br/> vestibulum vestibulum. </p>
            <button className="btn border-1" id='banner-btn'><h3>Register</h3></button>
          </div>
        </div>
    </div>
  )
}

export default Banner
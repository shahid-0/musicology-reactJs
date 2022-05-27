import React from 'react'
import './Subscribe.css'

function Subscribe() {
  return (
    <>
        <div className="container-fluid" id='subrcribe-us-container'>
            <div className="row h-100">
                <div className="col-12 justify-content-center">
                    <div className="text-center text-white justify-content-center" id='subscribe-box-content'>
                        <h1>Subscribe to our newsletter</h1>
                        <h4 className='pt-2 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Vivamus lacinia odio vitae vestibulum vestibulum. </h4>
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Your email" />
                            <span className="input-group-btn" />
                            <button className="btn" type="submit">Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Subscribe
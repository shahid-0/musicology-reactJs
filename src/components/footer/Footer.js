import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
        <div className='container-fluid' id='footer'>
            <div className='row py-5 justify-content-center'>
                <div className='col-md-4 text-break text-white'>
                    <h1>Musicology</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim.</p>
                    <ul id='social-icons'>
                        <li><i className="bi bi-instagram"></i></li>
                        <li><i className="bi bi-facebook"></i></li>
                        <li><i className="bi bi-twitter"></i></li>
                        <li><i className="bi bi-whatsapp"></i></li>
                    </ul>
                </div>
                <div className='col-md-2 text-white' id='about'>
                    <h3 className='text-uppercase'>About</h3>
                    <ul className='px-0'>
                        <li><a href='#'>History</a></li>
                        <li><a href='#'>Our Team</a></li>
                        <li><a href='#'>Brand Guidelines</a></li>
                        <li><a href='#'>Terms&Condition</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                    </ul>
                </div>
                <div className='col-md-2 text-white' id='services'>
                    <h3 className='text-uppercase'>Services</h3>
                    <ul className='px-0'>
                        <li><a href='#'>How to Order</a></li>
                        <li><a href='#'>Our Order</a></li>
                        <li><a href='#'>Order Status</a></li>
                        <li><a href='#'>Promo</a></li>
                        <li><a href='#'>Payment</a></li>
                    </ul>
                </div>
                <div className='col-md-2 text-white' id='other'>
                    <h3 className='text-uppercase'>Other</h3>
                    <ul className='px-0'>
                        <li><a href='#'>Contact Us</a></li>
                        <li><a href='#'>Help</a></li>
                        <li><a href='#'>Privacy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
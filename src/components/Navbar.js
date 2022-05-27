 import React from 'react'
 import logo from '../images/logo.png'
 import './Navbar.css'
 
 function Navbar() {
   return (
     <>
        <div className='container-fluid px-0'>
            <div className='row mx-0'>
                <nav className="navbar navbar-dark navbar-expand-lg pe-3">
                    <a className="navbar-brand ml-20px" href="#">
                        <img src= {logo} alt="" id='logo-img' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Promo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    <form className="d-flex" role="search">
                        <i className="bi bi-search" id='search-icon'></i>
                    </form>
                    </div>
                </nav>
            </div>
        </div>
     </>
   )
 }
 
 export default Navbar
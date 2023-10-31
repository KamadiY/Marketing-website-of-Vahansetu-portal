import React from 'react';
import "./css/navbar.css";


function Navbar() {
  return (

      <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="./About.jsx"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>        
            <div className="collapse navbar-collapse" id="navbarMain">
              
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./About.jsx">AboutUs</a>
                </li>
                  <li className="nav-item">
                  <a className="nav-link" href="../Container/services/index.js">Services</a>
                </li>
                  <li className="nav-item">
                  <a className="nav-link" href="/">Features</a>
                </li>
                  <li className="nav-item">
                  <a className="nav-link" href="./Contact.jsx">Contact Us</a>
                </li>
              </ul>              
            </div>
          </div>
        </nav>
      </div>

  )
}

export default Navbar

import React from 'react';
import './css/footer.css';
// import { FaRoadBarrier } from 'react-icons/fa6';


function Footer() {
  return (
        <div>
            <footer className="site-footer">
        <div className="container">
            <div className="row">
            <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">Meet our QR Safety Tag! This handy sticker links your vehicle href your phone number, making things safer and easier. Stick it on your vehicle, and if there's an emergency, anyone can scan it href get in hrefuch with you fast. It's like having a safety net on the road. Get one at our shrefre hrefday and drive with peace of mind, knowing help is just a scan away!</p>
            </div>

            <div className="col-xs-6 col-md-3">
                <h6>Get In Touch With Us</h6>
                <ul className="footer-links">
                <li><a href="/">Contact us for further queries</a></li>
                <li><a href="/">+91 8881831836</a></li>
                <li><a href="/">vahansetu@gmail.com</a></li>
                </ul>
            </div>

            <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#services">Services</a></li>
                </ul>
            </div>
            </div>
            <hr/>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by <a href="/">VahanSetu</a>.
                </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                <li><a className="twitter" href="/"><i class='bx bxl-twitter'></i></a></li>
                <li><a className="facebook" href="/"><i class='bx bxl-facebook-circle' ></i></a></li>
                <li><a className="dribbble" href="/"><i class='bx bxl-instagram-alt' ></i></a></li>
                <li><a className="linkedin" href="/"><i class='bx bxl-linkedin-square' ></i></a></li>   
                </ul>
            </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer

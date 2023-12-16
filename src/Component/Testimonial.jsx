import React from 'react';
import './css/testimonial.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Testimonial() {
    useEffect(()=>{
        AOS.init({duration: 2000});
      },[]);

  return (
    <>
    <div className="container-Test">
      <div data-aos="fade-in" className="heding">
        <h2>Testimonial</h2>
      </div>
        <div className="row" >
            <div className="col-lg-4">
                <div className="card" data-aos="flip-left">
                    <div className="face front-face">
                        <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                            alt="" className="profile" />
                        <div className="pt-3 text-uppercase name">
                            Rushikesh
                        </div>
                    </div>
                    <div className="face back-face">
                        <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                            I made bacck the purchase price in just 48 hours! Thank you for making it pain less,
                            pleasant.
                            The service was execellent. I will refer everyone I know.
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card" data-aos="flip-left">
                    <div className="face front-face">
                        <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            alt="" className="profile" />
                        <div className="pt-3 text-uppercase name">
                            Yogesh
                        </div>
                    </div>
                    <div className="face back-face">
                        <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                            Really good, you have saved our business! I made bacck the purchase price in just 48 hours!
                            man, this thing is getting better and better as I learn more about it.
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card" data-aos="flip-left">
                    <div className="face front-face">
                        <img src="https://images.unsplash.com/photo-1614574762522-6ac2fbba2208?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY2fHxtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt="" className="profile" />
                        <div className="pt-3 text-uppercase name">
                           Aashish
                        </div>
                    </div>
                    <div className="face back-face">
                        <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                            Account keeper is the most valuable business research we have EVER purchased. Without
                            electrician, we would ahave gone bankrupt by now.
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonial

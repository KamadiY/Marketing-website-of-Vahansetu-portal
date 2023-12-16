import React from "react";
import { AiFillContacts } from "react-icons/ai";
import { BsHospital, BsFillSignNoParkingFill } from "react-icons/bs";
import { BiMessageAltError, BiSupport } from "react-icons/bi";
import "./style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Services() {
  const ServicesText = {
    serviceshome_subheader: "Our SERVICES",
    serviceshome_header: "Vahan Setu Website",
    serviceshome_subheader1: "Let’s Check Our Services",

    services_box_title1: "Emergency Alter",
    services_box_title2: "Emergency Contact",
    services_box_title3: "24/7 Customer Support",
    services_box_title4: "Parking Issue",
    services_box_title5: "Hospital Details",
  };

  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);

  return (
    <div id="services">
      <div className="serviceshome">
        <div className="page-title-area"></div>
        <div className="container">
          <div className="servicesheader">
            <h2 data-aos = "zoom-in" >{ServicesText.serviceshome_subheader}</h2>
            <h4 data-aos = "fade" >{ServicesText.serviceshome_header}</h4>
            <p data-aos = "fade">{ServicesText.serviceshome_subheader1}</p>
          </div>
          <div className="Row">
            <div className="Card" data-aos="fade-up">
              <div className="services-box-home boxShadow">
                <BiMessageAltError className="icon1" />
                <h4>{ServicesText.services_box_title1}</h4>
                <p>
                  In case of emergency situation, we sends alerts to the
                  contacts assigned by the user
                </p>
              </div>
            </div>

            <div className="Card" data-aos="fade-down">
              <div className="services-box-home boxShadow">
                <AiFillContacts className="icon2" />
                <h4>{ServicesText.services_box_title2}</h4>
                <p>User Can acess Contact of person to info them</p>
              </div>
            </div>

            <div className="Card" data-aos="fade-up">
              <div className="services-box-home boxShadow">
                <BiSupport className="icon3" />
                <h4>{ServicesText.services_box_title3}</h4>
                <p>Customer Support Available By 24/7 for any kind of help!</p>
              </div>
            </div>

            <div className="Card" data-aos="fade-down">
              <div className="services-box-home boxShadow">
                <BsFillSignNoParkingFill className="icon3" />
                <h4>{ServicesText.services_box_title4}</h4>
                <p>
                  When you have parked your vehicle in the wrong way or in
                  restricted area, we will indicates you.
                </p>
              </div>
            </div>

            <div className="Card" data-aos="fade-up">
              <div className="services-box-home boxShadow">
                <BsHospital className="icon2" />
                <h4>{ServicesText.services_box_title5}</h4>
                <p>Provide Hospital Detail to any emergency situation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

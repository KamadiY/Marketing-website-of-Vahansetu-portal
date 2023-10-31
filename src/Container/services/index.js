import React from 'react'
import { AiFillContacts, } from "react-icons/ai";
import { BsHospital,
  BsFillSignNoParkingFill,
 } from "react-icons/bs";
import { BiMessageAltError, BiSupport } from "react-icons/bi";
import './style.css';



export default function Services() {

  const ServicesText ={
   
    serviceshome_subheader:'Our SERVICES',
    serviceshome_header:'Vahan Setu Website',
    serviceshome_subheader1:'Let’s Check Our Services',
  
    services_box_title1:'Emergency Alter',
    services_box_title2:'Emergency Contact',
    services_box_title3:'24/7 Customer Support',
    services_box_title4:'Parking Issue',
    services_box_title5:'Hospital Details',
  
  
  }
    
    return (
        <div>
             <div className="serviceshome">
             <div className="page-title-area">
      </div>
          <div className="container">
            <div className="servicesheader">
              <h6>{ServicesText.serviceshome_subheader}</h6>
              <h4>{ServicesText.serviceshome_header}</h4>
              <p>{ServicesText.serviceshome_subheader1}</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-6">
                <div className="services-box-home m-3">
                  <BiMessageAltError className="icon1" />
                  <h4>{ServicesText.services_box_title1}</h4>
                  <p>In case of emergency situation, we sends alerts to the contacts assigned by the user</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-6">
                <div className="services-box-home m-3">
                  <AiFillContacts className="icon2" />
                  <h4>{ServicesText.services_box_title2}</h4>
                  <p>User Can acess Contact of person to info them</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-6">
                <div className="services-box-home m-3">
                  <BiSupport className="icon3" />
                  <h4>{ServicesText.services_box_title3}</h4>
                  <p>Customer Support Available By 24/7 for any kind of help!</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-6">
                <div className="services-box-home m-3">
                  <BsFillSignNoParkingFill className="icon3" />
                  <h4>{ServicesText.services_box_title4}</h4>
                  <p>When you have parked your vehicle in the wrong way or in restricted area, we will indicates you.</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-6">
                <div className="services-box-home m-3">
                  <BsHospital className="icon2" />
                  <h4>{ServicesText.services_box_title5}</h4>
                  <p>Provide Hospital Detail to any emergency situation</p>
                </div>
              </div>              
            </div>
          </div>
        </div>
        </div>
    )
}



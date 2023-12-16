import { FaRoadBarrier } from 'react-icons/fa6';
import { BiSolidCarCrash, BiRun } from 'react-icons/bi';
import { GiTowTruck } from 'react-icons/gi';
import { BsFillSignNoParkingFill } from 'react-icons/bs';
import { AiFillCloseSquare, AiFillFire, AiFillUnlock } from 'react-icons/ai';
// import image from "./img/ca.jpg";
// import { BsFillCarFrontFill } from "react-icons/bs";
import "./css/news.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const features = [
  {
    name: 'Wrong Parking',
    icon: BsFillSignNoParkingFill,
  },
  {
    name: 'Block The Road',
    icon: FaRoadBarrier,
  },
  {
    name: 'Lost or Abandoned',
    icon: AiFillCloseSquare,
  },
  {
    name: 'Hit and Run',
    icon: BiRun,
  },
  {
    name: 'Not Locked',
    icon: AiFillUnlock,
  },
  {
    name: 'Tow Alert',
    icon: GiTowTruck,
  },
  {
    name: 'Fire & Other Threat',
    icon: AiFillFire,
  },
  {
    name: 'Accident Alert ',
    icon: BiSolidCarCrash,
  },
]


export default function News() {

  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);


  return (
    <div className='news-main'>
    {/* <div className="bg-img">
      <img src={require("./img/yuriy-kovalev-nN1HSDtKdlw-unsplash.jpg")} alt="" />
    </div> */}
    <div className="bg-white py-24 sm:py-32 news">
      <div className="new-content">
        <div className=""> 
          <p data-aos="fade-down" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            When and Where?
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl Center">
          <dl className="news-card">
            {features.map((feature) => (
              <div key={feature.name} data-aos="fade-up" className="relative new-card pl-16">
                {/* <dt className="text-base font-semibold leading-7 text-gray-900"> */}
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                {/* </dt> */}
                <span >{feature.name}</span>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
  )
}

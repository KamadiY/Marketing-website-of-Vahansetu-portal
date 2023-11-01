import { FaRoadBarrier } from 'react-icons/fa6';
import { BiSolidCarCrash, BiRun } from 'react-icons/bi';
import { GiTowTruck } from 'react-icons/gi';
import { BsFillSignNoParkingFill } from 'react-icons/bs';
import { AiFillCloseSquare, AiFillFire, AiFillUnlock } from 'react-icons/ai';
// import { BsFillCarFrontFill } from "react-icons/bs";
import "./css/news.css";

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
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center"> 
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            When and Where?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl Center">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 GridGap">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

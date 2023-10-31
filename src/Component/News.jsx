import { HiQrcode, HiDeviceMobile } from 'react-icons/hi';
import { HiBellAlert } from 'react-icons/hi2';
import { BsFillCarFrontFill } from "react-icons/bs";

const features = [
  {
    name: 'Park Wrong',
    icon: HiQrcode,
  },
  {
    name: 'Block The Road',
    icon: BsFillCarFrontFill,
  },
  {
    name: 'Lost or Abandoned',
    icon: HiBellAlert,
  },
  {
    name: 'Hit and Run',
    icon: HiDeviceMobile,
  },
  {
    name: 'Not Locked',
    icon: HiDeviceMobile,
  },
  {
    name: 'Tow Alert',
    icon: HiDeviceMobile,
  },
  {
    name: 'Fire & Other Threat',
    icon: HiDeviceMobile,
  },
  {
    name: 'Accident Alert (inform   victim family)',
    icon: HiDeviceMobile,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Q</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            When and Where?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
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

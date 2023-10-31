import { HiQrcode, HiDeviceMobile } from 'react-icons/hi';
import { HiBellAlert } from 'react-icons/hi2';
import { BsFillCarFrontFill } from "react-icons/bs";

const features = [
  {
    name: 'QR Sticker',
    description:
      'An I-Card for vehicle indicating that the vehicle owner can be reached anytime digitally.',
    icon: HiQrcode,
  },
  {
    name: 'Vehicle At Risk',
    description:
      'Receive notifications whenever vehicle is at risk like open windows or unlocked doors.',
    icon: BsFillCarFrontFill,
  },
  {
    name: 'Reminders',
    description:
      'Set personalized reminders for pollution checks, service renewals, and insurance updates, ensuring timely maintenance.',
    icon: HiBellAlert,
  },
  {
    name: 'User Friendly Interface',
    description:
      ' User can easily interpret the interface And easily found the function they want to used.',
    icon: HiDeviceMobile,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">QR </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Feature
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            application have below Feature
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
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

"use client"

import { CarDetailsProps } from "@/types"
import React, {Fragment} from "react"
import { Transition, Dialog } from "@headlessui/react"
import Image from "next/image"

const CarDetails = ({isOpen, closeModel, car}: CarDetailsProps) => {
  console.log("isOpen", isOpen);
  
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                 <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-2xl transition-all p-6 flex flex-col gap-5">
                  <button type="button" onClick={closeModel} className=" absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full">
                    <Image src="/close.svg" alt="Close" width={20} height={20} className="object-contain" />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image src="/hero.png" fill priority className="object-contain" alt="car details" />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image src="/hero.png" fill priority className="object-contain" alt="car details" />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image src="/hero.png" fill priority className="object-contain" alt="car details" />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image src="/hero.png" fill priority className="object-contain" alt="car details" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize" >{car.make} {car.model} </h2>
                    {Object.entries(car).map(([key, value]) =>(
                      <div key={key} className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-gray capitalize">{key.split("_").join(" ")} </h4>
                        <p className="text-black-100 font-semibold">{value} </p>
                      </div>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails
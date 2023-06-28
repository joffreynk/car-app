'use client'

import { CarCardProps } from "@/types"
import {CustomButton, CarDetails} from "./"
import Image from "next/image"
import { useState } from "react"
import { calculateCarRent } from "@/utils"


const CarCard = ({car}: CarCardProps) => {
    const { city_mpg, combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg, make, model, transmission, year}  = car;

    const carRent  = calculateCarRent(city_mpg, year);

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{make} {model} </h2>
      </div>
      <p className="flex mt-6 text-[24px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-semibold">/day</span>
      </p>
      <div className="relative h-40 w-full my-3">
        <Image src='/hero.png' priority className='object-contain' alt='car image' fill />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="Steering weel " />
            <p className="text-[14px]">
              {transmission === 'a'? 'Automatic' : 'Manual' }
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">
              {drive.toUpperCase()}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">
              {city_mpg } MPG
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View Moree"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles = "text-white text-[14  leading-[17px] font-bold"
            rightIcon = "/right-arrow.svg"
            handleClick={()=>setIsOpen(true)}

          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModel={()=>setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard

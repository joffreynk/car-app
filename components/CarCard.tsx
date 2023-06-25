import { CarCardProps } from "@/types"
import CustomButton from "./CustomButton"
import Image from "next/image"
import { useState } from "react"
import { calculateCarRent } from "@/utils"


const CarCard = ({car}: CarCardProps) => {
    const { city_mpg, combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg, make, model, transmission, year}  = car;
    const carRent  = calculateCarRent(city_mpg, year)
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
        </div>
      </div>
    </div>
  )
}

export default CarCard

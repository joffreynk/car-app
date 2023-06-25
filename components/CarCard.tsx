import { CarCardProps } from "@/types"
import Image from "next/image"
import CustomButton from "./CustomButton"
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
      <div className="relative w-full my-3 object-contain">
        <Image src='/public/hero.png' alt="car model" fill priority className="object-contain" />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">

        </div>
      </div>
    </div>
  )
}

export default CarCard

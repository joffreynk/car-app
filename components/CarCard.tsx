import { CarCardProps } from "@/types"
import Image from "next/image"
import CustomButton from "./CustomButton"
import { useState } from "react"
import { calculateCarRent } from "@/utils"


const CarCard = ({car}: CarCardProps) => {
    const { city_mpg, combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg, make, model, transmission, year}  = car;
    const carRent  = calculateCarRent(city_mpg, year)
  return (
    <div className="card-card group">
      <div className="card-card__content">
        <h2 className="card-card__content-title">{make} {model} </h2>
      </div>
      <p className="flex mt-6 text-[24px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-semibold">/day</span>
      </p>
      <div></div>
    </div>
  )
}

export default CarCard

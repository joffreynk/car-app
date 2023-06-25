import { CarCardProps } from "@/types"
import Image from "next/image"
import CustomButton from "./CustomButton"
import { useState } from "react"


const CarCard = ({car}: CarCardProps) => {
    const { city_mpg, combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg, make, model, transmission, year}  = car
  return (
    <div>
      CarCard
    </div>
  )
}

export default CarCard

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: 'button' | 'submit';
    rightIcon?: string;
    textStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement >;
}

export interface setManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) =>void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarCardProps {
  car: CarProps;
}

export interface CarDetailsProps {
  isOpen: boolean;
  closeModel: ()=>void;
  car: CarProps;
}

export interface searchParamsProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

interface OptionsProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionsProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
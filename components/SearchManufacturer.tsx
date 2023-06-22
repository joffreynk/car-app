'use client'

import { setManufacturerProps } from '@/types'
import { Combobox } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'

const SearchManufacturer = ({manufacturer, setManufacturer}: setManufacturerProps) => {
  return (
    <div className='search-search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image
            src='/car-logo.svg'
            width={20}
            height={20}
            className='ml-4'
            alt='car logo' />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer

'use client'

import { manufacturers } from '@/constatnts'
import { setManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment, useState } from 'react'


const SearchManufacturer = ({manufacturer, setManufacturer}: setManufacturerProps) => {
  const [queryKey, setQueryKey] = useState('')
  const filteredManufacturers = queryKey.length ? manufacturers.filter(item => item.toLowerCase().includes(queryKey.toLowerCase())): manufacturers
  
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
          <Combobox.Input
          className='search-manufacturer__input'
          placeholder='Wish'
          displayValue={(manufacturer: string) =>manufacturer}
          onChange={(e)=>setQueryKey(e.target.value.trim())}
          />

          <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={()=>setQueryKey('')}
          >
            <Combobox.Options>
            {
              filteredManufacturers.length && filteredManufacturers.map((item)=>(
                <Combobox.Option
                key={item}
                className={({active})=>`relative search-manufacturer_option ${active? 'bg-primary-blue text-white': 'text-gray'}`}
                value={item}
                >
              {item}
              </Combobox.Option>
              ))
            }

            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer

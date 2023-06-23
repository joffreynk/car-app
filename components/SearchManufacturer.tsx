'use client'

import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'


import { manufacturers } from '@/constatnts'
import { setManufacturerProps } from '@/types'


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
            <Combobox.Options className=''>
            {
              filteredManufacturers.length && filteredManufacturers.map((item)=>(
                <Combobox.Option
                key={item}
                className={({active})=>` relative search-manufacturer_option ${active? 'bg-primary-blue text-white': 'text-gray'}`}
                value={item}
                >
              {
                ({selected, active})=>(<>
                <span className={`block truncate ${selected? 'font-medium': 'font-normal'}`}>
                  {item}
                </span>
                {
                  selected ? (
                    <span className={`absolute insert-y-0 left-0 flex items-center pl-3 ${active ? 'text-white': 'text-teal-600'}`}></span>
                  ):null
                }
                </>)
              }
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

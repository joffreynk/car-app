'use client'

import React, { useState } from "react";
import {SearchManufacturer} from "./";
import Image from "next/image";

const SearchButton = ({otherClasses}: {otherClasses: string}) => (<button>
  <Image src='/magnifying-glass.svg' alt='magnifying glass' width={40} height={40} className={`-ml-3 z-10 ${otherClasses}`} />
</button> )


const SearchBar = () => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === '' && model === '') {
      return alert('Please fill in the seach bar')
    }
  };

  const updateSearchParams = (model:string, manufacturer:string) => {

  }

  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className='searchbar__item'>
      <Image src='/model-icon.png' width={25} height={25} className="absolute w-[20px] h-[20px]" alt='car icon' />
      <input type="text" name="model" value={model} onChange={(e)=>setModel(e.target.value)} placeholder="BMW" className="pl-8 searchBar__input" />
      <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar
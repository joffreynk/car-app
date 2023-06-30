import { ShowMoreProps } from '@/types'
import { updateSearchParams } from '@/utils'
import React from 'react'
import CustomButton from './CustomButton'

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const handleNavigation = () => {

    }
    
  return (
    <div className='w-full flex-center flex gap-5 mt-10'>
        {
            !isNext && (
                <CustomButton
                  title='show more'
                  btnType='button'
                  containerStyles='bg-primary-blue rounded-full text-white'
                  handleClick={handleNavigation}
                 />

            )
        }
    </div>
  )
}



export default ShowMore

'use client'

import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({title, handleClick, btnType, containerStyles, textStyles, rightIcon }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || `button`}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton

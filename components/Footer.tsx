import { footerLinks } from '@/constatnts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col text-blue-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image src='/logo.svg' alt='car store' width={118} height={18} className='object-contain' />
          <p className='text-base text-gray-700'>Car store {new Date().getFullYear()} <br />
          All right reserved &copy; </p>
        </div>
        <div className='footer__links'>
          {
            footerLinks.map(link =>(
              <div className='footer__link' key={link.title}> 
                 <h3 className='font-bold'> {link.title} </h3>
                 {
                  link.links.map(item =>(
                    <Link
                    key={item.title}
                    href={item.url}
                    className='text-gray-500'>
                      {item.title}
                    </Link>
                  ))
                 }
              </div>
            ))
          }
        </div>
      </div>
      
    </footer>
  )
}

export default Footer

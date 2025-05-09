import React from 'react'
import Image from 'next/image';
import { IoLocationOutline } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import lowerlogo from '../../../public/lowerlogo.webp'

const Footer = () => {
  return (
    <div className='p-5 md:p-10 w-full bg-gray-900 text-white'>
      
      <div className='flex flex-col lg:flex-row gap-10 md:gap-16 mb-10 md:mb-16'>
      
        <div className='flex flex-col sm:flex-row gap-10 md:gap-16 w-full lg:w-1/2'>
        
          <div className='w-full sm:w-auto'>
            <h4 className='text-lg md:text-xl font-semibold mb-4 md:mb-5'>Quick Links</h4>
            <ul className='flex flex-col gap-2 md:gap-3 text-gray-400'>
              <li className='hover:text-gray-200 transition-colors'><a href="#">Courses</a></li>
              <li className='hover:text-gray-200 transition-colors'><a href="#">Subscriptions</a></li>
              <li className='hover:text-gray-200 transition-colors'><a href="#">About</a></li>
              <li className='hover:text-gray-200 transition-colors'><a href="#">Contact</a></li>
              <li className='hover:text-gray-200 transition-colors'><a href="#">Login & Register</a></li>
            </ul>
          </div>

          
          <div className='w-full sm:w-auto'>
            <h4 className='text-lg md:text-xl font-semibold mb-4 md:mb-5'>Get Contact</h4>
            <h1 className='text-2xl md:text-3xl font-semibold underline text-orange-500 mb-3'>(406)-555-0120</h1>
            <a href="#" className='underline text-gray-400 hover:text-gray-200 transition-colors block mb-3'>b.r.collins@example.com</a>
            <div className='flex items-start gap-2 text-gray-400 hover:text-gray-200 transition-colors'>
              <IoLocationOutline className='text-sky-600 text-xl mt-0.5' />
              <span>North America, USA</span>
            </div>
          </div>
        </div>

       
        <div className='w-full lg:w-1/2'>
          <h4 className='text-lg md:text-xl font-semibold mb-4 md:mb-5'>Join the Community</h4>
          <div className='flex flex-col gap-3'>
            <p className='text-gray-400'>2,000+ Students Globally – Connect & Say Hello!</p>
            <form className='flex flex-col sm:flex-row gap-2 w-full'>
              <input 
                type="email" 
                placeholder='Enter your Email Address' 
                className='flex-1 outline-none border border-gray-600 bg-gray-800 text-white px-4 py-3 rounded-full focus:border-orange-500 transition-colors'
              />
              <button 
                type="submit"
                className='bg-orange-500 hover:bg-orange-600 text-white p-3 sm:p-4 rounded-full transition-colors flex items-center justify-center'
              >
                <FaRegPaperPlane className='text-lg' />
              </button>
            </form>
          </div>
        </div>
      </div>

      
      <div className='flex flex-col sm:flex-row justify-between items-center gap-6 py-6 border-t border-gray-800'>
        <div className='w-40 md:w-auto'>
          <Image 
            src={lowerlogo} 
            alt="Company logo" 
            width={160}
            height={40}
            className='w-full h-auto'
          />
        </div>
        <div className='flex gap-2 md:gap-3'>
          {[FaFacebookF, RiTwitterXLine, LuLinkedin, FaInstagram].map((Icon, index) => (
            <button 
              key={index}
              className='p-2 md:p-3 rounded-full text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 transition-colors'
            >
              <Icon className='text-lg md:text-xl' />
            </button>
          ))}
        </div>
      </div>

     
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-800 text-sm md:text-base text-gray-500'>
        <p>Copyright © 2025 B.R. Collins All Rights Reserved</p>
        
        <div className='flex gap-4 md:gap-6'>
          <a href="#" className='underline hover:text-gray-300 transition-colors'>Terms of service</a>
          <a href="#" className='underline hover:text-gray-300 transition-colors'>Privacy policy</a>
        </div>
        
        <p>
          Design and Developed by 
          <a href="#" className='underline ml-1 hover:text-gray-300 transition-colors'>Agency Partner Interactive</a>
        </p>
      </div>
    </div>
  )
}

export default Footer
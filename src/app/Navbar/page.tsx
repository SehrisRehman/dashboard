import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import Image from 'next/image'
import lowerlogo from '../../../public/lowerlogo.webp'

const Navbar = () => {
  return (
    <nav className='w-full h-20 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20'>
      <div className='flex items-center gap-4 md:gap-6 lg:gap-8'>
        <button className='lg:hidden text-2xl text-gray-800'>
          <IoMdMenu />
        </button>
        <div className='w-40 md:w-48 lg:w-52 xl:w-60'>
        <Image 
            src='https://br-collins-latest.vercel.app/img/logo.svg'
            alt="Company logo" 
            width={160}
            height={40}
            className='w-full h-auto'
          />
        </div>
      </div>

      <div className='hidden md:flex items-center gap-3 flex-1 max-w-2xl mx-4'>
        <div className='flex flex-1 items-center border border-gray-300 rounded-full px-3 py-2 hover:border-orange-400 transition-colors'>
          <IoSearchOutline className='text-gray-600 text-lg mr-2' />
          <form className='w-full'>
            <input 
              type="text" 
              placeholder='Search for any course' 
              className='w-full outline-none bg-transparent text-sm md:text-base placeholder-gray-500'
            />
          </form>
        </div>
        <div className='text-orange-500 border border-orange-500 rounded-full px-3 py-1 hover:bg-orange-50 transition-colors'>
          <form>
            <select 
              className='outline-none bg-transparent text-sm md:text-base cursor-pointer'
            >
              <option value="course">Course</option>
              <option value="Contact">Contact</option>
              <option value="About">About</option>
            </select>
          </form>
        </div>
      </div>

      <div className='flex items-center gap-4 md:gap-6'>
        <div className='hidden lg:block'>
          <ul className='flex gap-4 xl:gap-6 items-center'>
            <li><a href="#" className='text-gray-800 hover:text-orange-500 transition-colors text-sm xl:text-base'>Subscriptions</a></li>
            <li><a href="#" className='text-gray-800 hover:text-orange-500 transition-colors text-sm xl:text-base'>About Us</a></li>
            <li><a href="#" className='text-gray-800 hover:text-orange-500 transition-colors text-sm xl:text-base'>Contact Us</a></li>
          </ul>
        </div>

        <div className='flex items-center gap-3'>
          <button className='text-2xl text-gray-800 hover:text-orange-500 transition-colors'>
            <CiShoppingCart />
          </button>
          <button className='hidden sm:inline-block border border-gray-300 rounded-full px-4 py-1.5 text-sm md:text-base hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors'>
            Login
          </button>
        </div>
      </div>

      <button className='md:hidden text-2xl text-gray-800'>
        <IoSearchOutline />
      </button>
    </nav>
  )
}

export default Navbar
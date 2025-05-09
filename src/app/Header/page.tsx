import React from 'react'
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  return (
    <div className='w-full h-auto md:h-10 bg-sky-600 flex items-center justify-between px-4 py-2 md:py-0 md:px-6 lg:px-8'>
     
      <div className='w-6'></div>
      
     
      <div className='text-white font-hanken text-center mx-2 flex-1'>
        <p className='text-xs sm:text-sm md:text-base leading-tight md:leading-normal'>
          Courses from <b>$149.00</b> 
          <span className='hidden sm:inline'> Gain the skills to climb that career ladder.</span> 
          <span className='text-yellow-400 font-bold'> 3 days left!</span>
        </p>
      </div>
      
      
      <div className='w-6 flex justify-end'>
        <button 
          className='outline-none border-0 text-white cursor-pointer hover:bg-sky-700 rounded-full p-1 transition-colors'
          aria-label="Close banner"
        >
          <RxCross2 className='text-sm md:text-base' />
        </button>
      </div>
    </div>
  )
}

export default Header
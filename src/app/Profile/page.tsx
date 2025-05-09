import React from 'react'

const Page = () => {
  return (
    <div className='max-w-[936px] mx-auto px-4 lg:px-0  sm:px-6  py-6 md:py-8'>
      
      <div className='mb-6 md:mb-8'>
        <h2 className='text-xl md:text-2xl font-bold text-gray-900'>My Profile</h2>
      </div>

     
      <div className='bg-white rounded-lg shadow-sm'>
       
        <div className='flex flex-col sm:flex-row py-4 sm:py-5 px-4 sm:px-6'>
          <span className='text-gray-600 w-full sm:w-3/12 mb-1 sm:mb-0 text-sm sm:text-base'>Registration Date</span>
          <span className='text-gray-900 w-full sm:w-9/12 text-sm sm:text-base'>February 22, 2025</span>
        </div>
        <hr className='border-gray-200' />

        <div className='flex flex-col sm:flex-row py-4 sm:py-5 px-4 sm:px-6'>
          <span className='text-gray-600 w-full sm:w-3/12 mb-1 sm:mb-0 text-sm sm:text-base'>First Name</span>
          <span className='text-gray-900 w-full sm:w-9/12 text-sm sm:text-base'>Charlotte</span>
        </div>
        <hr className='border-gray-200' />

        <div className='flex flex-col sm:flex-row py-4 sm:py-5 px-4 sm:px-6'>
          <span className='text-gray-600 w-full sm:w-3/12 mb-1 sm:mb-0 text-sm sm:text-base'>Last Name</span>
          <span className='text-gray-900 w-full sm:w-9/12 text-sm sm:text-base'>Anderson</span>
        </div>
        <hr className='border-gray-200' />

        <div className='flex flex-col sm:flex-row py-4 sm:py-5 px-4 sm:px-6'>
          <span className='text-gray-600 w-full sm:w-3/12 mb-1 sm:mb-0 text-sm sm:text-base'>Email</span>
          <span className='text-gray-900 w-full sm:w-9/12 text-sm sm:text-base'>charlotte675@gmail.com</span>
        </div>
        <hr className='border-gray-200' />

        <div className='flex flex-col sm:flex-row py-4 sm:py-5 px-4 sm:px-6'>
          <span className='text-gray-600 w-full sm:w-3/12 mb-2 sm:mb-0 text-sm sm:text-base'>Biography</span>
          <span className='text-gray-900 w-full sm:w-9/12 text-sm sm:text-base'>
            Hi, Im Charlotte Anderson, a college student currently pursuing a degree in Business Administration. I'm passionate about leadership, communication, and developing real-world skills that will help me thrive in a professional environment.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Page
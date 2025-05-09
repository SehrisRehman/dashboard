import React from 'react'

const Page = () => {
  return (
    <div className='max-w-4xl mx-auto p-4 sm:p-6 lg:p-2 w-full'>
      <div className='flex flex-col gap-6 md:gap-8 lg:gap-10'>
        <div className='flex flex-col gap-6 md:gap-8'>
         
          <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-10 items-start'>
            <div className='w-full lg:w-[280px] xl:w-[300px] flex-shrink-0'>
              <h5 className='font-semibold text-gray-800 text-base sm:text-lg mb-1 sm:mb-2'>Current Password *</h5>
              <p className='text-gray-500 text-xs sm:text-sm md:text-base'>
                Choose a strong password with at least 8 characters, including a mix of letters, numbers, and symbols.
              </p>
            </div>
            <div className='w-full'>
              <form className='w-full'>
                <input
                  type="password"
                  placeholder='Enter current password'
                  className='w-full p-2.5 sm:p-3 md:p-4 bg-gray-50 text-gray-800 rounded-lg sm:rounded-xl
                            focus:ring-2 focus:ring-orange-500 focus:bg-white
                            border border-gray-200 hover:border-gray-300 transition-all
                            text-sm sm:text-base md:text-lg placeholder-gray-400'
                />
              </form>
            </div>
          </div>


          <div className='flex flex-col lg:flex-row gap-4 lg:gap-2 xl:gap-10 items-start'>
            <div className='w-full lg:w-[280px] xl:w-[300px] flex-shrink-0'>
              <h5 className='font-semibold text-gray-800 text-base sm:text-lg mb-1 sm:mb-2'>New Password *</h5>
            </div>
            <div className='w-full'>
              <form className='w-full'>
                <input
                  type="password"
                  placeholder='Enter new password'
                  className='w-full p-2.5 sm:p-3 md:p-4 bg-gray-50 text-gray-800 rounded-lg sm:rounded-xl
                            focus:ring-2 focus:ring-orange-500 focus:bg-white
                            border border-gray-200 hover:border-gray-300 transition-all
                            text-sm sm:text-base md:text-lg placeholder-gray-400'
                />
              </form>
            </div>
          </div>


          <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-10 items-start'>
            <div className='w-full lg:w-[280px] xl:w-[300px] flex-shrink-0'>
              <h5 className='font-semibold text-gray-800 text-base sm:text-lg mb-1 sm:mb-2'>Re-type New Password *</h5>
            </div>
            <div className='w-full'>
              <form className='w-full'>
                <input
                  type="password"
                  placeholder='Confirm new password'
                  className='w-full p-2.5 sm:p-3 md:p-4 bg-gray-50 text-gray-800 rounded-lg sm:rounded-xl
                            focus:ring-2 focus:ring-orange-500 focus:bg-white
                            border border-gray-200 hover:border-gray-300 transition-all
                            text-sm sm:text-base md:text-lg placeholder-gray-400'
                />
              </form>
            </div>
          </div>
        </div>

        <button className='w-full sm:w-auto rounded-2xl sm:rounded-3xl bg-[#F86537] hover:bg-[#e05527] text-white 
                          py-2.5 sm:py-3 px-5 sm:px-6 md:py-3.5 md:px-8 text-sm sm:text-base md:text-lg font-medium transition-colors
                          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                          self-center lg:self-start mt-2 sm:mt-4'>
          Update Password
        </button>
      </div>
    </div>
  )
}

export default Page
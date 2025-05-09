import React from 'react'

const Page = () => {
    return (
        <div className='flex flex-col gap-6 md:gap-8  lg:gap-5  w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8'>

            <div className='flex flex-col gap-8 md:gap-10  w-full'>

                <div className='flex flex-col lg:flex-row gap-4 lg:gap-5 items-start w-full'>
                    <div className='w-full lg:w-1/3 flex-shrink-0'>
                        <h5 className='font-semibold text-gray-800 text-base sm:text-lg mb-1'>First Name*</h5>
                        <p className='text-gray-500 text-sm'>This will be displayed on your profile.</p>
                    </div>
                    <div className='w-full lg:w-2/3'>
                        <form className='w-full'>
                            <input
                                type="text"
                                placeholder='Charlotte'
                                className='w-full p-3 bg-gray-100 text-gray-900 rounded-lg sm:rounded-xl
                          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white
                          border border-transparent hover:border-gray-300 transition-all
                          text-base placeholder-gray-500'
                            />
                        </form>
                    </div>
                </div>


                <div className='flex flex-col lg:flex-row gap-4 lg:gap-10 items-start w-full'>
                    <div className='w-full lg:w-1/3 flex-shrink-0'>
                        <h5 className='font-semibold text-gray-800 text-base sm:text-lg mb-1'>Last Name*</h5>
                        <p className='text-gray-500 text-sm'>This will be displayed on your profile.</p>
                    </div>
                    <div className='w-full lg:w-2/3'>
                        <form className='w-full'>
                            <input
                                type="text"
                                placeholder='Anderson'
                                className='w-full p-3 bg-gray-100 text-gray-900 rounded-lg sm:rounded-xl
                          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white
                          border border-transparent hover:border-gray-300 transition-all
                          text-base placeholder-gray-500'
                            />
                        </form>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-10 items-start w-full'>
                    <div className='w-full lg:w-1/3 flex-shrink-0'>
                        <h5 className='font-semibold text-gray-800 text-base sm:text-lg mb-1'>Email Address*</h5>
                        <p className='text-gray-500 text-sm'>Use an active email address</p>
                    </div>
                    <div className='w-full lg:w-2/3'>
                        <form className='w-full'>
                            <input
                                type="email"
                                placeholder='charlotte675@gmail.com'
                                className='w-full p-3 bg-gray-100 text-gray-900 rounded-lg sm:rounded-xl
                          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white
                          border border-transparent hover:border-gray-300 transition-all
                          text-base placeholder-gray-500'
                            />
                        </form>
                    </div>
                </div>


                <div className='flex flex-col lg:flex-row gap-4 lg:gap-10 items-start w-full'>
                    <div className='w-full lg:w-1/3 flex-shrink-0'>
                        <h5 className='font-semibold text-gray-800 text-base sm:text-lg mb-1'>Bio / About Me</h5>
                        <p className='text-gray-500 text-sm'>Short introduction about yourself.</p>
                    </div>
                    <div className='w-full lg:w-2/3'>
                        <form className='w-full'>
                            <textarea
                                rows={4}
                                placeholder="Hi, I'm Charlotte Anderson, a college student currently pursuing a degree in Business Administration. I'm passionate about leadership, communication, and developing real-world skills."
                                className='w-full p-3 bg-gray-100 text-gray-900 rounded-lg sm:rounded-xl
                          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white
                          border border-transparent hover:border-gray-300 transition-all
                          text-base placeholder-gray-500'
                            />
                        </form>
                    </div>
                </div>
            </div>
              
            <button className='w-full sm:w-auto rounded-xl sm:rounded-3xl bg-[#F86537] hover:bg-[#e05527] 
                        text-white py-2.5 sm:py-3 px-6 text-base sm:text-lg font-medium
                        focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                        transition-colors self-center lg:self-start mt-4'>
                Update Info
            </button>
        </div>
    )
}

export default Page
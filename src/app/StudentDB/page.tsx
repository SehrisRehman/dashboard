import React from 'react'
import { BookOpen } from 'lucide-react';
import { BookmarkCheck } from 'lucide-react';
import { BookCheck } from 'lucide-react';

const page = () => {
  return (
    <div>
       
            <h2 className='font-bold text-xl pl-4 pt-5'>Dashboard</h2>
                <div className='w-[927px] h-[230px] flex gap-12 md:gap-5 mx-auto mt-4 sm:w-full md:p-3'>
                    <div className='w-1/3 h-[230px] rounded-xl bg-sky-100 flex flex-col justify-between p-5 md:h-[220px] '>
                        <div className='w-[50px] h-[50px] bg-white rounded-xl flex items-center justify-center text-sky-600'><BookCheck/></div>
                        <div className='flex flex-col '>
                            <h2 className='text-3xl text-sky-600 font-bold'>30</h2>
                            <p>Enrolled Courses</p>
                        </div>
                    </div>
                    <div className='w-1/3 h-[230px] rounded-xl bg-red-100 flex flex-col justify-between p-5 md:h-[210px] lg:h-[220px]'>
                        <div className='w-[50px] h-[50px] bg-white rounded-xl flex items-center justify-center text-orange-600'><BookOpen /></div>
                        <div className='flex flex-col '>
                            <h2 className='text-3xl text-orange-600 font-bold'>10</h2>
                            <p>Active Courses</p>
                        </div>
                    </div>
                    <div className='w-1/3 h-[230px] rounded-xl bg-green-100 flex flex-col justify-between p-5 md:h-[220px]'>
                        <div className='w-[50px] h-[50px] bg-white rounded-xl flex items-center justify-center text-green-600'><BookmarkCheck /></div>
                        <div className='flex flex-col '>
                            <h2 className='text-3xl text-green-600 font-bold'>12</h2>
                            <p>Completed Courses</p>
                        </div>
                    </div>

                </div>
            </div>
  )
}

export default page

'use client'

import React, { useState } from 'react';
import SettingProfile from '../SettingProfile/page';
import SettingPassword from '../SettingPassword/page';

const page = () => {
    const [active, setActive] = useState('');
    const returncomponent = () => {
      switch (active) {
        case "profile":
          return <SettingProfile/>
        case "password":
          return <SettingPassword/>
        default:
          return <SettingProfile/>
      }
    }
    
  return (
    <div className='flex flex-col gap-5 items-start w-full p-4 md:p-0'>
      <div className='flex flex-col gap-5 w-full'>
        <div><h2 className='font-bold text-xl'>Settings</h2></div>
        <div className='flex gap-2 flex-col w-full'>
            <div className='flex gap-4 md:gap-10 flex-wrap'>
                <button 
                  onClick={()=>setActive('profile')} 
                  className={`cursor-pointer px-2 py-1 ${active === 'profile' || active === '' ? 'font-semibold text-blue-600' : ''}`}
                >
                  Profile
                </button>
                <button 
                  onClick={()=>setActive('password')} 
                  className={`cursor-pointer px-2 py-1 ${active === 'password' ? 'font-semibold text-blue-600' : ''}`}
                >
                  Password
                </button>
            </div>
            <div className="w-full h-px bg-gray-300"></div>
        </div>
      </div>
      
      <div className='w-full h-[400px]'>
        {returncomponent()}
      </div>
    </div>
  )
}

export default page
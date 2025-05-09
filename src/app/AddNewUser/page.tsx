import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-10 items-start'>
      <div>
        <h2 className='font-bold text-xl'>Add New User</h2>
      </div>
      <div className='flex flex-col gap-10'>
        <div className='flex gap-20'>
            <div className=' '>
                <h5 className=' font-semibold'>First Name*</h5>
                <span>Enter the students full legal name.</span>
            </div>
            <div><form action=""><input type="text" placeholder='First Name' className='outline-none border border-gray-400 p-3 rounded-xl w-[350px]' /></form></div>
        </div>
        <div className='flex gap-20'>
            <div className=''>
                <h5 className=' font-semibold'>Last Name*</h5>
                <span>Enter the student's full legal name.</span>
            </div>
            <div><form action=""><input type="text" placeholder='First Name' className='outline-none border border-gray-400 p-3 rounded-xl w-[350px]' /></form></div>
        </div>
         <div className='flex gap-20 flex-wrap'>
            <div className='flex flex-col flex-wrap w-[245px]'>
                <h5 className='font-semibold'>Email*</h5>
                <span>Provide a valid email address. This will be used for login, communication, and course updates.</span>
            </div>
            <div><form action=""><input type="Email" placeholder='Email' className='outline-none border border-gray-400 p-3 rounded-xl w-[350px]' /></form></div>
        </div>
      </div>

      <button className='rounded-3xl bg-[#F86537] text-gray-100  py-3 px-5'>Add User</button>
    </div>
  )
}

export default page

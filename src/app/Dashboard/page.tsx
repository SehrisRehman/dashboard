// import React from 'react';
// import StudentDB from '../StudentDB/page';
// import { BookCheck } from 'lucide-react';
// import { Award } from 'lucide-react';
// import Image  from 'next/image';
// import db from '../../../public/db.jpg';
// import { UserRoundPlus } from 'lucide-react';
// import Link from 'next/link';
// import { UserRoundPen } from 'lucide-react';
// import { UsersRound } from 'lucide-react';
// import { FileClock } from 'lucide-react';
// import { Settings } from 'lucide-react';
// import { LogOut } from 'lucide-react';
// import { House } from 'lucide-react';
// import Profile from '../Profile/page'
// import AddNewUser from '../AddNewUser/page';
// import Setting from '../Setting/page';
// import ViewUser from '../ViewUser/page';
// import Coursehistory from '../Coursehistory/page'



// const page = () => {
//   return (
//     <div className='max-w-[1326px] max-h-[826px]   rounded-[20px] sm:w-full sm:h-auto bg-white mt-20'> 
//       <div className=''>
//                 <div className='flex justify-between items-center px-8  lg:py-5 '>
//                     <div className='flex w-[517px] h-[100px] items-center gap-4 sm:gap-2 lg:gap-5'>
//                         <div className='lg:h-[100px] lg:w-[100px] '> 
//                             <Image src={db} width={150} height={50} className='rounded-[8px]' alt=''/>
//                         </div>
//                         <div className='flex flex-col w-10/12 gap-1'>
//                             <h4 className='text-xl font-bold text-gray-900'>Charlotte Anderson</h4>
//                             <div className='flex items-center gap-3 sm:gap-1'>
//                                 <div className='flex items-center gap-1'> <BookCheck className='text-gray-400 '/> <span className='text-sky-500'>(5)</span> courses Enrolled</div> <p>|</p>
//                                 <div className='flex items-center gap-1'><Award className='text-gray-400' /> <span className='text-sky-500'>(4)</span>Certificates</div>

//                             </div>
//                         </div>
//                     </div>
//                     <div className='w-[218] h-[52] rounded-[58] flex border text-[#F86537] border-[#F86537] p-1 items-center justify-center gap-2 sm:gap-1 md:gap-3'>
//                     <UserRoundPlus />
//                         <button className='outline-none border-0 '>Add New User</button>
//                     </div>
//                 </div>
//         </div>
//         <hr className='text-gray-300' />
//         <div className='flex max-w-[1326px] max-h-auto   sm:flex-col md:flex-row  sm:w-full sm:h-auto'>
//            <div className='flex '>
//            <div className=' lg:border-0 lg:h-[490px] lg:w-[232px] lg:mt-10  rounded-xl p-4 sm:border md:w-4/12  sm:m-4 sm:w-[250px] sm:pt-7 lg:pt-0 lg:m-0 '>
//                 <div>
//                     <ul className="flex flex-col gap-9 lg:gap-7 pb-10 sm:gap-10">
//                         <li className='flex items-center gap-5 sm:bg-sky-100 sm:py-2 sm:text-blue-600'><Link href='#'/><House  className='text-gray-500' />Dashboard</li>
//                         <li className='flex items-center gap-5'><Link href='#'/> <UserRoundPen className='text-gray-500' />My Profile</li>
//                         <li className='flex items-center gap-5'><Link href='#'/><UserRoundPlus className='text-gray-500' />Add New User</li>
//                         <li className='flex items-center gap-5'><Link href='#'/> <UsersRound className='text-gray-500'/> View User</li>
//                         <li className='flex items-center gap-5'><Link href='#'/><BookCheck className='text-gray-500'/>Enrolled Courses</li>
//                         <li className='flex items-center gap-5'><Link href='#'/> <FileClock className='text-gray-500' />Course History</li>
//                         <li className='flex items-center gap-5'><Link href='#'/><Settings className='text-gray-500' />Setting</li>

//                     </ul>
//                     <hr className='text-gray-300'/>
//              </div>
//                 <div>
//                    <p> <Link href='#' className='flex gap-3 px-3 py-10 sm:py-5 sm:px-5' ><LogOut className='text-gray-500' /><p className='text-red-600'>Logout</p></Link></p>
//                 </div>
//             </div>
//             <div className="w-px h-[600px] bg-gray-300 "></div>
//            </div>
//             <div className='max-w-9/12 max-h-[700px] mx-auto lg:mt-10 sm:mx-0 md:mx-auto sm:w-[100%] sm:h-[50vh] md:h-[710px] md:w-8/12  lg:w-9/12 '>
//            <StudentDB />
//            <Profile/>
//            <AddNewUser/>
//            <Setting/>
//            <ViewUser/>
//             <Coursehistory/>
//            </div>
//         </div>

//     </div>
//   )
// }

// export default page
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookCheck,
  Award,
  UserRoundPlus,
  UserRoundPen,
  UsersRound,
  FileClock,
  Settings,
  LogOut,
  House
} from 'lucide-react';

import StudentDB from '../StudentDB/page';
import Profile from '../Profile/page';
import AddNewUser from '../AddNewUser/page';
import Setting from '../Setting/page';
import ViewUser from '../ViewUser/page';
import Coursehistory from '../Coursehistory/page';
import db from '../../../public/db.jpg';

const Page = () => {
  const [activeView, setActiveView] = useState('dashboard'); // default page

  // Render based on state
  const renderComponent = () => {
    switch (activeView) {
      case 'dashboard':
        return <StudentDB />;
      case 'profile':
        return <Profile />;
      case 'addUser':
        return <AddNewUser />;
      case 'viewUser':
        return <ViewUser />;
      case 'courses':
        return <StudentDB />;
      case 'history':
        return <Coursehistory />;
      case 'setting':
        return <Setting />;
      default:
        return <StudentDB />;
    }
  };

  return (
    <div className='max-w-[1326px] max-h-[826px] rounded-[20px] sm:w-full sm:h-auto bg-white mt-20'>

      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 lg:px-8 py-4 lg:py-5 gap-4 sm:gap-0'>

        <div className='flex w-full sm:w-auto sm:min-w-[300px] lg:w-[517px] h-auto sm:h-[100px] items-center gap-3 sm:gap-2 lg:gap-5'>
          <div className='h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] lg:h-[100px] lg:w-[100px]'>
            <Image
              src={db}
              width={150}
              height={50}
              className='rounded-[8px] w-full h-full object-cover'
              alt='User avatar'
            />
          </div>
          <div className='flex flex-col w-full sm:w-auto gap-1'>
            <h4 className='text-lg sm:text-xl font-bold text-gray-900'>Charlotte Anderson</h4>
            <div className='flex flex-col xs:flex-row items-start xs:items-center gap-1 xs:gap-3 sm:gap-1 text-sm sm:text-base'>
              <div className='flex items-center gap-1'>
                <BookCheck className='text-gray-400 w-4 h-4' />
                <span className='text-sky-500'>(5)</span>
                <span>courses Enrolled</span>
              </div>
              <p className='hidden xs:block'>|</p>
              <div className='flex items-center gap-1'>
                <Award className='text-gray-400 w-4 h-4' />
                <span className='text-sky-500'>(4)</span>
                <span>Certificates</span>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full sm:w-auto'>
          <div className='w-full sm:w-[180px] lg:w-[218px] h-[42px] sm:h-[52px] rounded-[58px] flex border text-[#F86537] border-[#F86537] p-1 items-center justify-center gap-2 hover:bg-[#F86537]/10 transition-colors'>
            <UserRoundPlus className='w-4 h-4 sm:w-5 sm:h-5' />
            <button className='outline-none border-0 text-sm sm:text-base whitespace-nowrap'>
              Add New User
            </button>
          </div>
        </div>
      </div>

      <hr className='text-gray-300' />


      <div className='flex sm:flex-col md:flex-row'>

        <div className='flex'>

          <div className='w-full lg:w-[232px] lg:border-0 rounded-xl p-4 border border-gray-200 lg:mt-10 lg:h-[490px] 2xl:h-[700px] m-4 md:m-0 md:mr-4'>

            <ul className="flex flex-col gap-6 lg:gap-7 pb-6 sm:pb-10">
              <li
                onClick={() => setActiveView('dashboard')}
                className='flex items-center gap-4 cursor-pointer hover:text-blue-600 p-2 rounded hover:bg-gray-50'
              >
                <House className='text-gray-500 w-5 h-5' />
                <span className='text-sm sm:text-base'>Dashboard</span>
              </li>
              <li
                onClick={() => setActiveView('profile')}
                className='flex items-center gap-4 cursor-pointer hover:text-blue-600 p-2 rounded hover:bg-gray-50'
              >
                <UserRoundPen className='text-gray-500 w-5 h-5' />
                <span className='text-sm sm:text-base'>My Profile</span>
              </li>
              <li
                onClick={() => setActiveView('addUser')}
                className='flex items-center gap-4 cursor-pointer hover:text-blue-600 p-2 rounded hover:bg-gray-50'
              >
                <UserRoundPlus className='text-gray-500 w-5 h-5' />
                <span className='text-sm sm:text-base'>Add New User</span>
              </li>
              <li
                onClick={() => setActiveView('viewUser')}
                className='flex items-center gap-4 cursor-pointer hover:text-blue-600 p-2 rounded hover:bg-gray-50'
              >
                <UsersRound className='text-gray-500 w-5 h-5' />
                <span className='text-sm sm:text-base'>View User</span>
              </li>
              <li
                onClick={() => setActiveView('courses')}
                className='flex items-center gap-4 cursor-pointer hover:text-blue-600 p-2 rounded hover:bg-gray-50'
              >
                <BookCheck className='text-gray-500 w-5 h-5' />
                <span className='text-sm sm:text-base'>Enrolled Courses</span>
              </li>
              <li
                onClick={() => setActiveView('history')}
                className='flex items-center gap-4 cursor-pointer hover:text-blue-600 p-2 rounded hover:bg-gray-50'
              >
                <FileClock className='text-gray-500 w-5 h-5' />
                <span className='text-sm sm:text-base'>Course History</span>
              </li>
              <li
                onClick={() => setActiveView('setting')}
                className='flex items-center gap-4 cursor-pointer hover:text-blue-600 p-2 rounded hover:bg-gray-50'
              >
                <Settings className='text-gray-500 w-5 h-5' />
                <span className='text-sm sm:text-base'>Setting</span>
              </li>
            </ul>


            <hr className='border-gray-200 my-2' />


            <button className='flex gap-3 items-center p-2 rounded hover:bg-gray-50 w-full text-red-600 mt-1'>
              <LogOut className='text-gray-500 w-5 h-5' />
              <span className='text-sm sm:text-base'>Logout</span>
            </button>
          </div>


          <div className="hidden lg:block w-px h-[600px] bg-gray-300"></div>
        </div>
        <div className="flex-1 w-full overflow-x-hidden">
          <div className="w-full h-full p-4 sm:p-6">
            {renderComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

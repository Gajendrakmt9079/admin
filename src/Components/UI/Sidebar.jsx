import { CiUser } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import React from 'react'
import { TiHomeOutline } from "react-icons/ti";
import { CiInboxIn } from "react-icons/ci";
import { BiCabinet } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";


export const Sidebar2 = () => {
  return (
    <div >



      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">

        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="default-sidebar" className=" inline absolute top-0 left-0  w-[25%] h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">


        <div className="userbox  bg-[#3D5553] w-full h-1/3 p-5 flex justify-center text-3xl items-center space-y-3 text-white flex-col">
          <img src="./user.jpg" className='rounded-full w-[10vh] p-1 h-[10vh] ring-2 ring-amber-500 ' alt="" />
          <h1>Alex adams</h1>
          <h2 className='text-lg'>Alexadams@gmail.com</h2>
        </div>
        <div className="h-full pl-3 py-4 overflow-y-auto bg-[#425C59] dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 text-white rounded-l-full  dark:text-black hover:bg-[#E2ECEB] dark:hover:bg-gray-700 group hover:text-black">
                <TiHomeOutline className='text-2xl text-amber-500' />
                <span className="ms-3 text-xl">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-white hover:text-black rounded-l-full  hover:bg-[#E2ECEB]  dark:text-white  dark:hover:bg-gray-700 group">
                <BiCabinet className='text-2xl text-amber-500' />
                <span className="flex-1 ms-3 whitespace-nowrap text-xl">Kanban</span>

              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2   text-white hover:text-black rounded-l-full  hover:bg-[#E2ECEB]  dark:text-white  dark:hover:bg-gray-700 group">
                <CiInboxIn className='text-2xl text-amber-500' />

                <span className="flex-1 ms-3 whitespace-nowrap text-xl">Inbox</span>

              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2  rounded-lg text-white hover:text-black rounded-l-full  hover:bg-[#E2ECEB]  dark:text-white  dark:hover:bg-gray-700 group">
                <CiUser className='text-2xl text-amber-500' />

                <span className="flex-1 ms-3 whitespace-nowrap text-xl">Users</span>

              </a>
            </li>

            <li>
              <a href="#" className="flex items-center p-2  rounded-lg text-white hover:text-black rounded-l-full  hover:bg-[#E2ECEB]  dark:text-white  dark:hover:bg-gray-700 group">
                <IoMdLogIn className='text-2xl text-amber-500' />

                <span className="flex-1 ms-3 whitespace-nowrap text-xl">Sign-in</span>

              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2  rounded-lg text-white hover:text-black rounded-l-full  hover:bg-[#E2ECEB]  dark:text-white  dark:hover:bg-gray-700 group">
                <CiLogout className='text-2xl text-amber-500' />

                <span className="flex-1 ms-3 whitespace-nowrap text-xl">Sign-up</span>

              </a>
            </li>
          </ul>
        </div>
      </aside>



    </div>
  )
}

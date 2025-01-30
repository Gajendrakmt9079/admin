import { CiUser } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import React from 'react'
import { TiHomeOutline } from "react-icons/ti";
import { CiInboxIn } from "react-icons/ci";
import { BiCabinet } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";


export const Sidebar2 = () => {
  return (
    <div>


      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-[15%] h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        {/* User Box */}
        <div className="userbox overflow-hidden  bg-[#702963] w-full h-1/3 p-5 flex justify-center text-3xl items-center space-y-3 text-white flex-col">
          <img
            src="./user.jpg"
            className="rounded-full w-24 h-24 p-1 ring-2 ring-amber-500"
            alt="User"
          />
          <h1 className="text-xl sm:text-2xl">Alex Adams</h1>
          <h2 className="text-sm sm:text-lg">Alexadams@gmail.com</h2>
        </div>

        {/* "flex items-center p-2 text-white rounded-l-full hover:bg-[#E2ECEB] hover:text-black group" */}
        {/* Sidebar Menu */}
        <div className="h-full pl-3 py-4 overflow-y-auto bg-[#702972] dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center p-2 text-black bg-[#E6E6FA] rounded-l-full hover:bg-[#E6E6FA] hover:text-black group`
                    : `flex items-center p-2 text-white rounded-l-full hover:bg-[#E6E6FA] hover:text-black group`

                }
              >
                <TiHomeOutline className="text-2xl text-amber-500" />
                <span className="ms-3 text-xl">Admin</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="logs"
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center p-2 text-black bg-[#E6E6FA] rounded-l-full hover:bg-[#E6E6FA] hover:text-black group`
                    : `flex items-center p-2 text-white rounded-l-full hover:bg-[#E6E6FA] hover:text-black group`

                }
              >
                <BiCabinet className="text-2xl text-amber-500" />
                <span className="flex-1 ms-3 whitespace-nowrap text-xl">Today logs</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="add-users"
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center p-2 text-black bg-[#E6E6FA] rounded-l-full hover:bg-[#E6E6FA] hover:text-black group`
                    : `flex items-center p-2 text-white rounded-l-full hover:bg-[#E6E6FA] hover:text-black group`

                }
              >
                <CiInboxIn className="text-2xl text-amber-500" />
                <span className="flex-1 ms-3 whitespace-nowrap text-xl">Add users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="users"
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center p-2 text-black bg-[#E6E6FA] rounded-l-full hover:bg-[#E6E6FA] hover:text-black group`
                    : `flex items-center p-2 text-white rounded-l-full hover:bg-[#E6E6FA] hover:text-black group`

                }
              >
                <CiUser className="text-2xl text-amber-500" />
                <span className="flex-1 ms-3 whitespace-nowrap text-xl">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="sign-in"

                className={({ isActive }) =>
                  isActive
                    ? `flex items-center p-2 text-black bg-[#E6E6FA] rounded-l-full hover:bg-[#E6E6FA] hover:text-black group`
                    : `flex items-center p-2 text-white rounded-l-full hover:bg-[#E6E6FA] hover:text-black group`

                }
              >
                <IoMdLogIn className="text-2xl text-amber-500" />
                <span className="flex-1 ms-3 whitespace-nowrap text-xl">Sign-in</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="sign-up"
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center p-2 text-black bg-[#E6E6FA] rounded-l-full hover:bg-[#E6E6FA] hover:text-black group`
                    : `flex items-center p-2 text-white rounded-l-full hover:bg-[#E6E6FA] hover:text-black group`

                }
              >
                <CiLogout className="text-2xl text-amber-500" />
                <span className="flex-1 ms-3 whitespace-nowrap text-xl">Sign-up</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

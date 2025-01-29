import React from 'react'
import { TiHomeOutline } from "react-icons/ti";


export const Sidebar = () => {


  return (
    <>
      <div className="navbar w-1/4 bg-[#425C59] h-full   ">

        <div className="userbox  bg-[#3D5553] w-full h-1/3 p-5 flex justify-center text-3xl items-center space-y-3 text-white flex-col">
          <img src="./user.jpg" className='rounded-full w-[10vh] p-1 h-[10vh] ring-2 ring-amber-500 ' alt="" />
          <h1>Alex adams</h1>
          <h2 className='text-lg'>Alexadams@gmail.com</h2>
        </div>

        <div className="navbar p-10">
          <nav>
            <ul>
              <li className=''>
                <a href="" className='text-2xl flex space-x-3'> <TiHomeOutline className='inline text-3xl text-amber-500 ' /> <span>Dashboard</span> </a>
              </li>
            </ul>
          </nav>



        </div>
      </div>

    </>
  )
}

import React from 'react'

import { Users } from '../pages/Users'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { HeroHeader13 } from '../Admin'
import { Sidebar2 } from '../UI/Sidebar'

export const Boardlayout = () => {
    
    
     return (
       <>
       
                   <div className='w-[70vw] shadow-2xl rounded-4xl p-8 h-[70vh]   overflow-hidden'>
                       <Sidebar2/>
                       <Outlet />
                   </div>
               </>
      )
    
}

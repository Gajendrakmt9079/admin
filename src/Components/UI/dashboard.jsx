import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import { Boardlayout } from '../pages/daskboardlayout'
import { HeroHeader13 } from '../Admin'
import { Addusers } from '../pages/Addusers'
import { Users } from '../pages/Users'
import { Sign } from '../pages/Sign'
import { Logs } from '../pages/Logs'
import { Updateuser } from '../pages/updateuser'
import { Userdetail } from '../pages/userdetail'


export const Dashboard = () => {
    const router2 = createBrowserRouter([

        {
            path: "/",
            element: <Boardlayout />,
            children: [
                {
                    path: "/",
                    element: <HeroHeader13 />,
                },
                {
                    path: "/add-users",
                    element: <Addusers />,
                },
                {
                    path: "/users",
                    element: <Users />,
                },
                {
                    path: "/sign-in",
                    element: <Sign />,
                },
                {
                    path: "/sign-up",
                    element: <Sign />,
                },
                {
                    path: "/logs",
                    element: <Logs />,
                },
                {
                    path: "/users/user/update/:id",
                    element: <Updateuser />,
                },
                {
                    path: "/users/user/detail/:id",
                    element: < Userdetail/>,
                },

            ],
        },
    ])
    return (
        <>
            <RouterProvider router={router2} />

        </>
    )
}

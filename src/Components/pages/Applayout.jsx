import React from 'react'
import { Sidebar2 } from '../UI/Sidebar'
import { Outlet } from 'react-router-dom'
import { Dashboard } from '../UI/dashboard'

export const Applayout = () => {
  return (
    <>
    <Sidebar2/>
    <Outlet/>
    <Dashboard/>
    
    </>
  )
}

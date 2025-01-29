import React from 'react'
import { Notify } from './notify'
import { Userlist } from './Userlist'

export const Dashboard = () => {
    return (
        <>

            <div className='w-[75%]  p-8 h-full ml-[25%]'>
           <Notify/>
           <Userlist/>
            </div>
        </>
    )
}

import React, { useState } from 'react'

export const Logs = () => {

  const [datetime, setDateime] = useState("")


  setInterval(() => {
    const now = new Date();
    const localdate = now.toLocaleDateString();
    const loacltime = now.toLocaleTimeString();

    setDateime(`${localdate} - ${loacltime}`)
  }, 1000)


  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = date + "/" + month + "/" + year;
  return (
    <>
      <div className='h-full w-full  rounded-2xl p-10'>

        <h1 className='grid justify-items-center p-3 font-bold tracking-wider  mb-5'> {currentDate}  logs</h1>



        <ul>
          <li className='flex space-x-10 capitalize py-1 rounded-xl bg-white px-10'>
            <span>1.</span>
            <span>
              name</span>
            <span>access</span>
            <span>time</span>
          </li>
        </ul>
      </div>

    </>
  )
}

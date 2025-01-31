import React from 'react'

export const Addusers = () => {
  return (

    <>

    

<form class="max-w-md mx-auto ">

  <h1 className='mb-1 text-xl grid justify-items-center'> Add user</h1>
  <div class="relative z-0 w-full mb-5 group">

<input type="text" name="fullname" id="fullname" class="block hover:bg-purple-100 rounded-xl py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="enter id " required />

</div>
  <div class="relative z-0 w-full mb-5 group">

      <input type="text" name="fullname" id="fullname" class="block hover:bg-purple-100 rounded-xl py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="enter full name " required />
 
  </div>
  <div class="relative z-0 w-full mb-5 group">

      <input type="email" name="fullname" id="fullname" class="block hover:bg-purple-100 rounded-xl py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="email" required />
 
  </div>
  <div class="relative z-0 w-full mb-5 group">

      <input type="text" name="fullname" id="fullname" class="block hover:bg-purple-100 rounded-xl py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="enter  Department " required />
 
  </div>
  <div class="relative z-0 w-full mb-5 group">
<label htmlFor="image" className=''>Uplaod image:</label>
      <input type="file" name="fullname" id="fullname" class="block hover:bg-purple-100 rounded-xl px-2 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="enter full name " required />
 
  </div>
  <div class="relative z-0 w-full mb-5 group">

      <input type="number" name="fullname" id="fullname" class="block hover:bg-purple-100 rounded-xl py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="enter phone no. " required />
 
  </div>
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">create user</button>
</form>

    </>
  )
}

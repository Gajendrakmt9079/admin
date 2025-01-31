import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Users = () => {


  const navigate = useNavigate();



  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);


  const handledeletebtn = (Name) => {
    confirm("you want to delete " + Name);
  }

  const handleupdatebtn = (id) => {
    navigate(`/users/user/update/${id}`);
  }

  const handeluserdetail = (id) => {
    navigate(`/users/user/detail/${id}`);
    
  }
  useEffect(() => {

    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data.employees);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=' h-full '>
      <h1 className=' grid justify-items-center  text-left font-semibold tracking-wider text-2xl mb-4'>Employee List</h1>
      <ul className='py-10 px-6 space-y-2 overflow-y-scroll overflow-hidden h-full  '>

        <li className='flex justify-between  font-bold'><span>Name</span>
          <span>department</span>
          <span>role</span>
          <span>Action</span>
        </li>
        {employees.map((employee) => (
          <li onClick={() => handeluserdetail(employee.id)} className='flex justify-between shadow-2xs px-3 py-1 rounded-2xl hover:bg-[#e8c6eb] hover:rounded-3xl  hover:scale-105 text-xl bg-white' key={employee.id}>
            <h1 className='text-left w-1/3'>  {employee.name}</h1>
            <h2 className='text-left w-1/3'> {employee.department}</h2>
            <h3 className='text-left w-1/3'> {employee.role}</h3>

            <span className='flex space-x-8'>
              <button
                className='bg-green-300 px-2 capitalize text-sm font-semibold py-1  rounded-lg'
                onClick={() => handleupdatebtn(employee.name)}
              >update</button>
              <button
                className='bg-red-500 px-2 capitalize text-sm font-semibold py-1 rounded-lg'
                onClick={() => handledeletebtn(employee.name)}
              >delete</button>
            </span>

          </li>
        ))}
      </ul>
    </div>
  );
}

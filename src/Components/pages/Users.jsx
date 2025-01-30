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
    <div>
      <h1 className=' grid justify-items-center  text-left font-semibold tracking-wider text-2xl mb-4'>Employee List</h1>
      <ul className='p-5 space-y-1'>

        <li className='flex justify-between  font-bold'><span>Name</span>
          <span>department</span>
          <span>role</span>
          <span>Action</span>
        </li>
        {employees.map((employee) => (
          <li className='flex justify-between shadow-2xs p-1' key={employee.id}>
            <h1 className='text-left w-1/3'>  {employee.name}</h1>
            <h2 className='text-left w-1/3'> {employee.department}</h2>
            <h3 className='text-left w-1/3'> {employee.role}</h3>

            <span className='flex space-x-8'>
              <button
                className='bg-green-300 px-2 py-1 rounded-lg'
                onClick={() => handleupdatebtn(employee.name)}
              >update</button>
              <button
                className='bg-red-500 px-2 py-1 rounded-lg'
                onClick={() => handledeletebtn(employee.name)}
              >delete</button>
            </span>

          </li>
        ))}
      </ul>
    </div>
  );
}

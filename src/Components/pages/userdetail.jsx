import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function Userdetail() {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data.json') // Ensure the file is in public/
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json(); // Parse JSON directly
            })
            .then((data) => {
                const foundEmployee = data.employees.find((emp) => emp.id === parseInt(id));
                if (foundEmployee) {
                    setEmployee(foundEmployee);
                } else {
                    setError(`No employee found with ID: ${id}`);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError('Failed to fetch employee data. Please try again later.');
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!employee) return <p>No employee found with the specified ID.</p>;

    return (
        <div className='flex justify-center items-center align-middle m-auto'>


            <div className="w-full max-w-sm h-96 p-14 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://static.vecteezy.com/system/resources/thumbnails/030/032/371/small_2x/iron-man-mask-portrait-logo-tattoo-poster-pixel-art-illustration-voxel-graphic-photo.jpg" alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{employee.name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{employee.department}</span>
                    <span className="text-lg text-gray-700 dark:text-black">{employee.role}</span>
                    <div className="flex mt-4 md:mt-6 capitalize space-x-3">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-green-400 rounded-lg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Update</a>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">delete</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

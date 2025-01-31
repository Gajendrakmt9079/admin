
import React, { useState, useEffect } from "react";
import axios from "axios";

export const Userlist = () => {


    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");


    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <>
            <div className="userlist">

                <div className="userfilters flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 p-4">
                    <span className="text-lg font-semibold">Results</span>
                   
                </div>


                <div className="lists  my-5 rounded-3xl p-3 w-full h-[45vh] ">
                    <table className="w-full min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-3 px-4 text-left">Name</th>
                                <th className="py-3 px-4 text-left">Role</th>
                            </tr>
                        </thead>
                        <tbody>

                            {users.map((cureml, index) => (
                                <tr key={index} className="border-b bg-white  border-dashed rounded-full border-gray-200 ">
                                    <td className="py-3 px-4 "><img className="h-9 rounded-full inline m-3" src="./user.jpg" alt="" />{cureml.name}</td>
                                    <td className="py-3 px-4">{cureml.role}</td>
                                </tr>

                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

import React from 'react'

export const Userlist = () => {
    return (
        <>
            <div className="userlist">

                <div className="userfilters flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 p-4">
                    <span className="text-lg font-semibold">Results</span>
                    <span>
                        <select
                            name="filter"
                            className="bg-transparent px-8 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:border-blue-500"
                            id="filter"
                        >
                            <option value="select">Select</option>
                            <option value="BY name">BY name</option>
                            <option value="BY role">BY role</option>
                            <option value="BY id">BY id</option>
                            <option value="BY alphabetically">BY alphabetically</option>
                        </select>
                    </span>
                </div>


                <div className="lists bg-white my-5 rounded-3xl p-3 w-full h-[45vh] ">
                    <table className="w-full min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-3 px-4 text-left">Name</th>
                                <th className="py-3 px-4 text-left">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 px-4">tony</td>
                                <td className="py-3 px-4">Admin</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 px-4">jack</td>
                                <td className="py-3 px-4">Admin</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

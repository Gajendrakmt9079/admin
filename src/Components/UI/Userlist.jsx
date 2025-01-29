import React from 'react'

export const Userlist = () => {
    return (
        <>
            <div className="userlist ">
                <div className="userfilters flex justify-between">
                    <span >Results </span>
                    <span><select name="filter" className='bg-transparent px-8 rounded-3xl' id="filter">
                        <option value="select">select</option>
                        <option value=" BY name">BY name</option>
                        <option value="BY role">BY role</option>
                        <option value="BY id">BY id</option>
                        <option value="BY alphaticly">BY alphaticly</option>
                    </select></span>
                </div>
                <div className="lists bg-white my-5 rounded-3xl p-3 w-full h-[45vh]">
               <table>
                <th className='flex gap-10'>
                    <td>hello</td>
                    <td>hi</td>

                </th>
                <tr>
                    <td>ram</td>
                    <td>sita</td>
                </tr>
               
                <tr>
                    <td>sita</td>
                </tr>
               
               </table>

                </div>
            </div>
        </>
    )
}

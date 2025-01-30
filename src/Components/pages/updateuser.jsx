import React from 'react'
import { useParams } from 'react-router-dom'

export const Updateuser = () => {

    const { id } = useParams();
    return (
        <div>update  user {id}</div>
    )
}

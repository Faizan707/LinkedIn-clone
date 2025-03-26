'use client'
import { useUserContext } from '@/context/Users.context'
import Image from 'next/image'
import React from 'react'

function FetchUsers() {
    const {users} = useUserContext()
  return (
    <>
    {users.map((user)=>(
        <li key={user._id}>
            {user.full_name}
            <Image src={user.avatar} height={100} width={100} alt={user.full_name}/>
            {user.email}
        </li>
    ))}
    </>
  )
}

export default FetchUsers
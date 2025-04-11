"use client"
import React, { createContext, use, useEffect, useState } from 'react'
import instance from '@/lib/axios'
import { useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

interface UserData{
    
}
const constext = createContext(null)
const { isSignedIn, user  } = useUser()

const saveUser = async() =>{

    try {
        if(!isSignedIn){
            redirect("/sign-in")
        }
        const data = {
            user_id : user.id,
            firstName:user.firstName,
            lastName : user.lastName,
            email: user.emailAddres,
            profileImage:
        }
        const res = instance.post("/api/users")


    } catch (error) {
        
    }
    
}

const UserContext = () => {
    useEffect(()=>{

    },[])
    const [user,setUser] = useState()



  return (
    <div>UserContext</div>
  )
}

export default UserContext
'use client'
import React, { useEffect } from 'react'
import { useState,createContext } from 'react'
import { dummyCourses } from '../assets/assets';
import { useRouter } from 'next/router';

export const AppContext = createContext();

const AppContextProvider = (props)=>{

    const currency = process.env.NEXT_PUBLIC_CURRENCY 

    // const router = useRouter()

    const [allCourses, setAllCourses] = useState([])

    // fetch all courses
    async function fetchAllCourse(){
        setAllCourses(dummyCourses)
    }

    useEffect(()=>{
        fetchAllCourse()
    },[])

    const value = {
        currency,allCourses,
        // router
    }


    return (
        <AppContext.Provider value={value}>
        {props.children}
        </AppContext.Provider>
    )

}
      
export default AppContextProvider

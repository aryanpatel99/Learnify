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
    const [isEducator, setIsEducator] = useState(true)

    // fetch all courses
    async function fetchAllCourse(){
        setAllCourses(dummyCourses)
    }

    // function to calculate average rating
    const calculateRating = (course)=>{
        if(course.courseRatings.length === 0){
            return 0
        }
        let totalRaitng = 0
        course.courseRatings.map((rating=>{
            totalRaitng+= rating.rating
        }))
        return totalRaitng / course.courseRatings.length 

    }

    useEffect(()=>{
        fetchAllCourse()
    },[])

    const value = {
        currency,allCourses,calculateRating,isEducator,setIsEducator
        // router
    }


    return (
        <AppContext.Provider value={value}>
        {props.children}
        </AppContext.Provider>
    )

}
      
export default AppContextProvider

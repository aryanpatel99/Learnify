'use client'
import React, { useEffect } from 'react'
import { useState, createContext } from 'react'
import { dummyCourses } from '../assets/assets';
import { useRouter } from 'next/router';

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY

    // const router = useRouter()

    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(true)
    const [fetchedCourses, setFetchedCourses] = useState([])

    // fetch all courses
    async function fetchAllCourse() {
        setAllCourses(dummyCourses)
    }

    // fetch from rapid api
    async function fetchData() {
        const url = 'https://paid-udemy-course-for-free.p.rapidapi.com/?page=0';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a4e5d70b34mshf711824f5315dd9p12611ajsnb6870f4393bd',
                'x-rapidapi-host': 'paid-udemy-course-for-free.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            setFetchedCourses(result || [])
            console.log(result);
        } catch (error) {
            console.error(error);
            console.error('Fetch error:', error)
        }
    }

    // function to calculate average rating
    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) {
            return 0
        }
        let totalRaitng = 0
        course.courseRatings.map((rating => {
            totalRaitng += rating.rating
        }))
        return totalRaitng / course.courseRatings.length

    }

    useEffect(() => {
        fetchAllCourse()
        fetchData()
    }, [])

    const value = {
        currency, allCourses, calculateRating, isEducator, setIsEducator, fetchedCourses
        // router
    }


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider

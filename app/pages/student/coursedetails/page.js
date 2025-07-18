'use client'

import { AppContext } from '@/app/context/AppContext'
// import { useScroll } from 'motion/dist/react'
import { useParams } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
const page = () => {

  const {id} = useParams()
  const [courseData, setCourseData] = useState(null)
  const {allCourses} = useContext(AppContext) 

  // function to fetch the individual courses data
  const fetchCourseData = async () => {
    const findCourse = allCourses.find(course => course._id === id)
    setCourseData(findCourse)
  }


  useEffect(()=>{
    fetchCourseData()
  },[])



  return (
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left '>

      <div className='absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70'></div>
      {/* left side */}
      <div></div>
      {/* right side */}
      <div></div>
    </div>
  )
}

export default page
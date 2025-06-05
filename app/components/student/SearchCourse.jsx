'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/app/assets/assets'
import { useRouter } from 'next/navigation'


const SearchCourse = ({value,setValue}) => {
  const router = useRouter()
//   const [input, setInput] = useState(data ? data: '')
  // const [input, setInput] = useState('')

//   function onSearchHandler(e){
//     // whenever we submit it will prevent the website from loading
//     e.preventDefault()
//     if(input.trim()){
//       router.push(`/pages/student/courselist/`+ input)
//     }

//   }


  return (
      <form onSubmit={(e)=> e.preventDefault()} className='max-w-xl w-full md:h-14 h-12 flex items-center bg-gray-100 border border-gray-500/20 rounded'>
        <Image src={assets.search_icon} alt='search icon' className='md:w-auto w-10 px-3'/>
        {/* <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Search for courses' className='w-full h-full outline-none text-gray-500/80' /> */}
        <input onChange={(e)=> setValue(e.target.value)} value={value} type="text" placeholder='Search for courses' className='w-full h-full outline-none text-gray-500/80' />
        {/* <button type='submit' className='bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1 hover:bg-blue-700'>Search</button> */}
      </form>
  )
}

export default SearchCourse
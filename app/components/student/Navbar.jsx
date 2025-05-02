'use client';
import React, { useContext } from 'react'
// import { assets } from '../app/assets/assets'
import Link from 'next/link'
import { assets } from '@/app/assets/assets'
import Image from 'next/image'
import { useClerk,UserButton,useUser } from '@clerk/nextjs'
import { AppContext } from '@/app/context/AppContext';
import { useRouter } from 'next/router';



const Navbar = () => {

  const {openSignIn} = useClerk()
  const {user} = useUser();



  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 bg-cyan-100/70`}>
      <Image onClick={()=> router && router.push('/')} src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
      {/* this div will be hidden for mobile devices and for medium devices it will have flex */}
      <div className='hidden md:flex items-center gap-5 text-gray-500 '>
        <div className='flex items-center gap-5'>
          {user && <>
          <button>Become Educator</button> |
          {/* check route */}
          <Link href={'/pages/student/myenrollments'}>MyEnrollments</Link>
          </>}
        </div>

        {user ? <UserButton />:
        <button onClick={() => openSignIn()} className='bg-blue-600 text-white py-2 px-5 rounded-full'>Create Account</button>
        }
      </div>
      {/* for medium and above screen -> hidden */}
      {/* for phone screens  */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
        {user && <>
          <button>Become Educator</button> |
          {/* check route */}
          <Link href={'/pages/student/myenrollments'}>MyEnrollments</Link>
          </>}
        </div>
        {user ? <UserButton />:
            <button onClick={() => openSignIn()}><Image src={assets.user_icon} alt='usericon'/></button>
        }
      </div>
    </div>
  )
}

export default Navbar
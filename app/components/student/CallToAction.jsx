import { ContainerTextFlip } from '@/components/ui/container-text-flip'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/app/assets/assets'
import { Button } from '@/components/ui/button'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      {/* <h1 className='md:text-[48px] md:leading-[58px] text-[28px] leading-[36px] relative font-bold text-gray-800 max-w-3xl mx-auto '><span className='text-4xl font-bold'>Learn</span><span><ContainerTextFlip words={["anything", "anytime", "anywhere"]} size="xl" /></span> </h1> */}
      <h1 className='text-xl md:text-5xl font-semibold text-gray-800'>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm'>Empower your learning journey with flexible, expert-led courses designed to fit your schedule and goals.<br/> 
  Start learning at your own pace — from anywhere, at any time.</p>
      <div className='flex items-center gap-6 font-medium mt-4'>
        <Button variant={'mybtn'} size={'lg'}>Get Started</Button>
        <Button variant={"outline"} size={'lg'}>Learn More <Image src={assets.arrow_icon} alt='arrowIcon'/></Button>
      </div>
     
    
    </div>
  )
}

export default CallToAction
'use client'
import React from 'react'
import '../../../components/student/PricingCard.css'
import '../../../components/student/PricingCard'
import PricingCard from '../../../components/student/PricingCard'
import { useState } from 'react'

const page = () => {
    const [selectMonthly, setSelectMonthly] = useState(true)
  return (
    <div className='PricingApp'>
        <div className='app-container'>
            <header>
                <h1 className='header-topic'>Our Pricing Plans</h1>
                <div className='header-row'>
                    <p>Annual Plan</p>
                    <label className='price-switch'>
                        <input type="checkbox"
                        onChange={()=> setSelectMonthly((prev) => !prev)} className='price-checkbox' />
                        <div className='switch-slider'></div>
                    </label>
                    <p>Monthly</p>
                </div>
            </header>

            {/* cards */}
            <div className='pricing-cards'>
                <PricingCard title="Essential" price={selectMonthly ? "$20.99" : "$189.99"} storage="60 GB Storage" users="5" sendUp="1 GB"/>
                <PricingCard title="Deluxe" price={selectMonthly ? "$34.99" : "$349.99"} storage="70 GB Storage" users="10" sendUp="10 GB"/>
                <PricingCard title="Premium" price={selectMonthly ? "$79.99" : "$499.99"} storage="600 GB Storage" users="" sendUp="1 GB"/>
            </div>

        </div>


    </div>
  )
}

export default page

// import PricingCard from '@/app/components/student/PricingCard'
// import React from 'react'

// const page = () => {
//   return (
//     <PricingCard/>
//   )
// }

// export default page
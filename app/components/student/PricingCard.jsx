import React from 'react'
import './PricingCard.css'

const PricingCard = ({ title, price, storage, users, sendUp }) => {
    return (
        <div className='PricingCard'>
            <header>
                <p className='card-title'>{title}</p>
                <h1 className='card-title card-price'>{price}</h1>
            </header>
            <div className='card-features'>
                <div className='card-storage'>{storage}</div>
                <div className='card-user-allowed'>{users} users in total</div>
                <div className='card-send-up'>Send up to {sendUp}</div>
            </div>
            <button className='card-btn'>Read More</button>
        </div>




    )
}

export default PricingCard
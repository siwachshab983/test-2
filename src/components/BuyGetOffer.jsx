import React from 'react'
import Heading from './common/Heading'
import Button from './common/Button'
import tastyPizza from '../assets/images/png/tasty-pizza-img.png';

const BuyGetOffer = () => {
  return (
    <>
      <div className="bg-[url(./assets/images/png/tasty-bg-img.png)] bg-cover px-3">
        <div className="max-w-[1194px] mx-auto">
          <div className="pt-[17px] pb-[33px] flex max-sm:flex-wrap justify-center gap-5 lg:gap-[44px] items-center">
            <div className="md:max-w-[400px] lg:max-w-[597px]">
              <p className='text-prime-gradient pb-0.5 font-semibold text-2xl md:text-[28px] leading-[140%] '>Buy 1 Pizza, Get 1 Free!</p>
              <Heading className="text-white !text-[30px] md:!text-[40px] lg:!text-[56px]">Medium & Large pizzas</Heading>
              <p className='text-prime-gradient font-semibold text-2xl md:text-[28px] leading-[140%] pt-1 w-full'>Limited Offer</p>
              <Button className="px-[32.5px] btn-gradient py-[15px] mt-3">Order Now</Button>
            </div>
            <div className="relative flex items-center">
              <img className='max-w-[554px] pointer-events-none lg:max-w-[553px] w-full' src={tastyPizza} alt="pizza-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default BuyGetOffer

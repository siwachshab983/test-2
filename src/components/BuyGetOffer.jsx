import React from 'react'
import Heading from './common/Heading'
import Button from './common/Button'
import tastyPizza from '../assets/images/png/tasty-pizza-img.png';

const BuyGetOffer = () => {
  return (
    <>
      <div id='offers' className="bg-[url(./assets/images/png/tasty-bg-img.png)] bg-cover px-5">
        <div className="max-w-[1194px] mx-auto">
          <div className="pt-[17px] pb-[33px] flex sm:flex-row flex-col-reverse justify-center gap-5 lg:gap-[44px] items-center">
            <div className="md:max-w-[300px] lg:max-w-[597px]">
              <p className='text-prime-gradient sm:text-start text-center pb-0.5 font-semibold md:text-custom-3xl text-2xl leading-[140%] '>Buy 1 Pizza, Get 1 Free!</p>
              <Heading className="text-white sm:text-start text-center !text-3xl md:!text-[40px] lg:!text-[56px]">Medium & Large pizzas</Heading>
              <p className='text-prime-gradient sm:text-start text-center font-semibold md:sm:text-custom-3xl text-2xl leading-[140%] pt-1 w-full'>Limited Offer</p>
              <Button className="px-[32.5px] max-sm:w-full py-4 mt-3">Order Now</Button>
            </div>
            <div className="relative flex items-center">
              <img className='pointer-events-none lg:min-h-[350px] max-lg:object-cover lg:max-w-[553px] w-full' src={tastyPizza} alt="pizza-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default BuyGetOffer

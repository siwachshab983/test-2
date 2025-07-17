import React from 'react'
import Heading from './common/Heading';
import Description from './common/Description';
import Button from './common/Button';

const CravingSomething = () => {
  return (
    <>
      <div id='contact' className="bg-[url(./assets/images/png/CravingSomething-bg-img.png)] bg-cover bg-center bg-no-repeat px-5 relative">
        <div className="py-10 md:py-20 relative z-1">
          <Heading className="mx-auto !leading-[120%] !text-off-white text-custom-3xl md:text-5xl sm:text-4xl  font-semibold text-center max-w-[722px]">Craving something cheesy, spicy, or just straight-up delicious?</Heading>
          <Description className="text-soft-gray max-w-[465px] text-center mx-auto pt-4">Your next favorite pizza is waiting. Freshly baked, flavor-packed, and delivered hot to your door — every single time.</Description>
          <div className="flex gap-4 sm:gap-6 mt-5.5 sm:mt-8 sm:flex-row flex-col  justify-center sm:items-start items-center">
            <Button className="px-[29px] sm:px-[33px] py-3.5 sm:max-w-none max-w-[300px] max-sm:w-full">Order Now</Button>
            <button className={'!bg-none max-sm:w-full btn-blur-opacity-1 !py-[15px] border !border-white px-8 active:scale-90 relative z-10 duration-300 text-base font-semibold rounded-xl cursor-pointer text-white !leading-[137%]'}>View Full Menu</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CravingSomething
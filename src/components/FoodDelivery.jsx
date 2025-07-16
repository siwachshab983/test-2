import React from 'react'
import image from './../assets/images/png/delivery-img.png'
import Description from './common/Description'
import Heading from './common/Heading'
import { FOODDELIVERY } from '../utils/helper'
import Button from './common/Button'
import Container from './common/Container'
import { Line } from '../utils/icon'
import tomatoImg from '../assets/images/png/tomato-img.png'


const FoodDelivery = () => {
  return (
    <div className="px-5 py-[50px] md:py-25 relative bg-[url(./assets/images/png/best-seller-bg-img.png)] bg-no-repeat bg-cover bg-center">
      <Container>
        <div className='flex lg:flex-row flex-col-reverse gap-[33px] sm:text-start text-center'>
          <div className='w-full py-2.5'>
            <div className="sm:flex hidden items-center gap-1.5">
              <h4 className='text-prime-gradient text-lg font-bold leading-[22px]'>Food Delivery</h4>
              <div className="rotate-[180deg]">
                <Line />
              </div>
            </div>
            <div className=" flex sm:hidden justify-center items-center gap-1.5">
              <div>
                <Line />
              </div>
              <h4 className='text-prime-gradient  text-lg font-bold leading-[22px]'>Food Delivery</h4>
              <div className=" rotate-[180deg]">
                <Line />
              </div>
            </div>
            <Heading className={'text-custom-3xl md:text-5xl sm:text-4xl  w-full !leading-[120%] lg:max-w-[463px] mt-2'}>
              Fast, Fresh & Always On Time
            </Heading>
            <Description className={'text-[#373737] mb-3 font-normal mt-[15px] !leading-[26px] w-full lg:max-w-[463px]'}>We deliver your favorite pizzas piping hot, just the way you love them — anywhere in town. From cheese-loaded bites to spicy paneer delights, your cravings are just a click away.</Description>
            <div className='flex flex-col gap-[8px] sm:items-start items-center'>
              {FOODDELIVERY.map((item, index) => (
                <div key={index} className='flex items-center gap-[6px]'>
                  <item.icon />
                  <Description className={'!leading-[26px]'}>{item.info} </Description>
                </div>
              ))}
            </div>
            <Button className={'mt-6 sm:max-w-none max-w-[300px] max-sm:w-full'}>Order Now</Button>
          </div>
          <img src={image} alt="image" className='max-w-[612px] w-full block mx-auto pointer-events-none' />
        </div>
      </Container>
      <img className='pointer-events-none absolute xl:-left-[235px] -left-[200px] md:flex hidden xl:w-[409px] w-[350px] -bottom-[126px] opacity-60' src={tomatoImg} alt="tomatoImg" />
    </div>
  )
}

export default FoodDelivery
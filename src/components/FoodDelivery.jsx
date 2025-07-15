import React from 'react'
import image from './../assets/images/png/delivery-img.png'
import Description from './common/Description'
import line from './../assets/images/png/delivery-line.png'
import Heading from './common/Heading'
import { FOODDELIVERY } from '../utils/helper'
import Button from './common/Button'


const FoodDelivery = () => {
  return (
    <div className='max-w-[1164px] px-3 mx-auto mt-[100px]'>
      <div className='flex -mx-3 flex-wrap lg:flex-row flex-col-reverse lg:gap-0 gap-7'>
        <div className='lg:w-1/2 w-full px-3'>
          <div className='flex items-center gap-[6px]'>
            <Description className={'!font-bold !text-[18px] !leading-[120%]  text-prime-gradient'}>Food Delivery</Description>
            <img src={line} alt="line" className='w-[60px] h-[1px]' />
          </div>
          <Heading className={'text-[48px] w-ful  lg:max-w-[463px] mt-2'}>
            Fast, Fresh & Always On Time
          </Heading>
          <Description className={'text-[#373737] mb-3 font-normal mt-[15px] w-full lg:max-w-[463px]'}>We deliver your favorite pizzas piping hot, just the way you love them — anywhere in town. From cheese-loaded bites to spicy paneer delights, your cravings are just a click away.</Description>
          <div className='flex flex-col gap-[8px] max-lg:grid max-lg:grid-cols-2  max'>
            {FOODDELIVERY.map((item, index) => (
              <div key={index} className='flex gap-[6px]'>
                <item.icon />
                <Description className={'fonr-normal'}>{item.info} </Description>
              </div>
            ))}
          </div>
          <Button className={'mt-6'}>Order Now</Button>
        </div>
        <div className='lg:w-1/2 w-full px-3'>
          <img src={image} alt="image" className='max-w-[612px] w-full block mx-auto' />
        </div>
      </div>
    </div>
  )
}

export default FoodDelivery
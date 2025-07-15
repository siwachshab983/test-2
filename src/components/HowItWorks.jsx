import React from 'react'
import Description from './common/Description'
import leftLine from './../assets/images/png/left-line-work.png'
import rightLine from './../assets/images/png/right-line-work.png'
import Heading from './common/Heading'
import leftArrow from './../assets/images/png/left-arrow.png'
import { Order, Pizza, Track } from '../utils/icon'
import Button from './common/Button'

const HowItWorks = () => {
  return (
    <div className='max-w-[1164px] px-3 mx-auto mt-[100px]'>
      <div className='flex items-center gap-[6px] justify-center'>
        <img src={leftLine} alt="line" className='w-[60px] h-[1px]' />
        <Description className={'font-semibold text-[18px] text-prime-gradient '}>How It Works</Description>
        <img src={rightLine} alt="line" className='w-[60px] h-[1px]' />
      </div>
      <Heading className={'font-semibold text-[48px] text-center mx-auto max-w-[569px]  mt-2 mb-[40px]'}>Your Perfect Pizza in Just 3 Easy Steps!</Heading>

      <div className='flex md:flex-row flex-col max-md:justify-center max-md:items-center md:gap-0 gap-6
      '>
        <div className='max-w-[364px] flex justify-between flex-col '>
          <div className='w-[70px] mx-auto h-[70px] flex items-center justify-center rounded-[50%] bg-[#FDEDE3] mb-3'>
            <Pizza />
          </div>
          <Description className={'font-semibold text-[20px] min-[910px]:text-[24px] mt-3 text-center '}>Choose Your Pizza</Description>
          <Description className={'font-normal text-center max-w-[316px] mt-2 mb-3 '}>Browse our mouthwatering menu and pick your favorite from a wide range of cheesy, spicy, and desi-delicious pizzas.</Description>
          <Button className={'!py-[10px] !px-[16px] mx-auto block'}>View Menu</Button>
        </div>

        <img src={leftArrow} alt="line" className='max-lg:mx-auto mt-[45px] h-[12px] w-[80px] max-md:mb-[45px] md:rotate-0 rotate-90 lg:w-[191px]  md:w-[140px]' />

        <div className='max-w-[364px] flex justify-between flex-col'>
          <div className=''>
            <div className='w-[70px] mx-auto h-[70px] flex items-center justify-center rounded-[50%] bg-[#FDEDE3] mb-3'>
              <Order />
            </div>
            <Description className={'font-semibold text-[20px] min-[910px]:text-[24px] mt-3 text-center '}>Place Your Order</Description>
            <Description className={'font-normal text-center max-w-[316px] mt-2 mb-3 '}>BConfirm your cart, choose delivery or pickup, and pay securely — all in under
              a minute.</Description>
          </div>
          <Button className={'!py-[10px] !px-[16px] mx-auto block'}>View Menu</Button>
        </div>

        <img src={leftArrow} alt="line" className='max-lg:mx-auto mt-[45px] md:rotate-0 rotate-90 w-[80px] max-md:mb-[45px] h-[12px] min-lg:w-[191px] md:w-[140px]' />

        <div className='max-w-[364px] flex justify-between flex-col'>
          <div>
            <div className='w-[70px] mx-auto h-[70px] flex items-center justify-center rounded-[50%] bg-[#FDEDE3] mb-3'>
              <Track />
            </div>
            <Description className={'font-semibold text-[20px] min-[910px]:text-[24px] mt-3 text-center '}>Track & Enjoy</Description>
            <Description className={'font-normal text-center max-w-[316px] mt-2 mb-3 '}>Watch your pizza arrive in real-time, fresh and hot at your door. Unbox happiness
              and dig in!</Description>
          </div>
          <Button className={'!py-[10px] !px-[16px] mx-auto'}>View Menu</Button>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks

import React from 'react'
import Description from './common/Description'
import Heading from './common/Heading'
import { ArrowIcon, Line } from '../utils/icon'
import Button from './common/Button'
import Container from './common/Container'
import { HOW_IT_WORKS_DATA } from '../utils/helper'

const HowItWorks = () => {
  return (
    <div className="px-5 py-[50px] md:py-25">
      <Container>
        <div className=" flex justify-center items-center gap-1.5">
          <div className="">
            <Line />
          </div>
          <h4 className='text-prime-gradient text-lg font-bold leading-[22px]'>How It Works</h4>
          <div className=" rotate-[180deg]">
            <Line />
          </div>
        </div>
        <Heading className={'font-semibold text-custom-3xl md:text-5xl sm:text-4xl  text-center mx-auto max-w-[569px] !leading-[120%]  mt-2'}>Your Perfect Pizza in Just 3 Easy Steps!</Heading>
        <div className="pt-10 relative flex flex-wrap justify-center items-center gap-20 min-[776px]:gap-5 lg:gap-6 ">
          <div className="absolute max-[776px]:rotate-90 top-[34%] min-[1180px]:left-[279px] min-[776px]:top-[100px]"><ArrowIcon /></div>
          <div className="absolute max-[776px]:rotate-90 max-[776px]:block max-[1180px]:hidden top-[50%] min-[776px]:right-[279px] max-[776px]:top-[68%] min-[1180px]:top-[100px]"><ArrowIcon /></div>
          {HOW_IT_WORKS_DATA.map((item, index) => (
            <div data-aos="fade-up" className="max-w-[470px] min-[776px]:max-w-[358px] lg:max-w-[364px] w-full p-4 lg:p-6" key={index}>
              <div className="bg-[#FCECE2] size-[70px] rounded-full flex items-center justify-center mx-auto">{<item.icon />}</div>
              <h3 className='leading-[150%] text-2xl font-semibold text-center mt-3'>{item.title}</h3>
              <Description className="text-center !text-[#373737] pt-2 !leading-[26px]">{item.description}</Description>
              <div className="flex justify-center">
                <Button className="!py-2.5 !mt-3 !px-4 sm:max-w-none max-w-[400px] max-sm:w-full" >View Menu </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default HowItWorks

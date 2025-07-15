import React from 'react'
import Description from '../components/common/Description'
import { QUICK_LINKS, SOCIAL_ICON, SUPPORT_LINKS } from '../utils/helper'
import Heading from '../components/common/Heading'

const Footer = () => {
  return (
    <>
      <div className="px-5 pt-20">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex max-md:flex-col justify-between gap-10 md:gap-20">
            <div className="md:max-w-[400px] lg:max-w-[558px] mb-[5px]">
              <Heading className={'text-prime-gradient font-nunitosans font-medium text-[34px] !leading-[63px]'}>
                Pizza Nest
              </Heading>
              <Description className="text-[#575757] pt-3">At Pizza Nest, we believe every slice should bring joy. Whether you're ordering for one or feeding a crowd, our pizzas are baked with care, topped with love, and delivered hot to your doorstep. You just taste the difference.</Description>
              <div className="flex items-center gap-5 mt-4 sm:mt-6">
                {SOCIAL_ICON.map((item, index) => (
                  <a key={index} className='size-[52px] bg-prime rounded-full flex justify-center items-center' href={item.socialLink}>{<item.icon />}</a>
                ))}
              </div>
            </div>
            <div className="flex max-w-[312px] gap-2 w-full justify-between">
              <ul>
                <li className='text-[#010101] leading-[26px] mb-1'>Quick Links</li>
                {QUICK_LINKS.map((link, i) => (
                  <li className='mt-2' key={i}> <a className='text-[#575757] !leading-[26px] ' href="">{link}</a></li>
                ))}
              </ul>
              <ul>
                <li className='text-[#010101] leading-[160%] mb-1'>Support</li>
                {SUPPORT_LINKS.map((link, i) => (
                  <li className='mt-2' key={i}> <a className='text-[#575757] leading-[160%] ' href="">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-3 border-[#D1D1D166] w-full mt-6 sm:mt-8"></div>
          <Description className="text-[#575757] max-sm:text-sm py-4 text-center" >Copyright Pizza Nest © 2025, All rights reserved </Description>
        </div>
      </div>
    </>
  )
}

export default Footer
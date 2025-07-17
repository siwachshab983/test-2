import React from 'react'
import Heading from './common/Heading'
import Description from './common/Description'
import Button from './common/Button'
import starImg from '../assets/images/png/hero-star-img.png'
import { ArrowLine } from '../utils/icon'

const Hero = () => {
  return (
    <div id='home' className='max-w-[1440px]  bg-off-white lg:!px-10 !px-5 w-full mx-auto'>
      <div className="bg-[url(./assets/images/png/hero.png)] relative bg-no-repeat bg-cover flex flex-col items-center w-full md:min-h-[710px] rounded-3xl pt-10 px-5 pb-[185px]">
        <div className="max-w-[593px] w-full md:absolute top-[131px] xl:left-[110px] left-[75px]">
          <Heading className="sm:text-start text-center font-bold !leading-[120%] font-nunitosans text-4xl sm:text-[40px] md:text-5xl lg:text-[64px] text-white">
            Where Every Slice Feels Like Home
          </Heading>
          <Description className={'text-on-white sm:text-start text-center mt-4 mb-8 max-w-[540px] w-full'}> At Pizza Nest, we bake more than pizza — we bake comfort. Customize
            your perfect slice, or choose from our signature favorites</Description>
          <div className="flex flex-col sm:flex-row gap-6 mb-6 max-sm:max-w-[300px] max-sm:mx-auto w-full sm:justify-start justify-center sm:items-start items-center">
            <Button className={'!py-[15px] max-sm:w-full'}>Order Now</Button>
            <button className={'!bg-none max-sm:w-full btn-blur-opacity-1 !py-[15px] border !border-white px-8 active:scale-90 relative z-10 duration-300 text-base font-semibold rounded-xl cursor-pointer text-white !leading-[137%]'}>View Full Menu</button>
          </div>
          <div className="flex flex-col gap-y-2 max-sm:mx-auto sm:flex-row max-sm:max-w-[300px] w-full sm:justify-start justify-center items-center">
            <div className="max-w-[155px] w-full">
              <h4 className='font-nunito mb-[2px] font-semibold text-custom-3xl text-white w-full text-center leading-[34px]' >5,000+</h4>
              <p className='font-semibold font-nunito text-base text-center text-lighter-gray leading-[26px] w-full'> Pizzas Delivered</p>
            </div>
            <div className="border border-[#D5D5D5] sm:h-[39px] max-sm:w-full"></div>
            <div className="max-w-[168px] w-full">
              <h4 className='font-nunito mb-[2px] font-semibold text-custom-3xl text-white w-full text-center leading-[34px]'>98%</h4>
              <p className='font-semibold font-nunito text-base text-center text-lighter-gray leading-[26px] w-full'> Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="absolute xl:top-[173px] top-[80px] xl:left-[684px] left-[600px] lg:flex hidden">
          <ArrowLine />
        </div>
        <div className="absolute xl:top-[138px] max-w-max lg:top-[180px] bottom-10 xl:left-[963px] lg:left-[800px] sm:right-10 max-sm:left-1/2 transform max-sm:-translate-x-1/2">
          <div className="size-[114px] relative p-3">
            <img className='pointer-events-none absolute top-0 animate-spin [animation-duration:10s] left-0 w-full h-full z-10' src={starImg} alt="star" />
            <div className="rounded-full flex justify-center border-3 border-white/80 items-center w-full h-full relative z-20">
              <span className='leading-[120%] text-[25px] font-semibold font-nunito text-white'>₹ 299</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

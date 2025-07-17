import React from 'react'
import Container from './common/Container'
import Heading from './common/Heading'
import { Line, Line2 } from '../utils/icon'
import { GALLERY_DATA } from '../utils/helper.js'
import Button from './common/Button.jsx'
import pizzaSlice from '../assets/images/png/pizza-slice-3.png'

const OurGallery = () => {
  return (
    <div id='gallery' className='px-5 py-[50px] md:py-25 relative'>
      <Container className={'flex justify-center items-center flex-col'}>
        <div className=" flex justify-center items-center gap-1.5">
          <div className="">
            <Line2 />
          </div>
          <h4 className='text-prime-gradient text-lg font-bold leading-[22px]'>Our Gallery</h4>
          <div className=" rotate-[180deg]">
            <Line2 />
          </div>
        </div>
        <Heading className="text-center mt-2 text-custom-3xl md:text-5xl sm:text-4xl  !leading-[120%] mb-10 max-w-[550px] w-full" >A Glimpse Into Our Pizza World</Heading>
        <div className="flex xl:flex-row flex-col items-center md:gap-6 gap-4">
          <div className="xl:flex hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
            {
              GALLERY_DATA.slice(0, 2).map((image, i) => (
                <div data-aos="fade-up" key={i} className="overflow-hidden rounded-xl group">
                  <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300' src={image} alt="gallery-img" />
                </div>
              ))
            }
          </div>
          <div className="flex items-center md:gap-6 gap-4 w-full flex-col max-w-[558px]">
            {
              GALLERY_DATA.slice(2, 3).map((image, i) => (
                <div data-aos="fade-up" key={i} className="overflow-hidden rounded-xl group">
                  <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300' src={image} alt="gallery-img" />
                </div>
              ))
            }
            <div className="xl:flex hidden justify-center items-center md:gap-6 gap-4">
              {
                GALLERY_DATA.slice(3, 5).map((image, i) => (
                  <div data-aos="fade-up" key={i} className="overflow-hidden rounded-xl group">
                    <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300' src={image} alt="gallery-img" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="xl:flex hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
            {
              GALLERY_DATA.slice(5, 8).map((image, i) => (
                <div data-aos="fade-up" key={i} className="overflow-hidden rounded-xl group">
                  <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300' src={image} alt="gallery-img" />
                </div>
              ))
            }
          </div>
          <div className="max-sm:hidden flex xl:hidden justify-center items-center w-full md:gap-6 gap-4">
            {
              GALLERY_DATA.slice(3, 5).map((image, i) => (
                <div data-aos="fade-up" key={i} className="overflow-hidden rounded-xl group">
                  <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300' src={image} alt="gallery-img" />
                </div>
              ))
            }
          </div>
          <div className="flex sm:hidden justify-center items-center w-full md:gap-6 gap-4">
            {
              GALLERY_DATA.slice(3, 4).map((image, i) => (
                <div data-aos="fade-up" key={i} className="overflow-hidden rounded-xl group w-full">
                  <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300' src={image} alt="gallery-img" />
                </div>
              ))
            }
          </div>
          <div className="flex xl:hidden md:gap-6 gap-4 justify-center items-center">
            <div className="flex xl:hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
              {
                GALLERY_DATA.slice(0, 2).map((image, i) => (
                  <div data-aos="fade-up" key={i} className="overflow-hidden rounded-xl group">
                    <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300' src={image} alt="gallery-img" />
                  </div>
                ))
              }
            </div>
            <div className="flex xl:hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
              {
                GALLERY_DATA.slice(5, 8).map((image, i) => (
                  <div data-aos="fade-up" key={i} className="overflow-hidden rounded-xl group">
                    <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300' src={image} alt="gallery-img" />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <Button className={'mt-8 !leading-[22px] sm:max-w-none max-w-[300px] max-sm:w-full'}>View More</Button>
        <img className="absolute md:flex hidden origin-right pizza-cheese right-0 -top-15" src={pizzaSlice} alt="image" />
      </Container>
    </div>
  )
}

export default OurGallery

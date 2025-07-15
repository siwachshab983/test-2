import React from 'react'
import Container from './common/Container'
import Heading from './common/Heading'
import { Line } from '../utils/icon'
import { GALLERY_DATA } from '../utils/helper.js'

const OurGallery = () => {
  return (
    <div className='px-5 py-25'>
      <Container className={'flex justify-center items-center flex-col'}>
        <div className=" flex justify-center items-center gap-1.5 mb-2">
          <div className="">
            <Line />
          </div>
          <h4 className='text-prime-gradient text-lg font-bold leading-[22px]'>Our Gallery</h4>
          <div className=" rotate-[180deg]">
            <Line />
          </div>
        </div>
        <Heading className="text-center mt-2 text-5xl !leading-[120%] mb-10 max-w-[550px] w-full" >A Glimpse Into Our Pizza World</Heading>
        <div className="flex xl:flex-row flex-col items-center md:gap-6 gap-4">
          <div className="xl:flex hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
            {
              GALLERY_DATA.slice(0, 2).map((image, i) => (
                <img className='object-cover rounded-xl' key={i} src={image} alt="image" />
              ))
            }
          </div>
          <div className="flex items-center md:gap-6 gap-4 w-full flex-col max-w-[558px]">
            {
              GALLERY_DATA.slice(2, 3).map((image, i) => (
                <img className='object-cover rounded-xl' key={i} src={image} alt="image" />
              ))
            }
            <div className="xl:flex hidden justify-center items-center w-full md:gap-6 gap-4">
              {
                GALLERY_DATA.slice(3, 5).map((image, i) => (
                  <img className='object-cover rounded-xl w-full h-auto' key={i} src={image} alt="image" />
                ))
              }
            </div>
          </div>
          <div className="xl:flex hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
            {
              GALLERY_DATA.slice(5, 8).map((image, i) => (
                <img className='object-cover rounded-xl' key={i} src={image} alt="image" />
              ))
            }
          </div>
          <div className="max-sm:hidden flex xl:hidden justify-center items-center w-full md:gap-6 gap-4">
            {
              GALLERY_DATA.slice(3, 5).map((image, i) => (
                <img className='object-cover rounded-xl' key={i} src={image} alt="image" />
              ))
            }
          </div>
          <div className="flex sm:hidden justify-center items-center w-full md:gap-6 gap-4">
            {
              GALLERY_DATA.slice(3, 4).map((image, i) => (
                <img className='object-cover w-full rounded-xl' key={i} src={image} alt="image" />
              ))
            }
          </div>
          <div className="flex md:gap-6 gap-4 justify-center items-center">
            <div className="flex xl:hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
              {
                GALLERY_DATA.slice(0, 2).map((image, i) => (
                  <img className='object-cover rounded-xl' key={i} src={image} alt="image" />
                ))
              }
            </div>
            <div className="flex xl:hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
              {
                GALLERY_DATA.slice(5, 8).map((image, i) => (
                  <img className='object-cover rounded-xl' key={i} src={image} alt="image" />
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default OurGallery

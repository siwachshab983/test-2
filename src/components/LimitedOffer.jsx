import React from 'react';
import { LIMITEDOFFER_DATA } from '../utils/helper';
import Button from './common/Button';
import cloudImg from '../assets/images/png/cloud-image.png'
import singleCloudImg from '../assets/images/png/single-cloud-image.png'
import tomatoImg from '../assets/images/png/tomato-img.png'
import Container from './common/Container';

const LimitedOffer = () => {
  return (
    <>
      <div className="px-4 py-10 sm:py-17 md:py-25 relative">
        <Container>
          <div className="flex max-lg:flex-wrap gap-6 items-center">
            {LIMITEDOFFER_DATA.map((item, index) => (
              <div data-aos="fade-up" className="max-w-[700px] mx-auto lg:max-w-[558px] relative w-full min-h-[319px] pl-4 sm:pl-8 py-4 sm:py-[63px] rounded-xl bg-[url(./assets/images/png/limited-offer-bg-img.png)] bg-cover bg-center bg-no-repeat" key={index}>
                <div className="z-1 relative max-w-max">
                  <h5 className='text-xl sm:text-[28px] leading-[160%] text-prime-gradient'>Delicious</h5>
                  <h2 className='text-white text-[28px] sm:text-4xl font-semibold leading-[160%]'>{item.title}</h2>
                  <p className='sm:text-xl leading-[160%] text-[#E9E9E9]'>Limited Time</p>
                  <Button className="!py-2.5 !px-4 !leading-[22px] mt-2 sm:mt-4" >Order Now</Button>
                </div>
                <img className='pointer-events-none sm:absolute max-sm:ml-auto right-0 bottom-0 max-sm:max-w-[250px]' src={item.img} alt="pizza-img" />
                <div className="absolute top-23 sm:top-[7px] right-2 sm:right-[49px]">
                  <img className='pointer-events-none sm:flex hidden' src={cloudImg} alt="cloud-img" />
                  <img className='pointer-events-none flex sm:hidden' src={singleCloudImg} alt="cloud-img" />
                  <div className="absolute top-5 sm:top-[27px] right-8 sm:right-[35px]">
                    <p className='text-white text-center leading-[160%]'>{item.text}</p>
                    <p className='uppercase text-2xl text-center leading-[140%] text-white'>{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <img className='pointer-events-none absolute -right-[235px] sm:flex hidden md:w-[409px] w-[350px] -bottom-[159px] opacity-60' src={tomatoImg} alt="tomatoImg" />
        </Container>
      </div>
    </>
  )
}

export default LimitedOffer
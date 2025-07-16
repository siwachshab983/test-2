import React from 'react';
import Heading from './common/Heading';
import Description from './common/Description';
import Button from './common/Button';
import { BESTSELLER_DATA } from '../utils/helper';
import { Line } from '../utils/icon';
import Container from './common/Container';

const BestSellers = () => {
  return (
    <>
      <div className="px-5 py-[50px] md:py-25 bg-[url(./assets/images/png/best-seller-bg-img.png)] bg-no-repeat bg-cover bg-center">
        <Container>
          <div className=" flex justify-center items-center gap-1.5">
            <div className="">
              <Line />
            </div>
            <h4 className='text-prime-gradient text-lg font-bold leading-[22px]'>Best Sellers</h4>
            <div className=" rotate-[180deg]">
              <Line />
            </div>
          </div>
          <Heading className="text-center pt-2 text-5xl !leading-[120%]" >Pizzas You Can’t Say No To</Heading>
          <Description className="text-[#373737] text-center pt-4">Tried, tested, and totally loved. These pizzas are always a crowd favorite.</Description>
          <div className="pt-[125px] flex-wrap justify-center flex gap-x-6 gap-y-20">
            {BESTSELLER_DATA.map((item, index) => (
              <div data-aos="fade-up" className="max-w-[267px] relative bg-off-white border border-[#0000000F] rounded-bl-xl rounded-tr-xl p-6 " key={index}>
                <img className='pointer-events-none absolute transform -top-[21%] -translate-x-1/2 left-1/2' src={item.img} alt="pizza-img" />
                <div className="flex justify-center pt-[61px]">
                  <h3 className='text-prime-gradient font-semibold text-[32px] leading-[140%]'>{item.price}</h3>
                </div>
                <p className="font-semibold text-black text-[28px] pt-[2px] text-center leading-[140%] whitespace-nowrap">{item.title}</p>
                <p className='leading-[26px] text-unmuted-gray text-center pt-[2px]'>{item.description}</p>
                <div className="flex justify-center mt-3">
                  <Button className="px-[16.5px] !py-2.5" >Order Now</Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}

export default BestSellers
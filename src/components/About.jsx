import React from 'react'
import Heading from './common/Heading';
import Description from './common/Description';
import chefImg from '../assets/images/png/chef-img.png'
import { ABOUT_US_CARDS_DATA } from '../utils/helper';
import pizzaSlice from '../assets/images/png/pizza-slice.png';
import { SingleLineSvg } from '../utils/icon';
const AboutUs = () => {
    return (
        <>
            <div className="px-5 bg-[url(./assets/images/png/best-seller-bg-img.png)] bg-no-repeat bg-cover bg-center pt-15 md:pt-25 pb-[49px] relative">
                <img className='absolute pointer-events-none left-0 bottom-0 max-xl:w-full max-xl:max-w-[150px] animate-bounce' src={pizzaSlice} alt="pizza-slice" />
                <div className="max-w-[1114px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between lg:min-h-[637px]">
                        <div className="lg:max-w-[558px]">
                            <div className="flex items-center gap-1.5">
                                <h4 className='text-prime-gradient text-lg font-bold leading-[22px]'>About</h4>
                                <SingleLineSvg/>
                            </div>
                            <Heading className="pt-2 text-5xl !leading-[120%]" >Welcome to the Nest</Heading>
                            <ul className='list-disc lg:max-w-[558px] ml-6 pt-4'>
                                <li><Description className="text-[#4D4D4D]"  >At PizzaNest, we believe that pizza is more than just food — it’s an emotion, a celebration, and comfort all rolled into one delicious slice. Founded with a passion for real ingredients and big flavors, we set out to bring handcrafted, oven-fresh pizzas to every corner of India.</Description></li>
                                <li className='pt-3'><Description className="text-[#4D4D4D]" >Whether you're craving spicy paneer, a creamy cheese burst, or a fully loaded custom pizza made your way, we've got you covered. Each pizza is baked with love, topped with the freshest veggies, premium cheese, and authentic sauces — all delivered hot and fast, right to your doorstep.</Description></li>
                            </ul>
                            <div className="flex flex-wrap mt-6 gap-4 sm:gap-6 lg:max-h-[135px] max-lg:justify-center">
                                {ABOUT_US_CARDS_DATA.map((item, index) => (
                                    <div className={`${index === 1 ? "sm:mt-3" : ""}`}>
                                        <div key={index} className="bg-[#FEFEFE] border w-full min-w-[160px] sm:max-w-[170px] sm:min-w-[170px] p-3 sm:p-4.5 shadow-[0px_1px_7px_0px_#F67A211F] rounded-xl border-dashed">
                                            <div className="bg-[#FCECE2] size-[52px] mx-auto rounded-full flex justify-center items-center">{<item.img />}</div>
                                            <p className='leading-[160%] text-center whitespace-nowrap text-[#474747] pt-2'>{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <img className='lg:max-h-[597px] pointer-events-none max-w-[383px] w-full mt-4' src={chefImg} alt="man-img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
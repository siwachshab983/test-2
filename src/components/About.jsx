import React from 'react'
import Heading from './common/Heading';
import Description from './common/Description';
import chefImg from '../assets/images/png/chef-img.png'
import { ABOUT_US_CARDS_DATA } from '../utils/helper';
import pizzaSlice from '../assets/images/png/pizza-slice.png';
import cardBgImg from '../assets/images/png/about-bg-img.png';
import { Line, SingleLineSvg } from '../utils/icon';
const AboutUs = () => {
    return (
        <>
            <div id='about-us' className="px-5 bg-[url(./assets/images/png/best-seller-bg-img.png)] bg-no-repeat bg-cover bg-center py-[50px] md:pt-25 md:pb-[49px] relative">
                <img className='absolute pizza-cheese pointer-events-none md:flex hidden left-0 bottom-0 max-xl:w-full max-xl:max-w-[100px]' src={pizzaSlice} alt="pizza-slice" />
                <div className="max-w-[1114px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between lg:min-h-[637px]">
                        <div className="lg:max-w-[558px]">
                            <div className="sm:flex hidden items-center gap-1.5">
                                <h4 className='text-prime-gradient text-lg font-bold leading-[22px]'>About Us</h4>
                                <SingleLineSvg />
                            </div>
                            <div className=" flex sm:hidden justify-center items-center gap-1.5">
                                <div>
                                    <Line />
                                </div>
                                <h4 className='text-prime-gradient text-lg font-bold leading-[22px]'>About Us</h4>
                                <div className=" rotate-[180deg]">
                                    <Line />
                                </div>
                            </div>
                            <Heading className="pt-2 text-custom-3xl md:text-5xl sm:text-4xl !leading-[120%] sm:text-start text-center" >Welcome to the Nest</Heading>
                            <ul className='list-disc lg:max-w-[558px] ml-6 pt-4 sm:text-start text-center'>
                                <li><Description className="text-dark-gray"  >At PizzaNest, we believe that pizza is more than just food — it’s an emotion, a celebration, and comfort all rolled into one delicious slice. Founded with a passion for real ingredients and big flavors, we set out to bring handcrafted, oven-fresh pizzas to every corner of India.</Description></li>
                                <li className='pt-3'><Description className="text-dark-gray" >Whether you're craving spicy paneer, a creamy cheese burst, or a fully loaded custom pizza made your way, we've got you covered. Each pizza is baked with love, topped with the freshest veggies, premium cheese, and authentic sauces — all delivered hot and fast, right to your doorstep.</Description></li>
                            </ul>
                            <div className="flex flex-wrap mt-6 gap-4 sm:gap-6 lg:max-h-[135px] max-lg:justify-center">
                                {ABOUT_US_CARDS_DATA.map((item, index) => (
                                    <div data-aos="fade-up" className={`${index === 1 ? "sm:mt-3" : ""} group `} key={index}>
                                        <div className="bg-off-white w-full min-w-[160px] group-hover:scale-105 group-hover:-translate-y-3 !duration-300 sm:max-w-[170px] sm:min-w-[170px] p-3 sm:p-4.5 shadow-[0px_1px_7px_0px_#F67A211F] relative rounded-xl">
                                            <div className="bg-[#FCECE2] relative z-10 size-[52px] mx-auto rounded-full flex justify-center items-center">{<item.img />}</div>
                                            <p className='leading-[160%] relative z-10 text-center whitespace-nowrap text-[#474747] pt-2'>{item.title}</p>
                                            <img className='pointer-events-none absolute top-0 right-0 w-full h-full' src={cardBgImg} alt="cardBgImg" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <img className='lg:max-h-[597px] pointer-events-none lg:max-w-[383px] sm:max-w-[325px] max-w-[250px] w-full lg:mt-1 mt-5 ' src={chefImg} alt="man-img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
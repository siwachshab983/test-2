import React, { useState } from "react";
import { MENU_DATA } from "../utils/helper.js";
import Button from "./common/Button.jsx";
import Container from './common/Container.jsx'
import { Line, RatingSvg } from "../utils/icon.jsx";
import Heading from "./common/Heading.jsx";
import pizzaSlice from "../assets/images/png/pizza-slice-2.png";

const categories = ["All", "Veg Pizzas", "Non-Veg Pizzas", "Combos & Drinks", "Sides & Dips"];

const OurMenu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const getTitleKey = (category) => {
    switch (category) {
      case "All": return "title1";
      case "Veg Pizzas": return "title2";
      case "Non-Veg Pizzas": return "title3";
      case "Combos & Drinks": return "title4";
      case "Sides & Dips": return "title5";
      default: return "title1";
    }
  };

  const titleKey = getTitleKey(activeCategory);

  return (
    <div className="px-5 py-[50px] md:py-25 relative">
      <Container className={'flex justify-center items-center flex-col'}>
        <div className=" flex justify-center items-center gap-1.5">
          <div className="">
            <Line />
          </div>
          <h4 className='text-prime-gradient text-lg font-bold leading-[22px]'>Our Menu</h4>
          <div className=" rotate-[180deg]">
            <Line />
          </div>
        </div>
        <Heading className="text-center mt-2 text-5xl !leading-[120%] mb-10 max-w-[550px] w-full" >Explore Flavours, Pick Your Cravings</Heading>
        <div className="flex flex-wrap justify-center gap-6 mb-10 w-full">
          {categories.map((category, i) => (
            <Button
              key={i}
              onClick={() => setActiveCategory(category)}
              className={`!px-5 !py-[9px] max-w-[170px] !leading-[22px] w-full rounded-full border
    ${activeCategory === category
                  ? "bg-prime text-white border-transparent"
                  : "!bg-none !bg-white !text-light-gray !border-light-gray"
                }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {MENU_DATA.map((item, i) => (
            <div data-aos="fade-up" key={i}>
              <img className="object-cover pointer-events-none w-full" src={item.image} alt="pizza" />
              <div className="max-w-[324px] p-5 mx-auto w-full bg-white border border-black/10 rounded-[8px] -translate-y-[29px] flex flex-col justify-center items-center">
                <p className="text-prime-gradient text-2xl font-semibold leading-[34px] text-center">{item.price}</p>
                <h4 className="text-2xl font-semibold text-center leading-[34px] text-black my-0.5">
                  {item[titleKey]}
                </h4>
                <p className="text-base text-unmuted-gray leading-[160%] text-center px-2 mb-1">{item.desc}</p>
                <RatingSvg />
              </div>
            </div>
          ))}

        </div>
        <Button className={'mt-[3px] !leading-[22px]'}>View More</Button>
      </Container>
      <img className="absolute pointer-events-none left-0 top-[30px]" src={pizzaSlice} alt="" />
    </div>
  );
};

export default OurMenu;

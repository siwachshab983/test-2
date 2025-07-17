import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Container from "./common/Container";
import Heading from "./common/Heading";
import { LeftArrow, Line2, RightArrow } from "../utils/icon";
import pizzaImg from "../assets/images/png/testimonial-pizza-img.png";
import { TESTIMONIAL_AVATAR, TESTIMONIAL_DATA } from "../utils/helper";
import Button from "./common/Button";
import Description from "./common/Description";

const Testimonial = () => {
  const [activeAvatar, setActiveAvatar] = useState(1);

  return (
    <div id="testimonial" className="relative px-5 py-[50px] md:py-25 bg-[url(./assets/images/png/best-seller-bg-img.png)] bg-no-repeat bg-cover bg-center">
      <Container className={'relative'}>
        <div className=" flex justify-center items-center gap-1.5">
          <div className="">
            <Line2 />
          </div>
          <h4 className='text-prime-gradient text-lg font-bold leading-[22px]'>Testimonial</h4>
          <div className=" rotate-[180deg]">
            <Line2 />
          </div>
        </div>
        <Heading className={'font-semibold text-custom-3xl md:text-5xl sm:text-4xl  text-center mx-auto max-w-[569px] !leading-[120%]  mt-2 mb-15'}>What Our Customers Say</Heading>

        <div className="flex flex-col md:flex-row max-lg:justify-center max-lg:items-center relative gap-10">
          <div className="relative w-full max-w-[523px] sm:ml-[37px] sm:pb-[76px] pb-10 ">
            <img
              src={pizzaImg}
              alt="Pizza"
              className="w-full sm:flex hidden rounded-xl pointer-events-none object-cover "
            />
            <div className="sm:absolute left-[-36px] top-[145px] flex sm:flex-col max-sm:w-full justify-center  items-center size-[74px] gap-3">
              {TESTIMONIAL_AVATAR.map((avatar, i) => (
                <img
                  key={i}
                  src={avatar}
                  alt={`avatar-${i}`}
                  onClick={() => setActiveAvatar(i)}
                  className={`cursor-pointer rounded-full transition-all duration-300 ${i === activeAvatar ? 'sm:size-[74px] size-25' : 'sm:size-15 size-20'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:absolute bottom-0 right-0 max-lg:mt-4 bg-[url(./assets/images/png/testimonial-slider-bg-img.png)] bg-no-repeat bg-cover bg-center ">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: ".nextBtn",
              prevEl: ".prevBtn",
            }}

            className="shadow-[0px_4px_15.4px_0px_#0000000F] bg-white rounded-xl  lg:max-w-[680px] max-[455px]:min-h-[360px] min-h-[310px] sm:min-h-[298px]">
            {TESTIMONIAL_DATA.map((item, index) => (
              <SwiperSlide className="p-4 md:p-6" key={index}>
                <div className="md:text-start text-center" >
                  <Description className="text-mud-gray max-[380px]:!text-sm">{item.text}</Description>
                  <h3 className='text-2xl leading-[140%] font-semibold pt-4'>{item.name}</h3>
                  <Description className="text-mud-gray pt-[2px]">{item.role}</Description>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center absolute z-10 bottom-6 md:left-6 mt-6 gap-1 left-1/2 max-md:-translate-x-1/2">
            <Button className="prevBtn hover:!bg-none group hover:!bg-light-white hover:!scale-100 !rounded-[4px] border !px-[15px] !py-3.5 flex items-center justify-center transition">
              <RightArrow />
            </Button>
            <Button className="nextBtn hover:!bg-none group hover:!bg-light-white hover:!scale-100 !rounded-[4px] text-white flex items-center justify-center !px-[15px] !py-3.5 transition">
              <LeftArrow />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;

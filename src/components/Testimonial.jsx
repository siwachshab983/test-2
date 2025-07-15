import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Container from "./common/Container";
import Heading from "./common/Heading";
import { LeftArrow, Line, RightArrow } from "../utils/icon";
import pizzaImg from "../assets/images/png/testimonial-pizza-img.png";
import { TESTIMONIAL_AVATAR } from "../utils/helper";
import Button from "./common/Button";
import Description from "./common/Description";

const testimonials = [
  {
    text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
    name: "Aarav Mehta",
    role: "Software Developer",
  },
  {
    text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
    name: "Aarav Mehta",
    role: "Software Developer",
  },
  {
    text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
    name: "Aarav Mehta",
    role: "Software Developer",
  },
];

const Testimonial = () => {
  const [activeAvatar, setActiveAvatar] = useState(1);

  return (
    <div className="relative px-5 py-25 bg-[url(./assets/images/png/best-seller-bg-img.png)] bg-no-repeat bg-cover bg-center">
      <Container className={'relative'}>
        <div className=" flex justify-center items-center gap-1.5">
          <div className="">
            <Line />
          </div>
          <h4 className='text-prime-gradient text-lg font-bold leading-[22px]'>Testimonial</h4>
          <div className=" rotate-[180deg]">
            <Line />
          </div>
        </div>
        <Heading className={'font-semibold text-[48px] text-center mx-auto max-w-[569px] !leading-[120%]  mt-2 mb-15'}>What Our Customers Say</Heading>

        <div className="flex flex-col md:flex-row max-lg:justify-center max-lg:items-center relative gap-10">
          {/* Left: Image & Avatars (Static) */}
          <div className="relative w-full max-w-[523px] sm:ml-[37px] sm:pb-[76px] pb-10 ">
            <img
              src={pizzaImg}
              alt="Pizza"
              className="w-full sm:flex hidden rounded-xl object-cover "
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
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={{
            nextEl: ".nextBtn",
            prevEl: ".prevBtn",
          }}
          className="lg:!absolute bottom-0 right-0 max-w-[680px] w-full"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg p-6 w-full relative">
                <Description className="text-gray-700 mb-4 !leading-[26px]">{item.text}</Description>
                <h4 className="font-semibold text-2xl text-black mt-4 mb-0.5">{item.name}</h4>
                <p className="text-base leading-[26px] mb-6">{item.role}</p>
                <div className="flex items-center gap-1 ">
                  <Button className="prevBtn hover:!bg-none group hover:!bg-[#EEEEEE] !rounded-[4px] border !px-[15px] !py-3.5 flex items-center justify-center transition">
                    <RightArrow />
                  </Button>
                  <Button className="nextBtn hover:!bg-none group hover:!bg-[#EEEEEE] !rounded-[4px] text-white flex items-center justify-center !px-[15px] !py-3.5 transition">
                    <LeftArrow />
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonial;

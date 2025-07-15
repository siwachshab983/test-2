import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Container from "./common/Container";

const testimonials = [
  {
    image: "https://source.unsplash.com/400x400/?paneer-pizza",
    text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
    name: "Aarav Mehta",
    role: "Software Developer",
    avatars: [
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/women/3.jpg",
    ],
  },
  {
    image: "https://source.unsplash.com/400x400/?paneer-pizza",
    text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
    name: "Aarav Mehta",
    role: "Software Developer",
    avatars: [
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/women/3.jpg",
    ],
  },
  {
    image: "https://source.unsplash.com/400x400/?paneer-pizza",
    text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
    name: "Aarav Mehta",
    role: "Software Developer",
    avatars: [
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/women/3.jpg",
    ],
  },
  // Add more testimonial objects here as needed
];

const Testimonial = () => {
  return (
    <div className="relative px-5 py-25 bg-[url(./assets/images/png/best-seller-bg-img.png)] bg-no-repeat bg-cover bg-center">
      <Container>
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold text-sm">Testimonial</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            What Our Customers Say
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left: Image & Avatars (Static) */}
          <div className="relative">
            <img
              src={testimonials[0].image}
              alt="Pizza"
              className="w-[300px] md:w-[360px] rounded-xl object-cover"
            />
            <div className="absolute left-[-36px] top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {testimonials[0].avatars.map((avatar, i) => (
                <img
                  key={i}
                  src={avatar}
                  alt={`avatar-${i}`}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                />
              ))}
            </div>
          </div>

          {/* Right: Swiper for Text Only */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".nextBtn",
              prevEl: ".prevBtn",
            }}
            className="relative max-w-xl w-full"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 w-full relative">
                  <p className="text-gray-700 mb-4 leading-relaxed">{item.text}</p>
                  <h4 className="font-semibold text-lg text-black">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>

                  {/* Navigation Arrows */}
                  <div className="absolute bottom-6 right-6 flex items-center gap-3">
                    <button className="prevBtn w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">

                    </button>
                    <button className="nextBtn w-8 h-8 rounded-md bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition">

                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;

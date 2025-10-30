import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Indian Spices & Flavors",
    img: "https://cdn.pixabay.com/photo/2022/10/07/15/46/indian-spices-7505383_1280.jpg",
  },
  {
    id: 2,
    title: "Fruits & Vegetables",
    img: "https://cdn.pixabay.com/photo/2015/12/16/03/34/fruit-1095331_1280.jpg",
  },
  {
    id: 3,
    title: "Natural Products",
    img: "./images/honey.jpg",
  },
];

export default function FullscreenSwiper() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Prevent unwanted horizontal scroll */}
      <div className="absolute inset-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Slide Content */}
                 <div className="relative z-10 text-center text-white px-6 max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                    {slide.title}
                  </h2>
                 {/*<div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-full transition">
                     Learn More 
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 text-white font-medium px-6 py-3 rounded-full transition">
                      Explore
                    </button>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

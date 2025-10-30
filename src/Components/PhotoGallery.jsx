import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function BentoGallery() {
  // Image sets for each block
  const galleries = {
    hero: ["./images/photo7.jpg", "./images/photo13.jpg", "./images/photo9.jpg"],
    chilli: ["./images/photo8.jpg", "./images/photo3.jpg", "./images/photo6.jpg"],
    onion: ["./images/photo3.jpg", "./images/photo10.jpg", "./images/photo3.jpg"],
    pomegranate: ["./images/photo4.jpg", "./images/POMEGRANATE_page_1.jpg", "./images/photo.12jpg"],
  };

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-600 text-center mb-8 md:mb-12">
          Veda Global Moments
        </h2>

        {/* Bento Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-3 sm:gap-4 
            auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[300px]
          "
        >
          {/* Big Hero Slider */}
          <div className="sm:col-span-2 sm:row-span-2 relative overflow-hidden rounded-2xl shadow-lg">
            <Swiper
              modules={[Autoplay]}
              direction="horizontal"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={1200}
              className="w-full h-full"
            >
              {galleries.hero.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt="Hero Gallery"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition"></div>
          </div>

          {/* Red Chilli Slider - Vertical */}
          <div className="relative overflow-hidden rounded-2xl shadow-md">
            <Swiper
              modules={[Autoplay]}
              direction="vertical"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={1000}
              className="w-full h-full"
            >
              {galleries.chilli.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt="Red Chilli"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Onion Slider - Reverse horizontal */}
          <div className="relative overflow-hidden rounded-2xl shadow-md">
            <Swiper
              modules={[Autoplay]}
              direction="horizontal"
              autoplay={{
                delay: 2800,
                reverseDirection: true,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={1000}
              className="w-full h-full"
            >
              {galleries.onion.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt="Onion"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Pomegranate Slider - Fade Effect */}
          <div className="sm:col-span-2 relative overflow-hidden rounded-2xl shadow-md">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{
                delay: 3200,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={1200}
              className="w-full h-full"
            >
              {galleries.pomegranate.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt="Pomegranate"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

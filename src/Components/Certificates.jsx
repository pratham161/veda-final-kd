import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const certificates = [
  { id: 1, img: "./certificates/1.jpg" },
  { id: 2, img: "./certificates/2.jpg" },
  { id: 3, img: "./certificates/cert1.jpg" },
  { id: 4, img: "./certificates/cert2.jpg" },
  { id: 5, img: "./certificates/cert3.jpg" },
  { id: 5, img: "./certificates/cert4.jpg" },
  { id: 5, img: "./certificates/cert5.jpg" },
  { id: 5, img: "./certificates/cert6.jpg" },
];

export default function CenteredCertificateSlider() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 mb-20">
      {/* Slider container */}
      <div className="w-full sm:w-1/2 h-full">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-600 text-center mb-8 md:mb-12">
          Our Certificates
        </h2>
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
          className="w-full h-full"
        >
          {certificates.map((cert) => (
            <SwiperSlide key={cert.id}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${cert.img})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

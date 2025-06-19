"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

import HeroText from "./HeroText";

const slides = [
  "/carousel1.jpg",
  "/carousel2.jpg",
  "/carousel3.jpg",
  "/carousel4.jpg",
  "/carousel5.jpg",
  "/carousel7.jpg",
];

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Swiper background with lower z-index */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        className="h-full z-0"
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-screen">
              <Image
                src={src}
                alt={`Slide ${idx}`}
                fill
                className="object-cover opacity-30"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Text Overlay with higher z-index */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <HeroText />
      </div>
    </div>
  );
}

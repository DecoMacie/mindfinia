import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SliderServicesOffer.css";

// import required modules
import { Pagination } from "swiper/modules";
import CardServices from "../tools/CardServices";

export default function SliderServicesOffer({ servicesOffer }) {
  return (
    <div className="swiper-container">
      <div className="my-5 syneFont text-center text-xl md:text-4xl text-neutral-800">
        <h3 className="font-semibold">Services we offer</h3>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardServices servicesOffer={servicesOffer} index={0} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <CardServices servicesOffer={servicesOffer} index={1} />
        </SwiperSlide>
        <SwiperSlide>
          <CardServices servicesOffer={servicesOffer} index={2} />
        </SwiperSlide>
        <SwiperSlide>
          <CardServices servicesOffer={servicesOffer} index={3} />
        </SwiperSlide>
        <SwiperSlide>
          <CardServices servicesOffer={servicesOffer} index={4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

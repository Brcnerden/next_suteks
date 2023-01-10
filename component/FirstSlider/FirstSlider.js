import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FS } from "./FirstSlider.styled";

// import required modules
import { Pagination } from "swiper";

import Image from "next/image";
import womanImage from "../../Images/womanShoulder.jpg";
import smileWoman from "../../Images/smileWoman.jpg";
import clothing from "../../Images/clothing.jpg";

export default function FirstSlider() {
  return (
    <FS.Slider>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={womanImage}
            alt="womanShoulder"
            sizes="(max-width:1440px) 100vw"
            width={1640}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={smileWoman}
            alt="smileWoman"
            sizes="(max-width:1440px) 100vw"
            width={1640}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={clothing}
            alt="clothing"
            sizes="(max-width:1440px) 100vw"
            width={1640}
            height={500}
          />
        </SwiperSlide>
      </Swiper>
    </FS.Slider>
  );
}

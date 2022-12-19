import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import Slider from "../Slider/slider";
import ArrowSliderL from "../svg/ArrowSliderL";
import ArrowSliderR from "../svg/ArrowSliderR";
import { Navigation } from "swiper";

import { B } from "./Box.styles";
import ArrowButton from "../ArrowButton/ArrowButton";

const Box = () => {
  return (
    <B.Box>
      <Swiper
        autoHeight
        spaceBetween={20}
        slidesPerView={1}
        modules={[Navigation]}
        navigation
      >
        <SwiperSlide>
          <Slider
            title="Suteks helped us become the strong and consistent brand that we are today by improving through clear and honest communication."
            name="King Louie, The Netherlands"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            title="“Refinement, precision, technical skills, personal attention and very welcoming staff together with transparent communication and planning are the keywords I can think for Suteks”"
            name="Rotate / Remain, Birger Christensen"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            title="“Refinement, precision, technical skills, personal attention and very welcoming staff together with transparent communication and planning are the keywords I can think for Suteks”"
            name="Rotate / Remain, Birger Christensen"
          />
        </SwiperSlide>
        <ArrowButton />
        <ArrowButton isNext />
      </Swiper>
    </B.Box>
  );
};
export default Box;

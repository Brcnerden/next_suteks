import ArrowSliderR from "../svg/ArrowSliderR";
import ArrowSliderL from "../svg/ArrowSliderL";
import { useSwiper } from "swiper/react";
import { A } from "./ArrowButton.styled";

const ArrowButton = ({ isNext }) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (isNext) swiper.slideNext();
    else swiper.slidePrev();
  };

  return (
    <A.Button isNext={isNext} onClick={handleClick}>
      {isNext ? <ArrowSliderR /> : <ArrowSliderL />}
    </A.Button>
  );
};

export default ArrowButton;

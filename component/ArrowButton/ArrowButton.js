import ArrowSliderR from "../svg/ArrowSliderR";
import ArrowSliderL from "../svg/ArrowSliderL";
import { useSwiper } from "swiper/react";

const ArrowButton = ({ isNext }) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (isNext) swiper.slideNext();
    else swiper.slidePrev();
  };

  return (
    <button onClick={handleClick}>
      {isNext ? <ArrowSliderR /> : <ArrowSliderL />}
    </button>
  );
};

export default ArrowButton;

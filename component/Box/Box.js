import Slider from "../Slider/slider";
import ArrowSliderL from "../svg/ArrowSliderL";
import ArrowSliderR from "../svg/ArrowSliderR";

import { B } from "./Box.styles";
const Box = () => {
  return (
    <B.Box>
      <B.BoxText>
        <ArrowSliderR />
        <Slider
          title="Suteks helped us become the strong and consistent brand that we are today by improving through clear and honest communication."
          name="King Louie, The Netherlands"
        />
        <ArrowSliderL />
      </B.BoxText>
    </B.Box>
  );
};

export default Box;

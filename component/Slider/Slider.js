import Text from "../Text/Text";
import { S } from "./Slider.styles";

const Slider = ({ title, name }) => {
  return (
    <S.Slider>
      <Text fontFamily="oggRegular" size="lm" as="h3">
        {title}
      </Text>

      <Text as="p">{name}</Text>
    </S.Slider>
  );
};

export default Slider;

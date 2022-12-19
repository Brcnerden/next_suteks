import Text from "../Text/Text";
import { S } from "./Slider.styles";

const Slider = ({ title, name }) => {
  return (
    <S.Slider>
      <Text fontFamily="oggRegular" size="lm" as="h3">
        {title}
      </Text>
      <S.Name>
        <span />
        <Text as="p">{name}</Text>
      </S.Name>
      <button>READ MORE</button>
    </S.Slider>
  );
};

export default Slider;

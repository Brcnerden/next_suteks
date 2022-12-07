import Text from "../Text/Text";
import { G } from "./GetTouch.styled";
import Arrow from "../svg/Arrow";

const GetTouch = () => {
  return (
    <G.Touch>
      <Text textColor="blue$500" size="lm" as="h3">
        Get in Touch
      </Text>
      <Text fontFamily="avertaRegular" size="md" as="p">
        If you have any questions or inquiries please feel free to contact us.
      </Text>
      <button>
        <G.Arrow>
          CONTACT US
          <Arrow />
        </G.Arrow>
      </button>
    </G.Touch>
  );
};

export default GetTouch;

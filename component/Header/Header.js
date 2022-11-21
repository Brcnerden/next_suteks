import Link from "next/link";
import Image from "next/image";

import { H } from "./Header.styled";

import Text from "../Text/Text";
import Logo from "../../Images/Vector (3).png";
import LinkedinLogo from "../svg/LinkedinLogo";
import InstagramLogo from "../svg/InstagramLogo";
import FooterLogo from "../svg/FooterLogo";

const Header = ({ isMenuOpen, setState }) => {
  const clickButton = () => setState(!isMenuOpen);

  return (
    <H.Header isMenuOpen={isMenuOpen}>
      <Image src={Logo} alt="logo" />
      <H.Button isMenuOpen={isMenuOpen} onClick={clickButton}>
        B
      </H.Button>

      <div>
        <ul>
          <Link href="#">
            <li>ABOUT US</li>
          </Link>
          <Link href="#">
            <li>OUR WORK</li>
          </Link>
          <Link href="#">
            <li>OUR VALUES</li>
          </Link>
          <Link href="#">
            <li>GENDER EQUALITY</li>
          </Link>
          <Link href="#">
            <li>TESTIMONIALS</li>
          </Link>
          <Link href="#">
            <li>CONTACT US</li>
          </Link>
        </ul>
        <H.Footer>
          <Text fontFamily="Averta-Regular" as="span">
            Follow us:
          </Text>
          <LinkedinLogo />
          <InstagramLogo />
          <FooterLogo />
        </H.Footer>
      </div>
    </H.Header>
  );
};

export default Header;

import Link from "next/link";
import { H } from "./Header.styled";

const Header = () => {
  return (
    <H.Header>
      <img src="./Images/Vector (3).png" alt="logo" />

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
    </H.Header>
  );
};

export default Header;

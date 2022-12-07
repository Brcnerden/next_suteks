import L from "./Footer.styled";
import Text from "../Text/Text";
import COLORS from "../../theme/colors";
const Footer = () => {
  return (
    <L.Header>
      <img src="./Images/Vector (4).png" alt="logo" />
      <L.Text className="AboutUs">
        <div>
          <div>ABOUT US</div>
          <p>
            Our Mission
            <br />
            Our Story
            <br />
            History
            <br />
            Stories from our Team
          </p>
        </div>
      </L.Text>

      <L.Text className="OurWork">
        <div>
          <div>Our Work</div>
          <p>
            Garment Production
            <br />
            Fabric Dev. & Tech.
            <br />
            Quality Assurance
            <br />
            Certifications
          </p>
        </div>
      </L.Text>
      <L.Text>
        <div>
          <div>OUR VALUES</div>
          <p>
            Sustainability
            <br />
            Gender Equality
            <br />
            Human Resources & Ethics
            <br />
            Awards
          </p>
        </div>
      </L.Text>
      <L.Text>
        <div>
          <br />
          <br />
          <br />
          <br />
          <div>SUTEKS HQ, TURKEY</div>
          <Text textColor="gray$500" as="p">
            Kemerburgaz Cad. No:16
            <br /> 34406 Kagithane, Istanbul / Turkey
            <br />
            +90 (212) 294 09 09 <br /> sales@suteks.com.tr
            <br />
            <br /> Job Applications <br /> hr@suteks.com.tr
          </Text>
        </div>
      </L.Text>

      <L.Text>
        <div>
          <div>NEW YORK ,USA</div>
          <p>
            Paillette <br /> 1123 Broadway, Suite 305 <br /> New York, NY 10010
            <br />
            info@paillette.us <br />
          </p>
        </div>
      </L.Text>
    </L.Header>
  );
};

export default Footer;

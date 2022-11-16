import L from "./Footer.styled";

const Footer = () => {
  return (
    <L.Header>
      <img src="./Images/Vector (4).png" alt="logo" />
      <L.Text>
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

      <L.Text>
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
    </L.Header>
  );
};

export default Footer;

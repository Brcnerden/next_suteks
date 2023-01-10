import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import L from "./Layout.styled";
import Text from "../Text/Text";

import React, { useState } from "react";
import GetTouch from "../Touch/GetTouch";
import Box from "../Box/Box";
import FirstSlider from "../FirstSlider/FirstSlider";

const Layout = ({ children }) => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <L.div isMenuOpen={isMenuOpen}>
      <Header isMenuOpen={isMenuOpen} setState={setisMenuOpen} />
      <Text fontFamily="oggRegular" textColor="black$500" size="lx" as="h2">
        A pioneer in high-end sustainable fashion manufacturing
      </Text>
      <FirstSlider />

      <div>{children}</div>
      <Box />
      <GetTouch />
      <Footer />
    </L.div>
  );
};

export default Layout;

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import L from "./Layout.styled";

import React, { useState } from "react";
import GetTouch from "../Touch/GetTouch";
import Slider from "../Slider/slider";
import Box from "../Box/Box";

const Layout = ({ children }) => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <L.div isMenuOpen={isMenuOpen}>
      <Header isMenuOpen={isMenuOpen} setState={setisMenuOpen} />
      <div>{children}</div>
      <Box />
      <GetTouch />
      <Footer />
    </L.div>
  );
};

export default Layout;

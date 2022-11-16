import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import L from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <L.div></L.div>
      <Footer />
    </div>
  );
};

export default Layout;

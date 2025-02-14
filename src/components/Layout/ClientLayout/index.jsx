import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

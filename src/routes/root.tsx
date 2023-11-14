import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

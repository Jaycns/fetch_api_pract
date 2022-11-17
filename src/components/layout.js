import React, { useContext } from "react";
import "../App.css";
import Switch from "../switch.js";
import Footer from "../footer.js";
import Scroll from "../scroll.js";
import image from "../img/jaycn-logo-black.png";
import imag from "../img/jaycn-logo-white.png";
import AppContext from "../context/context";
import Input from "../input";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const { isClick, handleClick, handleSearchClose } = useContext(AppContext);
  return (
    <div
      className={`container ${isClick ? "dark" : ""}`}
      onClick={handleSearchClose}
    >
      <Link to="/">
        <div className="image-box">
          <img
            className="image"
            src={isClick ? image : imag}
            alt="Jaycn Logo"
          />
        </div>
      </Link>
      <Input />
      <Scroll />
      <div id="home" className="box">
        <div className="holder">
          <Switch handleClick={handleClick} isClick={isClick} />
        </div>
        <main>{children}</main>
        <Footer isClick={isClick} />
      </div>
    </div>
  );
};

export default Layout;

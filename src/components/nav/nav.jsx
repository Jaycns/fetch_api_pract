import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

export default function Nav() {
  const [active, setActive] = useState("");
  const handleClick = (e) => {
    setActive(e.target.getAttribute("name"));
  };
  return (
    <div className="navigation">
      <a href="#home" onClick={handleClick}>
        <AiOutlineHome
          name="home"
          className={`icon ${active === "home" ? "active-nav" : ""}`}
        />
      </a>
      <a href="#about" onClick={handleClick}>
        <AiOutlineUser
          name="about"
          className={`icon ${active === "about" ? "active-nav" : ""}`}
        />
      </a>
      <a href="#members" onClick={handleClick}>
        <TiGroupOutline
          name="members"
          className={`icon ${active === "members" ? "active-nav" : ""}`}
        />
      </a>
      <a href="#contact" onClick={handleClick}>
        <BiMessageRoundedDots
          name="contact"
          className={`icon ${active === "contact" ? "active-nav" : ""}`}
        />
      </a>
      <a href="#footer" onClick={handleClick}>
        <BsArrowDownCircle
          name="footer"
          className={`icon ${active === "footer" ? "active-nav" : ""}`}
        />
      </a>
    </div>
  );
}

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
    setActive(e.target.name);
    console.log(active);
  };
  return (
    <div className="navigation">
      <a value="home" href="#home" onClick={handleClick}>
        <AiOutlineHome
          className={`icon ${active === "home" ? "active-nav" : ""}`}
        />
      </a>
      <a href="#about" name="about" onClick={handleClick}>
        <AiOutlineUser
          className={`icon ${active === "about" ? "active-nav" : ""}`}
        />
      </a>
      <a href="#members" name="members" onClick={handleClick}>
        <TiGroupOutline
          className={`icon ${active === "members" ? "active-nav" : ""}`}
        />
      </a>
      <a href="#contact" name="contact" onClick={handleClick}>
        <BiMessageRoundedDots
          className={`icon ${active === "contact" ? "active-nav" : ""}`}
        />
      </a>
      <a href="#footer" name="footer" onClick={handleClick}>
        <BsArrowDownCircle
          className={`icon ${active === "footer" ? "active-nav" : ""}`}
        />
      </a>
    </div>
  );
}

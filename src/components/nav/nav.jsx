import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

export default function Nav() {
  const [active, setActive] = useState(false);
  const handleClick = () => setActive(true);
  return (
    <div className="navigation">
      <a href="#home" onClick={handleClick}>
        <AiOutlineHome className={`icon ${active ? "active-nav" : ""}`} />
      </a>
      <a href="#about" onClick={handleClick}>
        <AiOutlineUser className={`icon ${active ? "active-nav" : ""}`} />
      </a>
      <a href="#members" onClick={handleClick}>
        <TiGroupOutline className={`icon ${active ? "active-nav" : ""}`} />
      </a>
      <a href="#contact" onClick={handleClick}>
        <BiMessageRoundedDots
          className={`icon ${active ? "active-nav" : ""}`}
        />
      </a>
      <a href="#footer" onClick={handleClick}>
        <BsArrowDownCircle className={`icon ${active ? "active-nav" : ""}`} />
      </a>
    </div>
  );
}


import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsMouse } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

export default function Footer({isClick}) {
  const year = new Date().getFullYear();
  return (
    <div
      id="footer"
      className={`container footer-container ${isClick ? "dark" : ""}`}
    >
      <h1>
        That's all
        <a href="#home">
          <h2>
            <BsMouse />
          </h2>
        </a>
      </h1>
      <div className={`social-links ${isClick ? "dark" : ""}`}>
        <a href="https://instagram.com/jaycn_x">
          <BsInstagram className="social" />
        </a>
        <a href="https://twitter.com/jaycn_x">
          <TiSocialTwitter className="social" />
        </a>
        <a href="https://dribble.com/Jaycn">
          <TiSocialDribbble className="social" />
        </a>
        <a href="https://github.com/Jaycns">
          <TiSocialGithub className="social" />
        </a>
        <a href="https://youtube.com">
          <TiSocialLinkedin className="social" />
        </a>
      </div>
      <p>Copyright by Jaycn ⓒ {year}</p>
    </div>
  );
}

import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="container contact-container">
      <h3>Contact me</h3>
      <div className="contact-links">
        <a href="https://twitter.com/jaycn_x" className="contact twitter">
          <AiOutlineTwitter className="icon" />
          <h2>
            Twitter <span>jaycn_x</span>
          </h2>
        </a>
        <a href="https://web.whatsapp.com/" className="contact whatsapp">
          <AiOutlineWhatsApp className="icon" />
          <h2>
            Whatsapp <span>+234 915 737 9264</span>
          </h2>
        </a>
        <a
          href="https://www.instagram.com/jaycn_x/"
          className="contact instagram"
        >
          <AiOutlineInstagram className="icon" />
          <h2>
            Instagram <span>jaycn_x</span>
          </h2>
        </a>
        <a
          href="https://gmail.com/"
          mailto="jaycnjude@gmail.com"
          className="contact mail"
        >
          <AiOutlineMail className="icon" />
          <h2>
            Mail <span>jaycnjude@gmail.com</span>
          </h2>
        </a>
        <a href="https://github.com/Jaycns" className="contact github">
          <AiOutlineGithub className="icon" />
          <h2>
            Github <span>github.com/jaycns</span>
          </h2>
        </a>
        <a href="https://dribbble.com/Jaycn" className="contact dribble">
          <AiOutlineDribbble className="icon" />
          <h2>
            Dribble<span>dribbble.com/Jaycn</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

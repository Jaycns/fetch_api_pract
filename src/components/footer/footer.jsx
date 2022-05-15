import './footer.css';
import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { BsMouse } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { TiSocialDribbble } from 'react-icons/ti';
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";


export default function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all
        <a href="#home">
          <h2>
            <BsMouse />
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="#">
          <BsInstagram className="social" />
        </a>
        <a href="#">
          <FaFacebookF className="social" />
        </a>
        <a href="#">
          <TiSocialDribbble className="social" />
        </a>
        <a href="#">
          <TiSocialGithub className="social" />
        </a>
        <a href="#">
          <TiSocialYoutube className="social" />
        </a>
      </div>
    </div>
  );
}

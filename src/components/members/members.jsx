import "./members.css";
import cute from "../props/cute.jpg"
import mask from "../props/masked.jpg";
import black from "../props/blacked.jpg";
import scorpion from "../props/scorpion.jpg";
import React from "react";

export default function Members() {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Members</h1>
      <div className="member member-1">
              <img src={cute } className="member-img" alt="cute"></img>
              <div className="member-info">
                  <h1 className="name">Jaycn</h1>
                  <h3 className="position">Leader</h3>
                  <h4 className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime a ex officia odit esse nostrum enim voluptates delectus dolorum.</h4>
                  <a href="#contact" className="contact-member">
                      <span>Contact</span>
                  </a>
        </div>
       
          </div>
          <div className="member member-2">
        <img src={mask} alt="mask" className="member-img"></img>
              <div className="member-info">
                  <h1 className="name">Le Buks</h1>
                  <h3 className="position">Vice-Chancellor</h3>
                  <h4 className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime a ex officia odit esse nostrum enim voluptates delectus dolorum.</h4>
                  <a href="#contact" className="contact-member">
                      <span>Contact</span>
                  </a>
        </div>
       
          </div>
          <div className="member member-3">
        <img src={black} alt="black" className="member-img"></img>
              <div className="member-info">
                  <h1 className="name">Stephanie</h1>
                  <h3 className="position">General</h3>
                  <h4 className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime a ex officia odit esse nostrum enim voluptates delectus dolorum.</h4>
                  <a href="#contact" className="contact-member">
                      <span>Contact</span>
                  </a>
              </div>
              
       
          </div>
            <div className="member member-2">
        <img src={scorpion} alt="scorpion" className="member-img"></img>
              <div className="member-info">
                  <h1 className="name">Jagz</h1>
                  <h3 className="position">Senior</h3>
                  <h4 className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime a ex officia odit esse nostrum enim voluptates delectus dolorum.</h4>
                  <a href="#contact" className="contact-member">
                      <span>Contact</span>
                  </a>
        </div>
       
          </div>
    </div>
  );
}

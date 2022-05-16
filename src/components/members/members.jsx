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
                  <h4 className="about">The boss himself, he is the initiator, the creative and the backbone behind this company. He is co-ordinated, he is humble and optimistic. In good times and bad times, he remains unshaken </h4>
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
                  <h4 className="about">We call him "the special one", you could think of him as our prime "Jose Mourinho", he is strategic, he is tactical, he is witty and heuristic in his problem-solving approach. Our very own world-class employee of the year.</h4>
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
                  <h4 className="about">Our very special, witty, kind, ever-willing to help special agent with big abilities, you can never run out of options with her.</h4>
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
                  <h4 className="about">One of the biggest youngsters in the industry, he is creative, euthausistic, easy to work with and has a very open personality</h4>
                  <a href="#contact" className="contact-member">
                      <span>Contact</span>
                  </a>
        </div>
       
          </div>
    </div>
  );
}

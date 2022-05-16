import "./home.css";
import React, {useState} from "react"
import image from "../props/cat-mod.png";
import Button from "../button/button"
import { BsMouse } from "react-icons/bs";

export default function Home () {
  const [isActive, setIsActive] = useState(false);
  const [more, setMore] = useState(false);
  const clickHandle = () => setMore(true);
  const handleLess = () => setMore(false);
  const handleClick = () => isActive? setIsActive(false) : setIsActive(true);
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className={ `main-img ${isActive? "active" : ""}` } onClick={handleClick}>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <img src={image} alt="a pics from I" />
      </div>
      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>
      <h2>
        <span>About Me</span>
        <br />
        <p>My name is Okonkwo Jude Chukwuemeka, I am currently a React Frontend developer based in Lagos, Nigeria. Over the years, I have been able to gather up some { more ? <span className="more">work experiences from internship roles in various firms as seen below.<p>
          <h4>Experience</h4>
<h5>August 2018–September 2018</h5>
Mobile Application service unit, Online banking services • Intern • Diamond bank.
<h5>January 2019–February 2019</h5>
IT, DevOps (Development Operations) • Intern • Diamond bank
<h5>August 2019–January 2020</h5>
Regional customer application Engineering (RCAE), Generator Services GE Power• EID (Early Intern Development) Intern • GE
<h5>Currently</h5>
          Frontend Web developer using React.js and Next.js.
<h5>Summary</h5>
While at Diamond Bank in August 2018, I witnessed the implementation of a chatbot that would run while using the Diamond bank Mobile App. It’s intended creation was to aid customer in using the app and tending to customer difficulties interactively.
<p>
During my time in the DevOps Unit in January 2019, I learnt web development using programming languages such as HTML, CSS, JavaScript and jQuery. 
</p>
<p>
In August 2019, I carried out my 6-month SIWES (Students Industrial Work Experience scheme) internship in GE. I worked with RCAE services team where I was able to also provide solutions to Field engineers on-site during the building or maintenance of stable and efficient power generating stations for our clients. I particularly worked with the generator services unit where I was tasked with coming up with new solutions to increase power efficiency in the generating system.  
 </p>
<h4>Education</h4>
University Of Nigeria, Nsukka, Enugu
<p>•	Currently a graduate from the department of Electronic Engineering. While in school I took trainings in Artificial Intelligence where I learnt about Classification Algorithms such as Convolutional Neural Network, K-Nearest Neighbors and SVM in classifying complex data.
</p>
<p>•	Also learnt about the Confusion Matrix which is basically used in determining the accuracy of the classification. 
</p>
<p>            •	I also have a slight experience in Control systems Engineering due to course works and a project in a Two-way Multi-Level Access Control System using Facial Recognition and RFID (Radio Frequency Identification)
</p>
<p>            •	During my project, I used Python as the programming language in creating the Facial recognition System with the use of OpenCV library
</p>
            <h4>Communication</h4>
I try to make eye contact, listen attentively, and speak clearly so that whoever I am talking with understands what I am saying. I also try to keep in mind to be open-minded when I am communicating with others who are of a different background.
<h4>Leadership</h4>
I would describe my leadership style as direct, and leading by example. I enjoy delegating tasks and taking the lead on projects, but I also like to stay involved and inspire my team by showing that I'm working hands-on to help them, too.
<h4><span aria-label="lightning" className="emoji" role="img">⚡</span>Fun Fact</h4>
<img src="https://i.imgur.com/maStk86.png" alt="trollface" className="trollface" /> When I am not coding, I'd be watching Anime or playing FIFA or playing Chess.
          <h4><span aria-label="scope" role="img" className="emoji">🔭</span> I’m currently working on</h4>
          Mastering React
          How to fetch data from an API using React
        <h4> <span aria-label="People" className="emoji" role="img">👯</span> I’m looking to collaborate on</h4>
        Building a full fledged web/mobile application
        </p><span className="show" onClick={ handleLess }><a href="#home">show less</a></span></span> : <span className="show"  onClick={ clickHandle }>show more</span> }
        </p>
      </h2>
      <Button/>
    </div>
  );
}

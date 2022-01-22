import React from "react";
import photo from '../../assets/images/IMG_9557.JPG'

function About() {
  return (
    <div className="about-me">
      <h2 className="mx-2">About Me</h2>
      <div className="flex-row">
        <img src={photo} className="mx-2" style={{width: '40%'}} />
        <p className="mx-2">
          My name is Riley and I am a full time fabrication engineer and a new web devleoper. 
          I'm currently enrolled in a coding bootcamp, with the end goal of making a career change.
          I have recieved my AutoCAD certification in highschool and have been working full time for 4 years. 
          I have had to learn Inventor and various laser programming softwares both independenatly and with instructional lessons.
        </p>
      </div>
    </div>
  );
}

export default About;
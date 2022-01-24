import React from "react";
import photo from '../../assets/images/IMG_9557.JPG'

function About() {
  return (
    <div className="about-me">
      <h2 className="mx-2" style={{'flex': '100%'}}>About Me</h2>
      <div className="mx-2 about-me-box">
        <img src={photo} />
        <p className="mx-2" style={{'margin-top': 0}}>
          My name is Riley Foust and I am a web developer with a love for problem-solving and a passion for coding. 
          I have a background in Engineering so I am accompanied to working on a team, coming up with new ideas and solutions, and meeting expected deadlines.
          My future goals include learning Python and being able to work with machine learning and develop new AI software.
        </p>
      </div>
    </div>
  );
}

export default About;
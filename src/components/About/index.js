import React, {useEffect} from "react";
import photo from '../../assets/images/IMG_9557.JPG'

function About() {
  return (
    <div className="">
      <h2>About Me</h2>
      <div className="flex-row">
        <img src={photo} style={{width: '40%'}} />
        <p className="mx-2">Stuff about me</p>
      </div>
    </div>
  );
}

export default About;
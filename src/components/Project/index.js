import React, {useState} from "react";
import photo from '../../assets/images/weather-buddy.png'

function Project() {
  return (
    <div className="project-card">
      <h3>Weather Buddy</h3>
      <img className="mx-2" src={photo} />
      <div>Github</div>
    </div>
  );
}

export default Project;
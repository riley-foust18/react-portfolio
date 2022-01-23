import React, {useState} from "react";
import photo from '../../assets/images/weather-buddy-full.png';

function Project() {
  return (
    <div className="project-section">
      <div className="project-card">
        <img className="project-card-img" src={photo}/>
        <div className="project-card-description">
          <a className="project-card-icon" href="https://github.com/riley-foust18/WeatherBuddy">WeatherBuddy</a>
          <a className="project-card-icon" href="github.com">Link</a>
          <a className="project-card-icon" href="github.com">Link</a>
        </div>
      </div>

      <div className="project-card">
        <img className="project-card-img" src={photo}/>
        <div className="project-card-description">
          <a className="project-card-icon" href="https://github.com/riley-foust18/WeatherBuddy">WeatherBuddy</a>
          <a className="project-card-icon" href="github.com">Link</a>
          <a className="project-card-icon" href="github.com">Link</a>
        </div>
      </div>

      <div className="project-card">
        <img className="project-card-img" src={photo}/>
        <div className="project-card-description">
          <a className="project-card-icon" href="https://github.com/riley-foust18/WeatherBuddy">WeatherBuddy</a>
          <a className="project-card-icon" href="github.com">Link</a>
          <a className="project-card-icon" href="github.com">Link</a>
        </div>
      </div>
      
      <div className="project-card">
        <img className="project-card-img" src={photo}/>
        <div className="project-card-description">
          <a className="project-card-icon" href="https://github.com/riley-foust18/WeatherBuddy">WeatherBuddy</a>
          <a className="project-card-icon" href="github.com">Link</a>
          <a className="project-card-icon" href="github.com">Link</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
import React, {useState} from "react";
import photo from '../../assets/images/weather-buddy-full.png';
import icon from '../../assets/images/github-icon.png';

function Project(props) {
  const {
    projects = []
  } = props;

  return (
    <div className="project-section">
      {projects.map((project) => (
        <div className="project-card">
          <img className="project-card-img" src={photo}/>
          <div className="project-card-box">
            <a className="project-card-name" href={`${project.link}`}>{project.name}</a>
            <a className="project-card-icon" href={`${project.githubLink}`}>
              <img src={icon} />
            </a>
            <p className="project-card-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
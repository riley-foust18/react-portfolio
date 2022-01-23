import React, {useEffect} from "react";

function Resume() {
  return (
    <div className="resume">
      <h2 className="mx-2">Resume</h2>
      <p className="mx-2">Download my resume <a style={{'text-decoration': 'underline'}} href="https://docs.google.com/document/d/14Vj0TTzaR7pWEDq9bV855F3mIz8fPeMTCQ4-kDu3dXc/edit?usp=sharing">here</a></p>
      <div>
        <h3 className="mx-2">Front-end Skills</h3>
        <ul className="mx-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>

        <h3 className="mx-2">Back-end Skills</h3>
        <ul className="mx-2">
          <li>APIs</li>
          <li>REST</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>Sequlize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
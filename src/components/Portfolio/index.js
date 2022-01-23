import React, {useState} from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Run Buddy',
      link: 'https://riley-foust18.github.io/run-buddy/index.html',
      githubLink: 'https://github.com/riley-foust18/run-buddy', 
      description: 'HTML, CSS' 
    },
    {
      name: 'Weather Buddy',
      link: '',
      githubLink: '', 
      description: 'Portraits of people in my life' 
    },
    {
      name: 'food',
      link: '',
      githubLink: '', 
      description: 'Delicious delicacies' 
    },
    {
      name: 'landscape',
      link: '',
      githubLink: '', 
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature' 
    },
    {
      name: 'landscape',
      link: '',
      githubLink: '', 
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature' 
    },
    {
      name: 'landscape',
      link: '',
      githubLink: '', 
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature' 
    }
  ]);

  return (
    <div className="portfolio">
      <h2 className="mx-2">Portfolio</h2>
      <Project
        projects={projects}
      ></Project>
    </div>
  );
}

export default Portfolio;
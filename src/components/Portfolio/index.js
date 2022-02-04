import React, {useState} from "react";
import Project from "../Project";
import weatherBuddy from '../../assets/images/weather-buddy-full.png';
import moneyTrack from '../../assets/images/money-track.jpg';
import runBuddy from '../../assets/images/run-buddy.png';
import noteTaker from '../../assets/images/note-taker.png';
import dinnerGuru from '../../assets/images/dinner-guru.png';
import interviewKey from '../../assets/images/logo-interview-key.png';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Run Buddy',
      link: 'https://riley-foust18.github.io/run-buddy/index.html',
      githubLink: 'https://github.com/riley-foust18/run-buddy', 
      description: 'HTML, CSS',
      image: runBuddy 
    },
    {
      name: 'Weather Buddy',
      link: 'https://riley-foust18.github.io/WeatherBuddy/',
      githubLink: 'https://github.com/riley-foust18/WeatherBuddy', 
      description: 'HTML, CSS, JavaScript, API' ,
      image: weatherBuddy
    },
    {
      name: 'MoneyTrack',
      link: 'https://money-track-rf.herokuapp.com/',
      githubLink: 'https://github.com/riley-foust18/MoneyTrack', 
      description: 'NoSQL, IndexDB, HTML, CSS' ,
      image: moneyTrack
    },
    {
      name: 'Note Taker',
      link: 'https://shrouded-cliffs-50884.herokuapp.com/',
      githubLink: 'https://github.com/riley-foust18/note-taker', 
      description: 'HTML, CSS, JavaScript' ,
      image: noteTaker
    },
    {
      name: 'Dinner Guru',
      link: 'https://detrasmental.github.io/the-dinner-guru/',
      githubLink: 'https://github.com/detrasmental/the-dinner-guru', 
      description: 'HTML, CSS, JavaScript, API' ,
      image: dinnerGuru
    },
    {
      name: 'Interview Key',
      link: 'https://morning-coast-83495.herokuapp.com/',
      githubLink: 'https://github.com/Danster4/interview-key', 
      description: 'MERN' ,
      image: interviewKey
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